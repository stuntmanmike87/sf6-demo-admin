<?php

declare(strict_types=1);

namespace App\Twig\Extension;

use Override;
use App\Twig\Runtime\AclExtensionRuntime;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

final class AclExtension extends AbstractExtension
{
    #[Override]
    public function getFilters(): array
    {
        return [];
    }

    #[Override]
    public function getFunctions(): array
    {
        return [
            new TwigFunction('acl_is_accessible', [AclExtensionRuntime::class, 'isAccessible']),
        ];
    }
}
