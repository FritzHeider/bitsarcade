<?php

namespace App\Console\Commands;

use App\Notifications\DiscordPromocode;
use App\Notifications\DiscordVipPromocode;
use App\Settings;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Notification;
use Intervention\Image\Facades\Image;
use VK\Client\VKApiClient;

class SendVipPromocode extends Command {

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'datagamble:sendVipPromocode';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send VIP promocode to Discord channel';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct() {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle() {
        $sum = floatval(Settings::where('name', 'vip_promo_sum')->first()->value);
        $usages = intval(Settings::where('name', 'vip_promo_usages')->first()->value);

        $promocode = \App\Promocode::create([
            'code' => \App\Promocode::generate(),
            'used' => [],
            'sum' => $sum,
            'usages' => $usages,
            'currency' => 'doge',
            'times_used' => 0,
            'expires' => \Carbon\Carbon::now()->addHours(1),
            'vip' => true
        ]);

        Notification::route('discord', Settings::where('name', 'discord_vip_promocode_channel')->first()->value)->notify(new DiscordVipPromocode($promocode->code, $usages, $sum));
    }

}
