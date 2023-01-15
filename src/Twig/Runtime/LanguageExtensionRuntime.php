<?php

namespace App\Twig\Runtime;

use App\Enum\FlagIcon\FlagIconEnum;
use App\Enum\Language\LanguageLocaleEnum;
use Twig\Extension\RuntimeExtensionInterface;

class LanguageExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct() {}

    /**
     * Show the flag icon by locale.
     *
     * @param string $locale
     * @return string
     */
    public function getFlagIconByLocale(string $locale): string
    {
       if (LanguageLocaleEnum::PT->value === $locale) {
            return FlagIconEnum::BR->value;
       } else if (LanguageLocaleEnum::EN->value === $locale) {
           return FlagIconEnum::US->value;
       }

       return $locale;
    }
}
