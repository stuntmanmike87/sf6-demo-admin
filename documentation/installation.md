# Installation

## 1 Requirements

 - PHP: **8.1**
 - MySQL: **>=8.0**
 - HTTP Server: **nginx**
 - Node: **18.10**
 - Composer: **2.***

## 2 Instructions

**1. Clone the repository**

```bash
git clone git@gitlab.com:language-exchange/admin.git .
```

**2. Config environment file**  
Before start to code, make a copy from [.env.default](../.env.default) and rename to `.env.local` in the same path and put all the values of your environment.

See [here](https://symfony.com/blog/new-in-symfony-4-2-define-env-vars-per-environment) to explain more.

This file is in `.gitignore` and not will be save in repository.

**3. Install dependencies**

Development:

```bash
composer install
```

Production:

```bash
composer install --no-dev --prefer-dist --apcu-autoloader -o
```


**4. Import database with initial data:**

**4.1. Create database:**

```bash
php bin/console doctrine:database:create
```

> The name of database should be defined in environment file.

**4.2. Import initial data:**

Basically you have two ways to import the initial data. Choose one of them!

**4.2.1. Generate new migration class with doctrine:**

```bash
php bin/console doctrine:migrations:diff
```

You will see something like this:

```bash
Generated new migration class to "/<PROJECT_ROOT>/migrations/Version20221002094612.php"
```

A new version number (`20221002094612` is always different) will be generated.  
Get the version number generated and do this:

```bash
bin/console doctrine:migrations:execute --up DoctrineMigrations\\Version20221002094612
```

Delete the migration class:

```bash
rm migrations/Version20221002094612.php
```

**4.2.2. Import manually with SQL file:**

```bash
php -d memory_limit=-1 bin/console doctrine:database:import data/db/structure.sql
```

**5. Import initial data**

You should import all SQL files listed below (keep the sort) to have all necessary data for your database.
- [insert_location_data.sql](data/db/insert_location_data.sql) - (countries, states, cities and neighborhoods).
- [insert_initial_data.sql](data/db/insert_initial_data.sql) - (permissions rules, languages, translations and user).

To import that easier, just execute this two command below:

```bash
mysql -u root -p language_exchange_db < data/db/insert_location_data.sql
mysql -u root -p language_exchange_db < data/db/insert_initial_data.sql
```

**6. Install yarn package**

```bash
npm install -g yarn
yarn install
```

**7. Build the assets files**
```bash
yarn encore dev
```

Production:

```bash
composer install --no-dev --prefer-dist --apcu-autoloader -o
```

## 3 Troubleshooting

### Setting up the Symfony Framework
To check if the server or your local environment is ready to install symfony, install `symfony-cli` package and execute this command below to see if is everything fine:

```bash
symfony check:requirements
```

Or, check the [Technical Requirements](https://symfony.com/doc/current/setup.html#technical-requirements) from the Symfony Docs.

### Setting the correct document root
Make sure the `root` path is set with `/public` at the end in the config server (NGINX, Apache...), like this:

`root /home/bonom/public_html/public;`

### Trouble with WebProfileBundle

Some cases you will receive this error:

```bash
Attempted to load class "WebProfilerBundle" from namespace "Symfony\Bundle\WebProfilerBundle".
```

In this case, install this component:

```bash
composer require symfony/profiler-pack
```