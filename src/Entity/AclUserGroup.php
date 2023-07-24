<?php

namespace App\Entity;

use App\Repository\AclUserGroupRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AclUserGroupRepository::class)]
class AclUserGroup
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?bool $active = null;

    #[ORM\ManyToOne(inversedBy: 'userGroups')]
    private ?AclPermission $permission = null;

    #[ORM\Column]
    private ?bool $adm = null;

    #[ORM\OneToMany(mappedBy: 'userGroup', targetEntity: AclPermission::class)]
    private Collection $permissions;

    #[ORM\OneToMany(mappedBy: 'userGroup', targetEntity: User::class)]
    private Collection $users;

    #[ORM\Column(length: 255)]
    private ?string $translateKey = null;

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
        if ($this->permissions->removeElement($permission)) {
            // set the owning side to null (unless already changed)
            if ($permission->getUserGroup() === $this) {
                $permission->setUserGroup(null);
            }
        }

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
        if ($this->users->removeElement($user)) {
            // set the owning side to null (unless already changed)
            if ($user->getUserGroup() === $this) {
                $user->setUserGroup(null);
            }
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
