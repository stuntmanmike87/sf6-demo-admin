<?php

namespace App\Controller\Api;

use App\Entity\LocationCountry;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\Translation\TranslatorInterface;

class LocationCountryController extends AbstractController
{
    /**
     * constructor.
     */
    public function __construct(
        private readonly EntityManagerInterface $entityManager,
        private readonly TokenStorageInterface $tokenStorage,
        private readonly TranslatorInterface $translator
    ) {}

    /**
     * Get location country.
     */
    #[Route('/api/location/country', name: 'api_location_country_get', methods: ['POST'])]
    public function getAction(Request $request): Response
    {
        $success = false;
        $jsonData = [];
        $message = $this->translator->trans('app.message.no_results_found');

        $alpha2 = $request->request->get('alpha2');
        $tokenApi = $request->request->get('token');

        /** @var User $user */
        $user = $this->tokenStorage->getToken()->getUser();

        if (!$this->isCsrfTokenValid('api', $tokenApi) || !$user instanceof User) {
            throw new InvalidCsrfTokenException();
        }

        $response = new JsonResponse();

        if (empty($alpha2)) {
            $response->setData([
                'success' => $success,
                'message' => $message,
            ]);

            return $response;
        }

        /** @var LocationCountry $locationCountry */
        $locationCountry = $this->entityManager
            ->getRepository(LocationCountry::class)
            ->findOneBy(['alpha2' => $alpha2]);

        if (isset($locationCountry)){
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
    public function searchAction(Request $request): Response
    {
        $success = false;
        $jsonData = [];
        $message = $this->translator->trans('app.message.no_results_found');

        $text = $request->request->get('text');
        $tokenApi = $request->request->get('token');

        if (!$this->isCsrfTokenValid('api', $tokenApi)) {
            throw new InvalidCsrfTokenException();
        }

        $response = new JsonResponse();

        if (empty($text)) {
            $response->setData([
                'success' => $success,
                'message' => $message,
            ]);

            return $response;
        }

        /** @var LocationCountry[] $locationCountry */
        $countries = $this->entityManager
            ->getRepository(LocationCountry::class)
            ->search($text);

        if (0 < (is_countable($countries) ? count($countries) : 0)){

            foreach($countries as $key => $country) {
                $countries[$key]['html'] = '<span class="fi fi-' . strtolower((string) $country['alpha2']) . '"></span>' . $country['native'];
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
