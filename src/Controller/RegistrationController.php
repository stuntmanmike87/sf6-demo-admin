<?php

declare(strict_types=1);

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Repository\UserRepository;
use App\Security\UserAuthenticator;
use App\Service\JWTService;
use App\Service\SendMailService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Authentication\UserAuthenticatorInterface;

final class RegistrationController extends AbstractController
{
    #[Route('/signup', name: 'app_register')]
    public function register(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        UserAuthenticatorInterface $userAuthenticator,
        UserAuthenticator $authenticator,
        EntityManagerInterface $entityManager,
        SendMailService $mail,
        JWTService $jwt,
    ): ?Response {
        $user = new User();
        $form = $this->createForm(RegistrationFormType::class, $user);
        $form->handleRequest($request);

        /** @var string $form_data */
        $form_data = $form->get('plainPassword')->getData();

        if ($form->isSubmitted() && $form->isValid()) {
            // encode the plain password
            $user->setPassword($userPasswordHasher->hashPassword($user, $form_data));

            $entityManager->persist($user);
            $entityManager->flush();
            // do anything else you need here, like send an email

            $header = ['typ' => 'JWT', 'alg' => 'HS256'];

            /** @var \Symfony\Component\Uid\Uuid $uuid_id */
            $uuid_id = $user->getId();
            $id = $uuid_id->toString();
            $payload = ['user_id' => $id,];

            /** @var string $secret */
            $secret = $this->getParameter('app.jwtsecret');

            $token = $jwt->generate($header, $payload, $secret);

            /** @var array<string> $context() */
            $context = ['user' => $user, 'token' => $token];

            $mail->send(
                'no-reply@mywebsite.org',
                (string) $user->getEmail(),
                'Account activation',
                'register',
                $context
            );

            return $userAuthenticator->authenticateUser($user, $authenticator, $request);
        }

        return $this->render('registration/register.html.twig', [
            'registrationForm' => $form,
        ]);
    }

    #[Route('/verif/{token}', name: 'verify_user')]
    public function verifyUser(
        string $token,
        JWTService $jwt,
        UserRepository $usersRepository,
        EntityManagerInterface $em,
    ): Response {
        /** @var string $secret */
        $secret = $this->getParameter('app.jwtsecret');

        if ($jwt->isValid($token) && !$jwt->isExpired($token) && $jwt->check($token, $secret)) {
            $payload = $jwt->getPayload($token);

            $user = $usersRepository->find($payload['user_id']);

            if (($user instanceof User) && !(bool) $user->getIsVerified()) {
                $user->setIsVerified(true);
                $em->flush();
                $this->addFlash('success', 'User activated');

                return $this->redirectToRoute('profile_index');
            }
        }

        $this->addFlash('danger', 'Invalid or expired token');

        return $this->redirectToRoute('app_login');
    }
}
