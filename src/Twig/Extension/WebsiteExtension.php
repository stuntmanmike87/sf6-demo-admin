<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use App\Twig\Runtime\WebsiteExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\TwigFunction;

final class WebsiteExtension extends AbstractExtension
{
    #[\Override]
    public function getFilters(): array
    {
        return [
            new TwigFilter('app_html_toggle', [WebsiteExtensionRuntime::class, 'getHtmlToggle']),
        ];
    }

    #[\Override]
    public function getFunctions(): array
    {
        return [
            new TwigFunction('app_image', [WebsiteExtensionRuntime::class, 'getImage']),
            new TwigFunction('app_locales', [WebsiteExtensionRuntime::class, 'getLocales']),
            new TwigFunction('display_class', [WebsiteExtensionRuntime::class, 'displayClass']),
            new TwigFunction('app_translate_text', [WebsiteExtensionRuntime::class, 'getTextByTranslateKey']),
            new TwigFunction('app_country_calling_codes', [WebsiteExtensionRuntime::class, 'getCountryCallingCodes']),
        ];
    }
}
