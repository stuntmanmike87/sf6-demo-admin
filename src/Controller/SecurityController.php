<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\ResetPasswordFormType;
use App\Form\ResetPasswordRequestFormType;
use App\Repository\UserRepository;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

final class SecurityController extends AbstractController
{
    #[Route('/login', name: 'security_login')]
    public function login(Security $security, AuthenticationUtils $helper): Response
    {
        // if user is already logged in, don't display the login page again
        if ($security->isGranted('IS_AUTHENTICATED_FULLY')) {
            return $this->redirectToRoute('admin_user_index');
        }

        return $this->render('security/login.html.twig', [
            // last username entered by the user (if any)
            'last_username' => $helper->getLastUsername(),
            // last authentication error (if any)
            'error' => $helper->getLastAuthenticationError(),
        ]);
    }

    #[Route('/logout', name: 'security_logout')]
    public function logout(): never
    {
        throw new \Exception('This should never be reached!');
    }

    #[Route('/forgotten-password', name: 'forgotten_password')]
    public function forgottenPassword(
        Request $request,
        UserRepository $usersRepository,
        TokenGeneratorInterface $tokenGenerator,
        EntityManagerInterface $entityManager,
        SendMailService $mail,
    ): Response {
        $form = $this->createForm(ResetPasswordRequestFormType::class);

        $form->handleRequest($request);

        /** @var string $form_data */
        $form_data = $form->get('email')->getData();

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var User $user */
            $user = $usersRepository->findOneByEmail($form_data);

            if ($user instanceof User) {
                $token = $tokenGenerator->generateToken();
                $user->setResetToken($token);
                $entityManager->persist($user);
                $entityManager->flush();

                $url = $this->generateUrl(
                    'reset_pass',
                    ['token' => $token], UrlGeneratorInterface::ABSOLUTE_URL
                );

                /** @var array<string> $context */
                $context = ['url' => $url, 'user' => $user];

                $mail->send(
                    'no-reply@mail.com',
                    (string) $user->getEmail(),
                    'Password reset',
                    'password_reset',
                    $context
                );

                $this->addFlash('success', 'Email sent successfully');

                return $this->redirectToRoute('app_login');
            }

            $this->addFlash('danger', 'Some problem occured');

            return $this->redirectToRoute('app_login');
        }

        return $this->render('security/reset_password_request.html.twig', [
            'requestPassForm' => $form,
        ]);
    }

    #[Route('/forgotten-password/{token}', name: 'reset_pass')]
    public function resetPass(
        TokenInterface $token,
        Request $request,
        UserRepository $usersRepository,
        EntityManagerInterface $entityManager,
        UserPasswordHasherInterface $passwordHasher,
    ): Response {
        /** @var User $user */
        $user = $usersRepository->findOneByResetToken($token);

        if ($user instanceof User) {
            $form = $this->createForm(ResetPasswordFormType::class);

            $form->handleRequest($request);

            /** @var string $form_data */
            $form_data = $form->get('password')->getData();

            if ($form->isSubmitted() && $form->isValid()) {
                $user->setResetToken('');
                $user->setPassword($passwordHasher->hashPassword($user, $form_data));
                $entityManager->persist($user);
                $entityManager->flush();

                $this->addFlash('success', 'Password changed successfully');

                return $this->redirectToRoute('app_login');
            }

            return $this->render('security/reset_password.html.twig', [
                'passForm' => $form,
            ]);
        }

        $this->addFlash('danger', 'Invalid token');

        return $this->redirectToRoute('app_login');
    }
}
