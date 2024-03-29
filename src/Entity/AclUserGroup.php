<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\AclUserGroupRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AclUserGroupRepository::class)]
/** @final */
class AclUserGroup
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $active = null; // private bool $active;

    #[ORM\ManyToOne(inversedBy: 'userGroups')]
    private ?AclPermission $permission = null; // private AclPermission $permission;

    #[ORM\Column]
    private bool $adm; // private ?bool $adm = null;

    /** @var Collection<int, AclPermission> $permissions */
    #[ORM\OneToMany(mappedBy: 'userGroup', targetEntity: AclPermission::class)]
    private Collection $permissions;

    /** @var Collection<int, User> $users */
    #[ORM\OneToMany(mappedBy: 'userGroup', targetEntity: User::class)]
    private Collection $users;

    #[ORM\Column(length: 255)]
    private ?string $translateKey = null; // private string $translateKey;

    public function __construct()
    {
        $this->permissions = new ArrayCollection();
        $this->users = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getPermission(): ?AclPermission
    {
        return $this->permission;
    }

    public function setPermission(?AclPermission $permission): self
    {
        $this->permission = $permission;

        return $this;
    }

    public function isAdm(): ?bool
    {
        return $this->adm;
    }

    public function setAdm(bool $adm): self
    {
        $this->adm = $adm;

        return $this;
    }

    /**
     * @return Collection<int, AclPermission>
     */
    public function getPermissions(): Collection
    {
        return $this->permissions;
    }

    public function addPermission(AclPermission $permission): self
    {
        if (!$this->permissions->contains($permission)) {
            $this->permissions->add($permission);
            $permission->setUserGroup($this);
        }

        return $this;
    }

    public function removePermission(AclPermission $permission): self
    {
        // set the owning side to null (unless already changed)
        if ($this->permissions->removeElement($permission) && $permission->getUserGroup() === $this) {
            $permission->setUserGroup(null);
        }// Parameter #1 $userGroup of method App\Entity\AclPermission::setUserGroup() expects App\Entity\AclUserGroup, null given.

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
            $user->setUserGroup($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        // set the owning side to null (unless already changed)
        if ($this->users->removeElement($user) && $user->getUserGroup() === $this) {
            $user->setUserGroup(null);
        }

        return $this;
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
}
