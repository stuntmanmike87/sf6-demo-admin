<?php

declare(strict_types=1);

namespace App\Twig\Runtime;

use App\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Twig\Extension\RuntimeExtensionInterface;

final readonly class AclExtensionRuntime implements RuntimeExtensionInterface
{
    public function __construct(private TokenStorageInterface $tokenStorage)
    {
        // Inject dependencies if needed
    }

    /**
     * Return true if a certain action from a controller or only a controller,
     * the logged user has permission to access.
     */
    public function isAccessible(string $prefix, string $controller, ?string $action = null): bool
    {
        /** @var TokenInterface $token */
        $token = $this->tokenStorage->getToken();
        /** @var User $user*/
        $user = $token->getUser();
        $acl = $user->getAcl();
        //$acl = $this->tokenStorage->getToken()->getUser()->getAcl();//Undefined method 'getAcl'

        return (
            (isset($action) && isset($acl[$prefix][$controller][$action])) || (($action === null || $action === '') && isset($acl[$prefix][$controller]))
        );
    }
}
