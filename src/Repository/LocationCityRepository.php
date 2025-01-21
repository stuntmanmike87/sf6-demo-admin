<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\LocationCity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LocationCity>
 */
final class LocationCityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocationCity::class);
    }

    public function save(LocationCity $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LocationCity $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    // /**
    //  * Returns an array with all cities.
    //  *
    //  * @return array<mixed>
    //  */
    public function listAllByState(int $stateId): mixed// array
    {
        $qb = $this->createQueryBuilder('city')
            ->select(
                'city.id, 
                 city.name, 
                 city.slug'
            );

        if (0 !== $stateId) {
            $qb->andWhere('city.state = :state')
                ->setParameter('state', $stateId);
        }

        return $qb->getQuery()->getResult();
    }
}
