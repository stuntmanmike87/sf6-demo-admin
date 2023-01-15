# Commands

### Create a new database.
```bash
bin/console doctrine:database:create
```

### For build an Entity (table) or add property, execute this:
```bash
bin/console make:entity
```

### Updating database structure with doctrine:
```bash
bin/console doctrine:migrations:diff
bin/console doctrine:migrations:execute --up DoctrineMigrations\\Version<NUMBER_VERSION>
```

### Drop all tables without dropping database:
```bash
bin/console doctrine:schema:drop --full-database --force
```
