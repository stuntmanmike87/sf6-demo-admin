<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\LocationCountry;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\Translation\TranslatorInterface;

final class LocationCountryController extends AbstractController
{
    /**
     * constructor.
     */
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly TokenStorageInterface $tokenStorage,
        private readonly TranslatorInterface $translator,
    ) {
    }

    /**
     * Get location country.
     */
    #[Route('/api/location/country', name: 'api_location_country_get', methods: ['POST'])]
    public function get(Request $request): Response
    {
        $success = false;
        $jsonData = [];
        $message = $this->translator->trans('app.message.no_results_found');

        $alpha2 = $request->request->get('alpha2');
        $tokenApi = $request->request->get('token');

        /** @var TokenInterface $token */
        $token = $this->tokenStorage->getToken();
        /** @var User $user */
        $user = $token->getUser();

        if (!$this->isCsrfTokenValid('api', (string) $tokenApi) || !$user instanceof User) {
            throw new InvalidCsrfTokenException();
        }

        $response = new JsonResponse();

        if (null === $alpha2) {
            $response->setData([
                'success' => $success,
                'message' => $message,
            ]);

            return $response;
        }

        $locationCountryRepository = $this->entityManager->getRepository(LocationCountry::class);
        $locationCountry = $locationCountryRepository->findOneBy(['alpha2' => $alpha2]);

        // ** @var LocationCountry $locationCountry */
        /* $locationCountry = $this->entityManager
            ->getRepository(LocationCountry::class)
            ->findOneBy(['alpha2' => $alpha2]); */

        if (isset($locationCountry)) {
            $success = true;
            $message = $this->translator->trans('app.message.successfully_found');

            /** @var Serializer $serializer */
            $serializer = new Serializer([new ObjectNormalizer()]);
            $jsonData = $serializer->normalize($locationCountry, 'json');
        }

        $response->setData([
            'success' => $success,
            'message' => $message,
            'data' => $jsonData,
        ]);

        return $response;
    }

    /**
     * Search location country.
     */
    #[Route('/api/location/country/search', name: 'api_location_country_search', methods: ['POST'])]
    public function search(Request $request): Response
    {
        $success = false;
        $jsonData = [];
        $message = $this->translator->trans('app.message.no_results_found');

        $text = $request->request->get('text');
        $tokenApi = $request->request->get('token');

        if (!$this->isCsrfTokenValid('api', (string) $tokenApi)) {
            throw new InvalidCsrfTokenException();
        }

        $response = new JsonResponse();

        if (null === $text) {
            $response->setData([
                'success' => $success,
                'message' => $message,
            ]);

            return $response;
        }

        $locationCountryRepository = $this->entityManager->getRepository(LocationCountry::class);
        /** @var LocationCountry[] $countries */
        $countries = $locationCountryRepository->search((string) $text);

        /* $countries = $this->entityManager
            ->getRepository(LocationCountry::class)
            ->search($text); */

        if (0 < (is_countable($countries) ? count($countries) : 0)) {
            foreach ($countries as $key => $country) {
                /** @var string $alpha2 */
                $alpha2 = $country['alpha2'];
                /** @var string $native */
                $native = $country['native'];
                $countries[$key]['html'] = '<span class="fi fi-'.strtolower($alpha2).'"></span>'.$native;
            }

            $success = true;
            $message = $this->translator->trans('app.message.successfully_found');

            $serializer = new Serializer();
            $jsonData = $serializer->normalize($countries, 'json');
        }

        $response->setData([
            'success' => $success,
            'message' => $message,
            'data' => $jsonData,
        ]);

        return $response;
    }
}
