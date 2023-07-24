<?php

namespace App\Twig\Extension;

use App\Twig\Runtime\LanguageExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

class LanguageExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [
            new TwigFilter('app_language_flag_icon', [LanguageExtensionRuntime::class, 'getFlagIconByLocale']),
        ];
    }

    public function getFunctions(): array
    {
        return [];
    }
}
