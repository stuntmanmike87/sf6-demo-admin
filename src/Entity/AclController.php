<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\AclControllerRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AclControllerRepository::class)]
/** @final */
class AclController
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null; // private string $name;

    #[ORM\Column(length: 50, nullable: true)]
    private ?string $prefix = null;

    /** @var Collection<int, AclAction> $actions */
    #[ORM\OneToMany(mappedBy: 'controller', targetEntity: AclAction::class)]
    private Collection $actions;

    public function __construct()
    {
        $this->actions = new ArrayCollection();
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

    public function getPrefix(): ?string
    {
        return $this->prefix;
    }

    public function setPrefix(?string $prefix): self
    {
        $this->prefix = $prefix;

        return $this;
    }

    /**
     * @return Collection<int, AclAction>
     */
    public function getActions(): Collection
    {
        return $this->actions;
    }

    public function addAction(AclAction $action): self
    {
        if (!$this->actions->contains($action)) {
            $this->actions->add($action);
            $action->setController($this);
        }

        return $this;
    }

    public function removeAction(AclAction $action): self
    {
        // set the owning side to null (unless already changed)
        if ($this->actions->removeElement($action) && $action->getController() === $this) {
            $action->setController(null);
        }

        return $this;
    }
}
