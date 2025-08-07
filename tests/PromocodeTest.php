<?php

// Attempt to load Composer's autoloader; fall back to requiring the class directly
if (file_exists(__DIR__ . '/../vendor/autoload.php')) {
    require __DIR__ . '/../vendor/autoload.php';
}

if (!class_exists('App\\Promocode')) {
    require __DIR__ . '/../app/Promocode.php';
}

use App\Promocode;
use PHPUnit\Framework\TestCase;

class PromocodeTest extends TestCase
{
    public function testGenerateReturnsEightUppercaseCharacters(): void
    {
        $code = Promocode::generate();
        $this->assertSame(8, strlen($code));
        $this->assertSame(strtoupper($code), $code);
    }

    public function testGenerateProducesUniqueCodes(): void
    {
        $codes = [];
        for ($i = 0; $i < 5; $i++) {
            $codes[] = Promocode::generate();
        }
        $this->assertSame(count($codes), count(array_unique($codes)));
    }
}
