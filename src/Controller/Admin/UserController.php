<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\AclUserGroup;
use App\Entity\User;
use App\Entity\UserType;
use App\Form\UserAddType;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use App\Repository\AclUserGroupRepository;
use App\Repository\UserTypeRepository;
use App\Utils\TranslationHelper;
use DateTime;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

final class UserController extends AdminController
{
    #[Route('/users', name: 'admin_user_index', methods: ['GET'])]
    public function index(Request $request, UserRepository $users, EntityManagerInterface $entityManager): Response
    {
        $query = $request->query->get('q', '');

        $params = [
            'query' => $query,
            'page' => $request->query->getInt('page', 1),
        ];

        $latest = $users->findLatest($params);
        /** @var AclUserGroupRepository $aclUserGroupRepository */
        $aclUserGroupRepository = $entityManager->getRepository(AclUserGroup::class);
        /** @var array<string> $aclUserGroupTranslations */
        $aclUserGroupTranslations = $aclUserGroupRepository->findAllByLocale($request->getLocale());
        $transGroups = TranslationHelper::convertTranslateKeyAsKey($aclUserGroupTranslations);
        
        /** @var UserTypeRepository $userTypeRepository */
        $userTypeRepository = $entityManager->getRepository(UserType::class);
        /** @var array<string> $userTranslations */
        $userTranslations = $userTypeRepository->findAllByLocale($request->getLocale());
        $transTypes = TranslationHelper::convertTranslateKeyAsKey($userTranslations);

        return $this->render('admin/user/index.html.twig', [
            'users' => $latest,
            'query' => $query,
            'transGroups' => $transGroups,
            'transTypes' => $transTypes,
        ]);
    }

    #[Route('/user/{id}/edit', name: 'admin_user_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, User $user, TranslatorInterface $translator, EntityManagerInterface $entityManager): Response
    {
        $form = $this->createForm(UserEditType::class, $user)
            ->add('submit', SubmitType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setUpdatedAt(new DateTime());

            $entityManager->flush();

            $this->addFlash('success', $translator->trans('app.saved_successfully'));

            return $this->redirectToRoute('admin_user_index');
        }

        return $this->render('admin/user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/user/add', name: 'admin_user_add', methods: ['GET', 'POST'])]
    public function add(Request $request, TranslatorInterface $translator, EntityManagerInterface $entityManager): Response
    {
        $user = new User();

        $form = $this->createForm(UserAddType::class, $user)
            ->add('submit', SubmitType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setCreatedAt(new DateTime());

            $entityManager->persist($user);
            $entityManager->flush();

            $this->addFlash('success', $translator->trans('app.saved_successfully'));

            return $this->redirectToRoute('admin_user_index');
        }

        return $this->render('admin/user/add.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }
}
