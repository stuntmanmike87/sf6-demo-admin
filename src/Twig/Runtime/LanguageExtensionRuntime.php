<?php

declare(strict_types=1);

namespace App\Twig\Runtime;

use App\Enum\FlagIcon\FlagIconEnum;
use App\Enum\Language\LanguageLocaleEnum;
use Twig\Extension\RuntimeExtensionInterface;

final class LanguageExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct()
    {
    }

    /**
     * Show the flag icon by locale.
     */
    public function getFlagIconByLocale(string $locale): string
    {
        if (LanguageLocaleEnum::PT->value === $locale) {
            return FlagIconEnum::BR->value;
        } elseif (LanguageLocaleEnum::EN->value === $locale) {
            return FlagIconEnum::US->value;
        }

        return $locale;
    }
}
