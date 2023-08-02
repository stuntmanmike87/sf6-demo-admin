<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\UserTypeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UserTypeRepository::class)]
#[ORM\Index(columns: ["translate_key"], name: "idx_translate_key")]
/** @final */
class UserType
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $translateKey = null;//private string $translateKey;

    /** @var  Collection<int, User> $users*/
    #[ORM\OneToMany(mappedBy: 'type', targetEntity: User::class)]
    private Collection $users;


    public function __construct()
    {
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTranslateKey(): ?string
    {
        return $this->translateKey;
    }

    public function setTranslateKey(string $translateKey): self
    {
        $this->translateKey = $translateKey;

        return $this;
    }

    /**
     * @return Collection<int, User>
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users->add($user);
            $user->setType($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        // set the owning side to null (unless already changed)
        if ($this->users->removeElement($user) && $user->getType() === $this) {
            $user->setType(null);
        }

        return $this;
    }
}
