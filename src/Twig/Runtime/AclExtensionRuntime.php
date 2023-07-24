<?php

namespace App\Twig\Runtime;

use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Twig\Extension\RuntimeExtensionInterface;

class AclExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(private readonly TokenStorageInterface $tokenStorage)
    {
        // Inject dependencies if needed
    }

    /**
     * Return true if a certain action from a controller or only a controller,
     * the logged user has permission to access.
     */
    public function isAccessible(string $prefix, string $controller, ?string $action = null): bool
    {
        $acl = $this->tokenStorage->getToken()->getUser()->getAcl();

        return ((isset($action) && isset($acl[$prefix][$controller][$action])) || (empty($action) && isset($acl[$prefix][$controller])));
    }
}
