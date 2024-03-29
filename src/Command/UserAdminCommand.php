<?php

declare(strict_types=1);

namespace App\Command;

use App\Entity\AclUserGroup;
use App\Entity\User;
use App\Enum\Acl\AclUserGroupIdEnum;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:user-admin:create',
    description: 'Command to create an admin user.',
)]
final class UserAdminCommand extends Command
{
    public function __construct(private readonly EntityManagerInterface $entityManager, private readonly UserPasswordHasherInterface $passwordHasher)
    {
        parent::__construct();
    }

    #[\Override]
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $user = new User();
        $user->setActive(true);
        $user->setUsername('admin');
        $user->setFirstName('Admin');
        $user->setLastName('Manager');
        $user->setEmail('admin.manager@app.com');
        $user->setPassword($this->passwordHasher->hashPassword(
            $user,
            'admin'
        ));

        $user->setRoles([]);

        $group = $this->entityManager
            ->getRepository(AclUserGroup::class)
            ->find(AclUserGroupIdEnum::Master);

        $user->setUserGroup($group);

        $this->entityManager->persist($user);
        $this->entityManager->flush();

        $io->success('An admin user was created successfully.');

        return Command::SUCCESS;
    }
}
