<?php

declare(strict_types=1);

namespace App\Repository;

use App\Entity\User;
use App\Utils\StringHelper;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;

/**
 * @extends ServiceEntityRepository<User>
 *
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 *
 * @template-extends ServiceEntityRepository<User>
 */
final class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
{
    public function __construct(ManagerRegistry $registry, private readonly PaginatorInterface $paginator)
    {
        parent::__construct($registry, User::class);
    }

    public function save(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(User $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * Used to upgrade (rehash) the user's password automatically over time.
     */
    #[\Override]
    public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
    {
        if (!$user instanceof User) {
            throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', $user::class));
        }

        $user->setPassword($newHashedPassword);

        $this->save($user, true);
    }

    // /**
    //  * @param array|null $criteria
    //  * @return SlidingPagination
    //  */
    /**
     * @param array<mixed>|null $criteria
     *
     * @return PaginationInterface<int, mixed>
     */
    public function findLatest(?array $criteria): PaginationInterface// SlidingPagination
    {
        $qb = $this->createQueryBuilder('user')
            ->innerJoin('user.userGroup', 'ug')
            ->leftJoin('user.type', 't')
            ->select(
                'user.id, 
                        user.active, 
                        user.verified, 
                        user.firstName firstName, 
                        user.lastName lastName, 
                        user.urlPicture urlPicture, 
                        user.createdAt createdAt, 
                        ug.translateKey userGroupTranslateKey,
                        t.translateKey userTypeTranslateKey'
            )
            ->where('user.deletedAt IS NULL')
        ;

        /** @var array<mixed> $criteria */
        if (array_key_exists('query', $criteria)) {
            $searchTerms = StringHelper::extractSearchTerms($criteria['query']);

            if ([] !== $searchTerms) {
                $orStatements = $qb->expr()->orX();

                foreach ($searchTerms as $term) {
                    $orStatements->add(
                        $qb->expr()->like('user.username', $qb->expr()->literal('%'.$term.'%'))
                    );

                    $orStatements->add(
                        $qb->expr()->like('user.firstName', $qb->expr()->literal('%'.$term.'%'))
                    );

                    $orStatements->add(
                        $qb->expr()->like('user.lastName', $qb->expr()->literal('%'.$term.'%'))
                    );
                }

                $qb->andWhere($orStatements);
            }
        }

        $qb->orderBy('user.id', 'DESC');

        $page = $criteria['page'] ?? 1;
        $limit = $criteria['limit'] ?? null;

        return $this->paginator->paginate(
            $qb,
            $page,
            $limit
        );
    }
}
