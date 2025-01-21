<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\Translation;
use App\Entity\UserType;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<UserType>
 */
final class UserTypeRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserType::class);
    }

    public function save(UserType $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(UserType $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    // /**
    //  * Returns all property types from a locale.
    //  * @return UserType[]
    //  */
    // ** @return array<mixed> */
    public function findAllByLocale(string $locale): mixed// array
    {
        $qb = $this->createQueryBuilder('user_type')
            ->innerJoin(
                Translation::class,
                'translation',
                Join::WITH,
                'user_type.translateKey = translation.translateKey'
            )
            ->innerJoin('translation.language', 'language')
            ->select(
                'user_type.id, 
                translation.text,
                translation.translateKey'
            );

        if ('' !== $locale && '0' !== $locale) {
            $qb->andWhere('language.locale = :locale')
                ->setParameter('locale', $locale);
        }

        return $qb->getQuery()->getResult();
    }
}
