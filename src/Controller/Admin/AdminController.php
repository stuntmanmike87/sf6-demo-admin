<?php

namespace App\Controller\Admin;

use App\Utils\Acl;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Contracts\Translation\TranslatorInterface;

/**
 * Provides to execute common script in all controllers if user logged in admin.
 *
 * @author Thomas Känzig <thomas.kanzig@gmail.com>
 */
class AdminController extends AbstractController
{
    public function __construct(Acl $acl, TranslatorInterface $translator)
    {
        if (!$acl->isAuthorized('admin')) {
            throw new AccessDeniedException($translator->trans('app.error.unauthorised_access'));
        }
    }
}
