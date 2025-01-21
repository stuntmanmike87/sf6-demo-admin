<?php

declare(strict_types=1);

namespace App\Security;

use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Http\Authenticator\AbstractLoginFormAuthenticator;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\CsrfTokenBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Badge\UserBadge;
use Symfony\Component\Security\Http\Authenticator\Passport\Credentials\PasswordCredentials;
use Symfony\Component\Security\Http\Authenticator\Passport\Passport;
use Symfony\Component\Security\Http\SecurityRequestAttributes;
use Symfony\Component\Security\Http\Util\TargetPathTrait;

final class UserAuthenticator extends AbstractLoginFormAuthenticator
{
    use TargetPathTrait;

    public const string LOGIN_ROUTE = 'app_login';

    public function __construct(private readonly UrlGeneratorInterface $urlGenerator)
    {
    }

    /* private UrlGeneratorInterface $urlGenerator;

    public function __construct(UrlGeneratorInterface $urlGenerator)
    {
        $this->urlGenerator = $urlGenerator;
    } */

    #[\Override]
    public function authenticate(Request $request): Passport
    {
        $email = $request->request->get('email', '');

        $request->getSession()->set(SecurityRequestAttributes::LAST_USERNAME, $email); // (Security::LAST_USERNAME, $email);

        return new Passport(
            new UserBadge((string) $email),
            new PasswordCredentials((string) $request->request->get('password', '')),
            [
                new CsrfTokenBadge('authenticate', (string) $request->request->get('_csrf_token')),
            ]
        );
    }

    #[\Override]
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, string $firewallName): Response
    {
        $targetPath = $this->getTargetPath($request->getSession(), $firewallName);

        if ('' !== $targetPath) {
            return new RedirectResponse((string) $targetPath);
        }

        // For example:
        return new RedirectResponse($this->urlGenerator->generate('main'));
        // throw new \Exception('TODO: provide a valid redirect inside '.__FILE__);
    }

    #[\Override]
    protected function getLoginUrl(Request $request): string
    {
        return $this->urlGenerator->generate(self::LOGIN_ROUTE);
    }
}
