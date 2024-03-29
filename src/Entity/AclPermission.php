<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\AclPermissionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AclPermissionRepository::class)]
/** @final */
class AclPermission
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: AclAction::class, inversedBy: 'permissions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?AclAction $action = null; // private AclAction $action;

    /** @var Collection<int, AclUserGroup> $userGroups */
    #[ORM\OneToMany(mappedBy: 'permission', targetEntity: AclUserGroup::class)]
    private Collection $userGroups;

    #[ORM\ManyToOne(inversedBy: 'permissions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?AclUserGroup $userGroup = null; // private AclUserGroup $userGroup;

    public function __construct()
    {
        $this->userGroups = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAction(): ?AclAction
    {
        return $this->action;
    }

    public function setAction(?AclAction $action): self
    {
        $this->action = $action;

        return $this;
    }

    /**
     * @return Collection<int, AclUserGroup>
     */
    public function getUserGroups(): Collection
    {
        return $this->userGroups;
    }

    public function addUserGroup(AclUserGroup $userGroup): self
    {
        if (!$this->userGroups->contains($userGroup)) {
            $this->userGroups->add($userGroup);
            $userGroup->setPermission($this);
        }

        return $this;
    }

    public function removeUserGroup(AclUserGroup $userGroup): self
    {
        // set the owning side to null (unless already changed)
        if ($this->userGroups->removeElement($userGroup) && $userGroup->getPermission() === $this) {
            $userGroup->setPermission(null);
        }

        return $this;
    }

    public function getUserGroup(): ?AclUserGroup
    {
        return $this->userGroup;
    }

    public function setUserGroup(?AclUserGroup $userGroup): self
    {
        $this->userGroup = $userGroup;

        return $this;
    }
}
