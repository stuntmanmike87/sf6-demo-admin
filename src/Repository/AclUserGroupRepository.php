<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\AclUserGroup;
use App\Entity\Translation;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AclUserGroup>
 */
final class AclUserGroupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AclUserGroup::class);
    }

    public function save(AclUserGroup $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(AclUserGroup $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    // /**
    //  * Returns all user groups by locale.
    //  *
    //  * @return AclUserGroup[]
    //  */
    // ** @return array<mixed> */
    public function findAllByLocale(string $locale): mixed// array
    {
        $qb = $this->createQueryBuilder('userGroup')
            ->innerJoin(
                Translation::class,
                'translation',
                Join::WITH,
                'userGroup.translateKey = translation.translateKey'
            )
            ->innerJoin('translation.language', 'language')
            ->select(
                'userGroup.id, 
                translation.text,
                translation.translateKey'
            );

        if ('' !== $locale && '0' !== $locale) {
            $qb->andWhere('language.locale = :locale')
                ->setParameter('locale', $locale);
        }

        return $qb->getQuery()
            ->getResult();
    }
}
