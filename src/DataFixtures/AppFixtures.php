<?php

declare(strict_types=1);

namespace App\DataFixtures;

//use App\Factory\UserFactory;
use Override;
use Doctrine\Bundle\FixturesBundle\Fixture;
//use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

/**
 * Classe héritée de Fixture, qui gère les fixtures d'un objet de fixture
 */
final class AppFixtures extends Fixture// implements DependentFixtureInterface
{
    public function __construct(private readonly UserPasswordHasherInterface $hasher)
    {
        //AppFixtures constructor for entity User
    }

    /**
     * Fonction qui permet de charger des fixtures
     * en persistant des objets [user (utilisateur)] en base de données
     */
    #[Override]
    public function load(ObjectManager $manager): void
    {
        //UserFactory::new()->create();
        //UserFactory::new()->createMany(10);

        //$this->loadUsers($manager);

        $manager->flush();
    }

    //@return array<string>
/*     public function getDependencies(): array
    {
        return [
            LevelFixtures::class,
        ];
    } */

}
