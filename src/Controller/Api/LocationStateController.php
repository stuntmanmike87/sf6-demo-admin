<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Entity\LocationState;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Exception\InvalidCsrfTokenException;
use Symfony\Component\Serializer\Serializer;
use Symfony\Contracts\Translation\TranslatorInterface;

final class LocationStateController extends AbstractController
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
     * List states.
     */
    #[Route('/api/location/states', name: 'api_location_state_list', methods: ['GET'])]
    public function list(Request $request): Response
    {
        $success = false;
        $jsonData = [];
        $message = $this->translator->trans('app.message.no_results_found');

        $countryId = $request->query->get('countryId');
        $tokenApi = $request->query->get('token');

        /** @var \Symfony\Component\Security\Core\Authentication\Token\TokenInterface $token */
        $token = $this->tokenStorage->getToken();
        /** @var User $user */
        $user = $token->getUser();

        if (!$this->isCsrfTokenValid('api', $tokenApi) || !$user instanceof User) {
            throw new InvalidCsrfTokenException();
        }

        $response = new JsonResponse();

        if (null === $countryId) {
            $response->setData([
                'success' => $success,
                'message' => $message,
            ]);

            return $response;
        }

        /** @var LocationState[] $locationStates */
        $locationStates = $this->entityManager
            ->getRepository(LocationState::class)
            ->listAllByCountry((int) $countryId);

        if ([] !== $locationStates){
            $success = true;
            $message = $this->translator->trans('app.message.successfully_found');

            $serializer = new Serializer();
            $jsonData = $serializer->normalize($locationStates, 'json');
        }

        $response->setData([
            'success' => $success,
            'message' => $message,
            'data' => $jsonData,
        ]);

        return $response;
    }
}
