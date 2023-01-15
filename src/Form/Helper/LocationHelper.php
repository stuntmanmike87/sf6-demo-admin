<?php

namespace App\Form\Helper;

use App\Entity\LocationCity;
use App\Entity\LocationCountry;
use App\Entity\LocationNeighborhood;
use App\Entity\LocationState;
use App\Utils\StringHelper;
use Symfony\Component\Form\FormInterface;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;

class LocationHelper
{
    public function __construct(
        private readonly EntityManager $entityManager,
        private readonly RequestStack $request
    ) { }

    /**
     * Returns states from a country in a dropdown (ChoiceType).
     *
     * @param object|null $entityByGet In case without a entity reference in the route of method controller, should be added manually the entity in the form type class.
     *
     */
    public function getStates(string $key, ?object $entityByGet = null): array
    {
        if ($this->requestMethodIsPOST()) {
            $entity = $this->request->getCurrentRequest()->get($key);
        } else if ($entityByGet) {
            $entity = $entityByGet;
        } else {
            $entity = $this->request->getCurrentRequest()->get(StringHelper::dashesToCamelCase($key, "_"));
        }

        if (empty($entity)) {
            return [];
        }

        $location_country_id = null;

        if ('object' == gettype($entity)) {
            /** @var LocationCountry $locationCountry */
            $locationCountry = $entity->getCountry();

            if (!$locationCountry) {
                return [];
            }

            $location_country_id = $locationCountry->getId();
        } elseif ('array' == gettype($entity)){
            if (empty($entity['location_country_id'])) {
                return [];
            }

            $location_country_id = $entity['location_country_id'];
        }

        if (!$location_country_id) {
            return [];
        }

        $locationCountry = $this->entityManager
            ->getRepository(LocationCountry::class)
            ->find($location_country_id);

        $states = $this->entityManager
            ->getRepository(LocationState::class)
            ->findBy([
                'country' => $locationCountry
            ], [
                'name' => 'ASC'
            ]);

        $choices = [];

        foreach ($states as $state) {
            /** @var LocationState $state */
            $choices[$state->getName()] = $state->getId();
        }

        return $choices;
    }

    /**
     * Returns cities from a state in a dropdown (ChoiceType).
     *
     *
     */
    public function getCities(string $key, ?object $entityByGet = null): array
    {
        if ($this->requestMethodIsPOST()) {
            $entity = $this->request->getCurrentRequest()->get($key);
        } else if ($entityByGet) {
            $entity = $entityByGet;
        } else {
            $entity = $this->request->getCurrentRequest()->get(StringHelper::dashesToCamelCase($key, "_"));
        }

        if (empty($entity)) {
            return [];
        }

        $location_state_id = null;

        if ('object' == gettype($entity)) {
            /** @var LocationState $locationState */
            $locationState = $entity->getState();

            if (!$locationState) {
                return [];
            }

            $location_state_id = $locationState->getId();
        } elseif ('array' == gettype($entity)){
            if (empty($entity['state'])) {
                return [];
            }

            $location_state_id = $entity['state'];
        }

        if (!$location_state_id) {
           return [];
        }

        $locationState = $this->entityManager
            ->getRepository(LocationState::class)
            ->find($location_state_id);

        $cities = $this->entityManager
            ->getRepository(LocationCity::class)
            ->findBy([
                'state' => $locationState
            ], [
                'name' => 'ASC'
            ]);

        $choices = [];

        foreach ($cities as $city) {
            /** @var LocationCity $city */
            $choices[$city->getName()] = $city->getId();
        }

        return $choices;
    }


    /**
     * Set all values with correctly format of locations before submit.
     *
     * @param $entity
     */
    public function setLocationBeforeSubmit(FormInterface $form, $entity): void
    {
        // Update location country.
        $location_country_id = $form->get('location_country_id')->getData();

        if ($location_country_id) {
            /** @var LocationCountry $locationCountry */
            $locationCountry = $this->entityManager->getRepository(LocationCountry::class)
                ->find($location_country_id);

            $entity->setCountry($locationCountry);
        }

        // Update location state.
        $location_state_id = $form->get('state')->getData();

        if ($location_state_id) {
            /** @var LocationState $locationState */
            $locationState = $this->entityManager->getRepository(LocationState::class)
                ->find($location_state_id);
            $entity->setState($locationState);
        }

        // Update location city.
        $location_city_id = $form->get('city')->getData();

        if ($location_city_id) {
            /** @var LocationCity $locationCity */
            $locationCity = $this->entityManager->getRepository(LocationCity::class)
                ->find($location_city_id);

            $entity->setCity($locationCity);

            // Set correct neightborhood.
            $neighborhood = $form->get('neighborhood')->getData();

            if ($neighborhood) {
                /** @var LocationNeighborhood $locationNeighborhood */
                $locationNeighborhood = $this->entityManager->getRepository(LocationNeighborhood::class)
                    ->findAdd([
                        'location_city_id' => $location_city_id,
                        'name' => $neighborhood
                    ]);

                $entity->setNeighborhood($locationNeighborhood);
            } else {
                $entity->setNeighborhood(null);
            }
        }
    }

    /**
     * Set all values with correctly format of locations before load form.
     *
     * @param FormInterface $form
     * @param $entity
     */
    public function setLocationBeforeLoadForm(FormInterface $form, $entity): void
    {
        // Set location state on form.
        /** @var LocationState $locationState */
        $locationState = $entity->getState();
        if ($locationState) {
            $form->get('state')->setData($locationState->getId());
        }

        // Set location city on form.
        /** @var LocationCity $locationCity */
        $locationCity = $entity->getCity();
        if ($locationCity) {
            $form->get('city')->setData($locationCity->getId());
        }

        // Set location neighborhood on form.
        /** @var LocationNeighborhood $locationNeighborhood */
        $locationNeighborhood = $entity->getNeighborhood();
        if ($locationNeighborhood) {
            $form->get('neighborhood')->setData($locationNeighborhood->getName());
        }
    }

    private function requestMethodIsPOST() {
        return Request::METHOD_POST == $this->request->getCurrentRequest()->getMethod();
    }
}
