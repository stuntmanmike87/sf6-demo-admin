<?php

namespace App\Utils;

use App\Entity\User;
use App\Utils\StringHelper;
use Symfony\Component\HttpFoundation\RequestStack;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\AclPermission;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\Security\Core\Security;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * This class is used to provide ACL (access control list) of integrating simple classes as
 * services into a Symfony application.
 *
 * @author Thomas Känzig <thomas.kanzig@gmail.com>
 */
class Acl
{
    private array $roles = [];

    public function __construct(
        private readonly RequestStack $requestStack,
        private readonly EntityManagerInterface $entityManager,
        private readonly TokenStorageInterface $tokenStorage,
        private readonly TranslatorInterface $translator,
        private readonly Security $security
    ) {
        $this->loadRoles();
    }

    /**
     * Load all permission from user group
     */
    public function loadRoles(): void
    {
        try {
            /* @var User $user */
            $user = $this->security->getUser();
        } catch (\Exception) {
            throw new AccessDeniedException($this->translator->trans('app.error.unauthorised_access'));
        }

        if (!$user instanceof User)  {
            return;
        }

        $userGroupId = $user->getUserGroup()->getId();

        $permissions = $this->entityManager
            ->getRepository(AclPermission::class)
            ->findRoles($userGroupId);

        if (!(is_countable($permissions) ? count($permissions) : 0)) {
            return;
        }

        foreach($permissions as $permission) {
            $this->roles[strtolower($permission['prefix'])][strtolower($permission['controller'])][strtolower($permission['action'])] = true;
        }

        $this->tokenStorage->getToken()->getUser()->setAcl($this->roles);
    }

    /**
     * Detect if user authorized.
     */
    public function isAuthorized(string $prefix): bool
    {
        $controller = $this->getControllerName();
        $action = $this->getActionName();

        if (isset($this->roles[$prefix][$controller][$action])) {
            return true;
        }

        return false;
    }

    /**
     * Return roles from user.
     */
    public function getRoles(): array
    {
        return $this->roles;
    }

    /**
     * Get current controller name
     *
     * @return string
     */
    public function getControllerName(): ?string
    {
        $request = $this->requestStack->getCurrentRequest();

        $controller = $request->get('_controller');
        $controller = explode('::', $controller);
        $controller = explode('\\', $controller[0]);
        $controller = preg_replace('/Controller$/', '', end($controller));

        return StringHelper::camelCaseToDashed($controller);
    }

    /**
     * Get current action name
     *
     * @return string
     */
    public function getActionName(): ?string
    {
        $request = $this->requestStack->getCurrentRequest();

        $pattern = "#Controller::([a-zA-Z]*)#";
        $matches = [];
        preg_match($pattern, (string) $request->get('_controller'), $matches);


        if(empty($matches[1])) {
            return null;
        }

        return StringHelper::camelCaseToDashed($matches[1]);
    }
}
