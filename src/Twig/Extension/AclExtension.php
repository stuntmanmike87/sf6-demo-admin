<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use App\Twig\Runtime\AclExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

final class AclExtension extends AbstractExtension
{
    public function getFilters(): array
    {
        return [];
    }

    public function getFunctions(): array
    {
        return [
            new TwigFunction('acl_is_accessible', [AclExtensionRuntime::class, 'isAccessible']),
        ];
    }
}
