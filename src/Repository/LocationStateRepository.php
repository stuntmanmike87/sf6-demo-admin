<?php

namespace App\Repository;

use App\Entity\LocationState;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LocationState>
 *
 * @method LocationState|null find($id, $lockMode = null, $lockVersion = null)
 * @method LocationState|null findOneBy(array $criteria, array $orderBy = null)
 * @method LocationState[]    findAll()
 * @method LocationState[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LocationStateRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocationState::class);
    }

    public function save(LocationState $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LocationState $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Returns an array with all states.
     *
     * @param int $countryId
     * @return array
     */
    public function listAllByCountry(int $countryId): array
    {
        $qb = $this->createQueryBuilder('state')
            ->select(
                'state.id, 
                 state.name, 
                 state.slug, 
                 state.code'
            );

        if ($countryId) {
            $qb->andWhere('state.country = :country')
                ->setParameter('country', $countryId);
        }

        return $qb->getQuery()->getResult();
    }
}
