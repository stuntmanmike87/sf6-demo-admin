<?php

declare(strict_types=1);

namespace App\Controller\Admin;

use App\Entity\User;
use App\Form\SettingsAddressType;
use App\Form\SettingsProfileType;
use App\Form\SettingsSecurityType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Contracts\Translation\TranslatorInterface;

final class SettingsController extends AdminController
{
    /**
     * Edit security data of the logged user.
     */
    #[Route('/admin/settings/security', name: 'admin_settings_security')]
    public function security(Request $request, TranslatorInterface $translator, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $form = $this->createForm(SettingsSecurityType::class, $user)
            ->add('submit', SubmitType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setUpdatedAt(new \DateTime());

            $entityManager->flush();

            $this->addFlash('success', $translator->trans('app.saved_successfully'));
        }

        return $this->render('admin/settings/security.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit profile of the logged user.
     */
    #[Route('/admin/settings/profile', name: 'admin_settings_profile')]
    public function profile(Request $request, TranslatorInterface $translator, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $form = $this->createForm(SettingsProfileType::class, $user)
            ->add('submit', SubmitType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setUpdatedAt(new \DateTime());

            $entityManager->flush();

            $this->addFlash('success', $translator->trans('app.saved_successfully'));
        }

        return $this->render('admin/settings/profile.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit address data of the logged user.
     */
    #[Route('/admin/settings/address', name: 'admin_settings_address')]
    public function address(Request $request, TranslatorInterface $translator, EntityManagerInterface $entityManager): Response
    {
        /** @var User $user */
        $user = $this->getUser();

        $form = $this->createForm(SettingsAddressType::class, $user)
            ->add('submit', SubmitType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user->setUpdatedAt(new \DateTime());

            $entityManager->flush();

            $this->addFlash('success', $translator->trans('app.saved_successfully'));
        }

        return $this->render('admin/settings/address.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }
}
