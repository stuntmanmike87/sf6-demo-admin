<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\LocationCountry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<LocationCountry>
 *
 * @method LocationCountry|null find($id, $lockMode = null, $lockVersion = null)
 * @method LocationCountry|null findOneBy(array $criteria, array $orderBy = null)
 * @method LocationCountry[]    findAll()
 * @method LocationCountry[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 *
 * @template-extends ServiceEntityRepository<LocationCountry>
 */
final class LocationCountryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LocationCountry::class);
    }

    public function save(LocationCountry $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(LocationCountry $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    // /**
    //  * Search countries. Recommended just for searching or auto-complete input.
    //  * @return LocationCountry[] Returns an array of LocationCountry objects
    //  */
    // ** @return array<mixed> */
    public function search(string $text): mixed// array
    {
        return $this->createQueryBuilder('country')
            ->select(
                'country.id, 
                        country.name, 
                        country.native,
                        country.alpha2'
            )
            ->andWhere('country.name LIKE :text')
            ->orWhere('country.native LIKE :text')
            ->orWhere('country.alpha2 LIKE :text')
            ->setParameter('text', '%'.$text.'%')
            ->orderBy('country.name', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }

    // /**
    //  * Returns all countries with each calling code.
    //  *
    //  * @return LocationCountry[] Returns an array of LocationCountry objects with calling codes.
    //  */
    // ** @return array<mixed> */
    public function findAllCallingCodes(): mixed// array
    {
        return $this->createQueryBuilder('country')
            ->select(
                'country.id, 
                        country.name,
                        country.native,
                        country.alpha2, 
                        country.callingCode'
            )
            ->orderBy('country.name', 'ASC')
            ->getQuery()
            ->getResult()
        ;
    }
}
