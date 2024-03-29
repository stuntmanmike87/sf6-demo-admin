<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\AclActionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AclActionRepository::class)]
/** @final */
class AclAction
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private string $name; // private ?string $name = null;

    #[ORM\ManyToOne(inversedBy: 'actions')]
    #[ORM\JoinColumn(nullable: false)]
    private ?AclController $controller = null; // private AclController $controller;

    /** @var Collection<int, AclPermission> $permissions */
    #[ORM\OneToMany(mappedBy: 'action', targetEntity: AclPermission::class)]
    private Collection $permissions;

    public function __construct()
    {
        $this->permissions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getController(): ?AclController
    {
        return $this->controller;
    }

    public function setController(?AclController $controller): self
    {
        $this->controller = $controller;

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
            $permission->setAction($this);
        }

        return $this;
    }

    public function removePermission(AclPermission $permission): self
    {
        // set the owning side to null (unless already changed)
        if ($this->permissions->removeElement($permission) && $permission->getAction() === $this) {
            $permission->setAction(null);
        }

        return $this;
    }
}
