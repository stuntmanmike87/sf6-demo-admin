<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use App\Twig\Runtime\LanguageExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;

final class LanguageExtension extends AbstractExtension
{
    #[\Override]
    public function getFilters(): array
    {
        return [
            new TwigFilter('app_language_flag_icon', (new LanguageExtensionRuntime())->getFlagIconByLocale(...)),
        ];
    }

    #[\Override]
    public function getFunctions(): array
    {
        return [];
    }
}
