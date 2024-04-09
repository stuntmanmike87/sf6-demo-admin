<?php

declare(strict_types=1);

namespace App\Form\Helper;

use App\Entity\LocationCity;
use App\Entity\LocationCountry;
use App\Entity\LocationNeighborhood;
use App\Entity\LocationState;
use App\Entity\User;
use App\Utils\StringHelper;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

final readonly class LocationHelper
{
    public function __construct(
        private EntityManager $entityManager,
        private RequestStack $request
    ) {
    }

    /**
     * Returns states from a country in a dropdown (ChoiceType).
     *
     * @param object|null $entityByGet in case without a entity reference in the route of method controller,
     *                                 should be added manually the entity in the form type class
     *
     * @return array<mixed>
     */
    public function getStates(string $key, ?object $entityByGet = null): array
    {// Cognitive complexity for "App\Form\Helper\LocationHelper::getStates()" is 14, keep it under 8
        /** @var Request $req */
        $req = $this->request->getCurrentRequest();
        if ($this->requestMethodIsPOST()) {
            $entity = $req->get($key);
        } elseif (null !== $entityByGet) {
            $entity = $entityByGet;
        } else {
            $entity = $req->get(StringHelper::dashesToCamelCase($key, '_'));
        }

        if (null === $entity) {
            return [];
        }

        $location_country_id = null;

        if ('object' === gettype($entity)) {
            /** @var LocationCountry $locationCountry */
            /** @var LocationState $entity */
            $locationCountry = $entity->getCountry(); // Call to an undefined method object::getCountry().

            if (!$locationCountry instanceof LocationCountry) {
                return [];
            }

            $location_country_id = $locationCountry->getId();
        } elseif ('array' === gettype($entity)) {
            if (null === $entity['location_country_id']) {
                return [];
            }

            $location_country_id = $entity['location_country_id'];
        }

        if (null === $location_country_id) {
            return [];
        }

        $locationCountry = $this->entityManager
            ->getRepository(LocationCountry::class)
            ->find($location_country_id);

        $states = $this->entityManager
            ->getRepository(LocationState::class)
            ->findBy([
                'country' => $locationCountry,
            ], [
                'name' => 'ASC',
            ]);

        $choices = [];

        foreach ($states as $state) {
            /* @var LocationState $state */
            $choices[$state->getName()] = $state->getId();
        }

        return $choices;
    }

    /**
     * Returns cities from a state in a dropdown (ChoiceType).
     *
     * @return array<mixed>
     */
    public function getCities(string $key, ?object $entityByGet = null): array
    {// Cognitive complexity for "App\Form\Helper\LocationHelper::getCities()" is 14, keep it under 8
        /** @var Request $req */
        $req = $this->request->getCurrentRequest();
        if ($this->requestMethodIsPOST()) {
            $entity = $req->get($key);
        } elseif (null !== $entityByGet) {
            $entity = $entityByGet;
        } else {
            $entity = $req->get(StringHelper::dashesToCamelCase($key, '_'));
        }

        if (null === $entity) {
            return [];
        }

        $location_state_id = null;

        if ('object' === gettype($entity)) {
            /** @var LocationState $locationState */
            /** @var LocationCity $entity */
            $locationState = $entity->getState(); // Call to an undefined method object::getState().

            if (!$locationState instanceof LocationState) {
                return [];
            }

            $location_state_id = $locationState->getId();
        } elseif ('array' === gettype($entity)) {
            if (null === $entity['state']) {
                return [];
            }

            $location_state_id = $entity['state'];
        }

        if (null === $location_state_id) {
            return [];
        }

        $locationState = $this->entityManager
            ->getRepository(LocationState::class)
            ->find($location_state_id);

        $cities = $this->entityManager
            ->getRepository(LocationCity::class)
            ->findBy([
                'state' => $locationState,
            ], [
                'name' => 'ASC',
            ]);

        $choices = [];

        foreach ($cities as $city) {
            /* @var LocationCity $city */
            $choices[$city->getName()] = $city->getId();
        }

        return $choices;
    }

    /**
     * Set all values with correctly format of locations before submit.
     */
    public function setLocationBeforeSubmit(FormInterface $form, mixed $entity): void
    {
        /** @var User $entity */

        // Update location country.
        $location_country_id = $form->get('location_country_id')->getData();

        if (null !== $location_country_id) {
            /** @var LocationCountry $locationCountry */
            $locationCountry = $this->entityManager->getRepository(LocationCountry::class)
                ->find($location_country_id);

            $entity->setCountry($locationCountry);
        }

        // Update location state.
        $location_state_id = $form->get('state')->getData();
        // ** @var int|null $location_state_id */
        if (null !== $location_state_id) {
            /** @var LocationState $locationState */
            $locationState = $this->entityManager->getRepository(LocationState::class)
                ->find($location_state_id);
            $entity->setState($locationState);
        }

        // Update location city.
        $location_city_id = $form->get('city')->getData();

        if (null !== $location_city_id) {
            /** @var LocationCity $locationCity */
            $locationCity = $this->entityManager->getRepository(LocationCity::class)
                ->find($location_city_id);

            $entity->setCity($locationCity);

            // Set correct neightborhood.
            $neighborhood = $form->get('neighborhood')->getData();

            if (null !== $neighborhood) {
                /** @var LocationNeighborhood $locationNeighborhood */
                $locationNeighborhood = $this->entityManager->getRepository(LocationNeighborhood::class)
                    ->findAdd([
                        'location_city_id' => $location_city_id,
                        'name' => $neighborhood,
                    ]);

                $entity->setNeighborhood($locationNeighborhood);
            } else {
                $entity->setNeighborhood(null);
            }
        }
    }

    /**
     * Set all values with correctly format of locations before load form.
     */
    public function setLocationBeforeLoadForm(FormInterface $form, mixed $entity): void
    {
        /** @var User $entity */

        // Set location state on form.
        /** @var LocationState $locationState */
        $locationState = $entity->getState();
        if ($locationState instanceof LocationState) {
            $form->get('state')->setData($locationState->getId());
        }

        // Set location city on form.
        /** @var LocationCity $locationCity */
        $locationCity = $entity->getCity();
        if ($locationCity instanceof LocationCity) {
            $form->get('city')->setData($locationCity->getId());
        }

        // Set location neighborhood on form.
        /** @var LocationNeighborhood $locationNeighborhood */
        $locationNeighborhood = $entity->getNeighborhood();
        if ($locationNeighborhood instanceof LocationNeighborhood) {
            $form->get('neighborhood')->setData($locationNeighborhood->getName());
        }
    }

    private function requestMethodIsPOST(): bool
    {
        /** @var Request $req */
        $req = $this->request->getCurrentRequest();

        return Request::METHOD_POST == $req->getMethod();
    }
}
