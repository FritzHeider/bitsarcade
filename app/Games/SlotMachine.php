namespace App\Games;

use App\GameResult;
use App\Games\Kernel\Data;
use App\Games\Kernel\Metadata;
use App\Games\Kernel\Module\General\Wrapper\MultiplierCanBeLimited;
use App\Games\Kernel\ProvablyFair;
use App\Games\Kernel\ProvablyFairResult;
use App\Games\Kernel\Quick\QuickGame;
use App\Games\Kernel\Quick\SuccessfulQuickGameResult;
use App\Games\Kernel\RejectedGameResult;

class SlotMachine extends QuickGame implements MultiplierCanBeLimited {
    private const ICONS = ['apple', 'bananas', 'cherry', 'grapes', 'orange', 'pineapple', 'strawberry', 'watermelon', 'lemon', 'kiwi', 'raspberry', 'wild', 'scatter'];
    private const LINES = [
        [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2], [0, 1, 2, 1, 0], [2, 1, 0, 1, 2],
        [0, 0, 1, 2, 2], [2, 2, 1, 0, 0], [1, 0, 1, 2, 1], [1, 2, 1, 0, 1], [1, 0, 0, 1, 0],
        [1, 2, 2, 1, 2], [0, 1, 0, 0, 1], [2, 1, 2, 2, 1], [0, 2, 0, 2, 0], [2, 0, 2, 0, 2],
        [1, 0, 2, 0, 1], [1, 2, 0, 2, 1], [0, 1, 1, 1, 0], [2, 1, 1, 1, 2], [0, 2, 2, 2, 0]
    ];

    private array $payTable = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 10, 2],
        [5, 5, 5, 10, 10, 10, 15, 15, 25, 25, 50, 250, 5],
        [25, 25, 25, 50, 50, 50, 75, 75, 125, 125, 250, 2500, 0],
        [125, 125, 125, 250, 250, 250, 500, 500, 750, 750, 1250, 10000, 0]
    ];

    private int $scatterMultiplier = 1;

    public function __construct() {
        parent::__construct();
    }

    function metadata($name = null): Metadata {
        $metadata = new class extends Metadata {
            public $name = 'External Game';

            function id(): string {
                return "slotmachine";
            }

            function setName($name): self {
                $this->name = $name;
                return $this;
            }

            function name(): string {
                return $this->name;
            }

            function icon(): string {
                return "fab fa-raspberry-pi";
            }
        };

        return $name ? $metadata->setName($name) : $metadata;
    }

    private function convertToView(array $result): array {
        return array_map(function ($item) {
            return array_map(function ($value) {
                return array_search($value, self::ICONS);
            }, $item);
        }, $result);
    }

    private function wildLineWin($singleLineBet, array $line, bool $multiplierOnly = false): array {
        $wildSymbol = 11;
        $values = [$wildSymbol, 0, 0];
        if ($line[0] !== $wildSymbol) return $values;

        foreach ($line as $symbol) {
            if ($symbol !== $wildSymbol) break;
            $values[1]++;
        }

        $values[2] = $multiplierOnly
            ? $this->payTable[$values[1]][$values[0]]
            : $singleLineBet * $this->payTable[$values[1]][$values[0]];
        return $values;
    }

    private function lineWin($singleLineBet, array $line, bool $multiplierOnly = false): int {
        $wildWin = $this->wildLineWin($singleLineBet, $line, $multiplierOnly);
        $multiplier = 1;
        $symbol = $line[0];

        foreach ($line as $i => $s) {
            if ($s !== 11 && $s !== 12) {
                $symbol = $s;
                break;
            }
            if ($s === 12) break;
            $multiplier = $i < count($line) - 1 ? 2 : 1;
        }

        foreach ($line as $i => &$s) {
            if ($s === 11) {
                $s = $symbol;
                $multiplier = 2;
            }
        }

        $number = count(array_filter($line, fn($s) => $s === $symbol));
        foreach (array_slice($line, $number) as &$s) $s = -1;

        $win = $multiplierOnly
            ? $this->payTable[$number][$symbol] * $multiplier
            : $singleLineBet * $this->payTable[$number][$symbol] * $multiplier;

        return $win < $wildWin[2] ? $wildWin[2] : $win;
    }

    private function linesWin(int $lines, float $singleLineBet, array $view, bool $multiplierOnly = false): array {
        $win = 0;
        $indexes = [];

        foreach (self::LINES as $l => $pattern) {
            if ($l + 1 > $lines) continue;

            $line = array_map(fn($index, $i) => $view[$i][$index], $pattern, array_keys($pattern));
            $lineWin = $this->lineWin($singleLineBet, $line, $multiplierOnly);
            $win += $lineWin;

            if ($lineWin > 0) $indexes[] = $l + 1;
        }

        return ['profit' => $win, 'indexes' => $indexes];
    }

    private function scatterWin(float $totalBet, array $view, bool $multiplierOnly = false): float {
        $numberOfScatters = array_reduce($view, fn($carry, $column) => $carry + count(array_filter($column, fn($s) => $s === 12)), 0);

        return $multiplierOnly
            ? $this->payTable[$numberOfScatters][12] * $this->scatterMultiplier
            : $this->payTable[$numberOfScatters][12] * $totalBet * $this->scatterMultiplier;
    }

    function start($user, Data $data) {
        if (floatval(number_format($data->bet() / $data->game()->lines, 8, '.', '')) <= 0.00000000) {
            return new RejectedGameResult(1, 'Invalid bet amount per line');
        }

        return new SuccessfulQuickGameResult((new ProvablyFair($this))->result(), function (SuccessfulQuickGameResult $result, array $transformedResults) use ($user, $data) {
            $profit = $this->getProfit($data->game()->lines, $data->bet(), $data->bet() / $data->game()->lines, $this->convertToView($result->provablyFairResult()->result()));
            $result->delay(3500);