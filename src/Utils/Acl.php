<?php

declare(strict_types=1);

namespace App\Utils;

use App\Entity\AclPermission;
use App\Entity\AclUserGroup;
use App\Entity\User;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\EntityManagerInterface;
use Nette\Utils\Strings;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * This class is used to provide ACL (access control list) of integrating simple classes as
 * services into a Symfony application.
 *
 * @author Thomas Känzig <thomas.kanzig@gmail.com>
 */
final class Acl
{
    /** @var array<string> */
    private array $roles = [];

    public function __construct(
        private readonly RequestStack $requestStack,
        private readonly EntityManagerInterface $entityManager,
        private readonly TokenStorageInterface $tokenStorage,
        private readonly TranslatorInterface $translator,
        private readonly Security $security,
    ) {
        $this->loadRoles();
    }

    /**
     * Load all permission from user group.
     */
    public function loadRoles(): void
    {// Cognitive complexity for "App\Utils\Acl::loadRoles()" is 10, keep it under 8
        try {
            /** @var User $user */
            $user = $this->security->getUser();
        } catch (\Exception) {
            throw new AccessDeniedException($this->translator->trans('app.error.unauthorised_access'));
        }

        if (!$user instanceof User) {
            return;
        }

        /** @var AclUserGroup $aclUserGroup */
        $aclUserGroup = $user->getUserGroup();
        $userGroupId = $aclUserGroup->getId();

        $aclPermissionRepository = $this->entityManager->getRepository(AclPermission::class);
        /** @var Collection<int, AclPermission> $permissions */
        $permissions = $aclPermissionRepository->findRoles((int) $userGroupId);

        /* $permissions = $this->entityManager
            ->getRepository(AclPermission::class)
            ->findRoles($userGroupId); */

        if ((is_countable($permissions) ? count($permissions) : 0) === 0) {
            return;
        }

        foreach ($permissions as $permission) {
            // $this->roles[strtolower($permission['prefix'])][strtolower($permission['controller'])][strtolower($permission['action'])] = true;
            /** @var string $prefix */
            $prefix = $permission['prefix'];
            $prefix = strtolower($prefix);
            /** @var string $controller */
            $controller = $permission['controller'];
            $controller = strtolower($controller);
            /** @var string $action */
            $action = $permission['action'];
            $action = strtolower($action);
            if (('' === $this->roles[$prefix]) && ('' === $this->roles[$controller]) && ('' === $this->roles[$action])) {
                return;
            }

            // /* $b = */$this->roles[$prefix][$controller][$action] = true;
            // @var (string|true[][])[] $roles//Cannot assign offset string to string.
            // $this->roles[strtolower((string) $permission['prefix'])][strtolower((string)
            //  $permission['controller'])][strtolower((string) $permission['action'])] = true;
        }

        /** @var TokenInterface $token */
        $token = $this->tokenStorage->getToken();
        /** @var User $user */
        $user = $token->getUser();
        $user->setAcl($this->roles);
        // $this->tokenStorage->getToken()->getUser()->setAcl($this->roles);//Undefined method 'setAcl'
    }

    /**
     * Detect if user authorized.
     */
    public function isAuthorized(string $prefix): bool
    {
        $controller = $this->getControllerName();
        $action = $this->getActionName();
        // Variable $roles in isset() is never defined.
        // return isset($roles[$prefix][$controller][(string) $action]);

        $roles = [];

        return isset($roles[$prefix][$controller][(string) $action]);
    }

    /**
     * Return roles from user.
     *
     * @return array<mixed>
     */
    public function getRoles(): array
    {
        return $this->roles;
    }

    /**
     * Get current controller name.
     */
    public function getControllerName(): string
    {
        $request = $this->requestStack->getCurrentRequest();

        /** @var Request $request */
        /** @var string $controller */
        $controller = $request->get('_controller');
        $controller = explode('::', $controller);
        $controller = explode('\\', $controller[0]);
        $controller = Strings::replace('/Controller$/', '', end($controller));

        return StringHelper::camelCaseToDashed($controller);
    }

    /**
     * Get current action name.
     */
    // public function getActionName(): ?string
    // {
    //     /** @var Request $request */
    //     $request = $this->requestStack->getCurrentRequest();

    //     $pattern = '#Controller::([a-zA-Z]*)#';
    //     /** @var bool|int $matches */
    //     $matches = [];
    //     /** @var string $req */
    //     $req = $request->get('_controller');
    //     Strings::match($pattern, $req, $matches);

    //     /** @var int[] $matches */
    //     if (null === $matches[1]) {
    //         return null;
    //     }

    //     return StringHelper::camelCaseToDashed($matches[1]);
    // }

    public function getActionName(): ?string
    {
        /** @var Request $request */
        $request = $this->requestStack->getCurrentRequest();

        $pattern = '#Controller::([a-zA-Z]*)#';
        $matches = [];
        /** @var string $req */
        $req = $request->get('_controller');
        preg_match($pattern, $req, $matches);

        if ('' === $matches[1]) {
            return null;
        }

        return StringHelper::camelCaseToDashed($matches[1]);
    }
}
