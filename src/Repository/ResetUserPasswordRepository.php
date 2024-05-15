<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\ResetUserPassword;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ResetUserPassword>
 *
 * @method ResetUserPassword|null find($id, $lockMode = null, $lockVersion = null)
 * @method ResetUserPassword|null findOneBy(array $criteria, array $orderBy = null)
 * @method ResetUserPassword[]    findAll()
 * @method ResetUserPassword[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 *
 * @template-extends ServiceEntityRepository<ResetUserPassword>
 */
final class ResetUserPasswordRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ResetUserPassword::class);
    }

    public function save(ResetUserPassword $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ResetUserPassword $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    //    /**
    //     * @return ResetUserPassword[] Returns an array of ResetUserPassword objects
    //     */
    //    public function findByExampleField($value): array
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->orderBy('r.id', 'ASC')
    //            ->setMaxResults(10)
    //            ->getQuery()
    //            ->getResult()
    //        ;
    //    }

    //    public function findOneBySomeField($value): ?ResetUserPassword
    //    {
    //        return $this->createQueryBuilder('r')
    //            ->andWhere('r.exampleField = :val')
    //            ->setParameter('val', $value)
    //            ->getQuery()
    //            ->getOneOrNullResult()
    //        ;
    //    }
}
