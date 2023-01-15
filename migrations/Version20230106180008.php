<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230106180008 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD phone_number_country_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649CFCB5771 FOREIGN KEY (phone_number_country_id) REFERENCES location_country (id)');
        $this->addSql('CREATE INDEX IDX_8D93D649CFCB5771 ON user (phone_number_country_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D649CFCB5771');
        $this->addSql('DROP INDEX IDX_8D93D649CFCB5771 ON user');
        $this->addSql('ALTER TABLE user DROP phone_number_country_id');
    }
}
