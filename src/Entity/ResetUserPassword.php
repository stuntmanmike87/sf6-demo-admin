<?php

declare(strict_types=1);

namespace App\Entity;

use App\Repository\ResetUserPasswordRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ResetUserPasswordRepository::class)]
#[ORM\Index(columns: ['reset_at'], name: 'idx_reset_at')]
#[ORM\Index(columns: ['valid_at'], name: 'idx_valid_at')]
#[ORM\Index(columns: ['token'], name: 'idx_token')]
/** @final */
class ResetUserPassword
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(inversedBy: 'resetUserPasswords')]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null; // private User $user;

    #[ORM\Column(length: 255)]
    private ?string $token = null; // private string $token;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $resetAt = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE, nullable: true)]
    private ?\DateTimeInterface $createdAt = null;

    #[ORM\Column(type: Types::DATE_MUTABLE)]
    private ?\DateTimeInterface $validAt = null; // private \DateTimeInterface $validAt;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getResetAt(): ?\DateTimeInterface
    {
        return $this->resetAt;
    }

    public function setResetAt(?\DateTimeInterface $resetAt): self
    {
        $this->resetAt = $resetAt;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(?\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getValidAt(): ?\DateTimeInterface
    {
        return $this->validAt;
    }

    public function setValidAt(/* ? */ \DateTimeInterface $validAt): self
    {
        $this->validAt = $validAt;

        return $this;
    }
}
