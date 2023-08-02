<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\LocationCity;
use App\Entity\LocationNeighborhood;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Gedmo\Sluggable\Util\Urlizer;

/**
 * @extends ServiceEntityRepository<LocationNeighborhood>
 *
 * @method LocationNeighborhood|null find($id, $lockMode = null, $lockVersion = null)
 * @method LocationNeighborhood|null findOneBy(array $criteria, array $orderBy = null)
 * @method LocationNeighborhood[]    findAll()
 * @method LocationNeighborhood[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
final class LocationNeighborhoodRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocationNeighborhood::class);
    }

    public function save(LocationNeighborhood $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LocationNeighborhood $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * This method will be find correctly neighborhood, if not find, then will be added.
     *
     * @param array<mixed> $criteria
     * @return LocationNeighborhood|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findAdd(array $criteria): ?LocationNeighborhood
    {
        if (!array_key_exists( 'name', $criteria) && !array_key_exists( 'location_city_id', $criteria)) {
            return null;
        }

        $qb = $this->createQueryBuilder('neighborhood');

        if (array_key_exists( 'name', $criteria)) {
            $qb->andWhere('neighborhood.name = :name')
                ->setParameter('name', $criteria['name']);
        }

        if (array_key_exists( 'location_city_id', $criteria)) {
            $qb->andWhere('neighborhood.city = :location_city_id')
                ->setParameter('location_city_id', $criteria['location_city_id']);
        }

        $locationNeighborhood = $qb->getQuery()
            ->getOneOrNullResult()
        ;

        if ($locationNeighborhood !== null) {
            /** @var LocationCity $locationCity */
            $locationCity = $this->getEntityManager()->getRepository(LocationCity::class)
                ->find($criteria['location_city_id']);

            if ($locationCity === null) {
                return null;
            }

            $name = $criteria['name'];
            $slug = Urlizer::urlize($name);

            $locationNeighborhood = new LocationNeighborhood();
            $locationNeighborhood->setName($name);
            $locationNeighborhood->setSlug($slug);
            $locationNeighborhood->setCity($locationCity);

            $this->getEntityManager()->persist($locationNeighborhood);
            $this->getEntityManager()->flush();
        }

        return $locationNeighborhood;
    }
}
