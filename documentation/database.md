# Main Database (SQL)
Content all detail information about `Language Exchange` database.

## User

Table **user**

| Attribute                  | Type          | Default | Description                                                                                                                                                            |
|----------------------------|---------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`                       | *binary(16)*  |         | UUID Doctrine concept from [ramsey/uuid-doctrine](https://github.com/ramsey/uuid-doctrine#innodb-optimised-binary-uuids) with type `DC2Type:uuid_binary_ordered_time`. |
| `username`                 | *string(100)* |         |                                                                                                                                                                        |
| `password`                 | *string(255)* |         |                                                                                                                                                                        |
| `verified`                 | *boolean*     | 0       | A verification account.                                                                                                                                                |
| `first_name`               | *string(255)* |         |                                                                                                                                                                        |
| `last_name`                | *string(255)* |         |                                                                                                                                                                        |
| `email`                    | *string(255)* |         |                                                                                                                                                                        |
| `phone_number`             | *string(100)* | NULL    |                                                                                                                                                                        |
| `phone_number_country_id`  | *integer*     |         | Relate to one `location_country` table.                                                                                                                                |
| `birthday`                 | *datetime*    | NULL    |                                                                                                                                                                        |
| `url_picture`              | *string(255)* | NULL    |                                                                                                                                                                        |
| `show_picture`             | *boolean*     | 1       |                                                                                                                                                                        |
| `active`                   | *boolean*     | 0       |                                                                                                                                                                        |
| `type_id`                  | *integer*     |         | Relate to one `user_type` table.                                                                                                                                       |
| `user_group_id`            | *integer*     |         | Relate to one `acl_user_group` table.                                                                                                                                  |
| `last_access_at`           | *datetime*    | NULL    |                                                                                                                                                                        |
| `address`                  | *string(255)* | NULL    | Name of street address.                                                                                                                                                |
| `street_number`            | *string(10)*  | NULL    |                                                                                                                                                                        |
| `complement`               | *string(255)* | NULL    |                                                                                                                                                                        |
| `postal_code`              | *string(20)*  | NULL    |                                                                                                                                                                        |
| `location_neighborhood_id` | *integer*     | NULL    | Relate to one `location_neighborhood` table.                                                                                                                           |
| `location_city_id`         | *integer*     | NULL    | Relate to one `location_city` table.                                                                                                                                   |
| `location_state_id`        | *integer*     | NULL    | Relate to one `location_state` table.                                                                                                                                  |
| `location_country_id`      | *integer*     | NULL    | Relate to one `location_country` table.                                                                                                                                |
| `lat`                      | *string(30)*  | NULL    |                                                                                                                                                                        |
| `lng`                      | *string(30)*  | NULL    |                                                                                                                                                                        |
| `formatted_address`        | *text*        | NULL    | Containing the human-readable full address of this location.                                                                                                           |
| `bio`                      | *text*        | NULL    |                                                                                                                                                                        |
| `facebook_id`              | *string(150)* | NULL    |                                                                                                                                                                        |
| `google_id`                | *string(150)* | NULL    |                                                                                                                                                                        |
| `google_access_token`      | *text*        | NULL    |                                                                                                                                                                        |
| `created_at`               | *datetime*    | NULL    |                                                                                                                                                                        |
| `updated_at`               | *datetime*    | NULL    |                                                                                                                                                                        |
| `deleted_at`               | *datetime*    | NULL    |                                                                                                                                                                        |


Table **user_type**

| Attribute       | Type          | Default | Description |
|-----------------|---------------|---------|-------------|
| `id`            | *integer*     |         |             |
| `translate_key` | *string(255)* |         |             |


Table **user_language**

| Attribute     | Type       | Default | Description                                                        |
|---------------|------------|---------|--------------------------------------------------------------------|
| `id`          | *integer*  |         |                                                                    |
| `user_id`     | *integer*  |         | Relate to one `user` table                                         |
| `language_id` | *integer*  |         | Relate to one `language` table                                     |
| `category`    | *string*   |         | `native`,`learning`                                                |
| `level`       | *string*   |         | `beginner`,`elementary`,`conversational`,`intermediate`,`advanced` |
| `created_at`  | *datetime* | NULL    |                                                                    |


Table **reset_user_password**

| Attribute    | Type          | Default | Description               |
|--------------|---------------|---------|---------------------------|
| `id`         | *integer*     |         |                           |
| `user_id`    | *binary(16)*  |         | Relate to have one `user` |
| `token`      | *string(255)* |         |                           |
| `reset_at`   | *datetime*    | NULL    |                           |
| `valid_at`   | *date*        | NULL    |                           |
| `created_at` | *datetime*    | NULL    |                           |


Table **account_verification**

| Attribute     | Type          | Default | Description               |
|---------------|---------------|---------|---------------------------|
| `id`          | *integer*     |         |                           |
| `user_id`     | *binary(16)*  |         | Relate to have one `user` |
| `token`       | *string(255)* |         |                           |
| `verified_at` | *datetime*    | NULL    |                           |
| `valid_at`    | *date*        |         |                           |
| `created_at`  | *datetime*    | NULL    |                           |

## ACL - Access control list

Table **acl_action**

| Attribute           | Type          | Default | Description |
|---------------------|---------------|---------|-------------|
| `id`                | *integer*     |         |             |
| `name`              | *string(255)* |         |             |
| `acl_controller_id` | *integer*     |         |             |


Table **acl_controller**

| Attribute | Type          | Default | Description |
|-----------|---------------|---------|-------------|
| `id`      | *integer*     |         |             |
| `name`    | *string(255)* |         |             |
| `prefix`  | *string(50)*  | NULL    |             |


Table **acl_permission**

| Attribute           | Type      | Default | Description |
|---------------------|-----------|---------|-------------|
| `id`                | *integer* |         |             |
| `acl_action_id`     | *integer* |         |             |
| `acl_user_group_id` | *integer* |         |             |


Table **acl_user_group**

| Attribute           | Type          | Default | Description                                            |
|---------------------|---------------|---------|--------------------------------------------------------|
| `id`                | *integer*     |         |                                                        |
| `active`            | *boolean*     | 0       |                                                        |
| `translate_key`     | *string(255)* |         |                                                        |
| `acl_permission_id` | *integer*     | NULL    | ?                                                      |
| `admin`             | *boolean*     | 0       | This group of user is the administrator of the system. |


## Location
Tables and all relationship from `location`

**Table location_country**

| Attribute      | Type          | Default                        | Description |
|----------------|---------------|--------------------------------|-------------|
| `id`           | *integer*     |                                |             |
| `name`         | *string(255)* |                                |             |
| `slug`         | *string(255)* |                                |             |
| `alpha3`       | *string(3)*   | NULL                           |             |
| `native`       | *string(255)* |                                |             |
| `alpha2`       | *string(2)*   |                                |             |
| `calling_code` | *string(20)*  | NULL                           |             |

**Table location_state**

| Attribute             | Type          | Default | Description |
|-----------------------|---------------|---------|-------------|
| `id`                  | *integer*     |         |             |
| `name`                | *string(255)* |         |             |
| `slug`                | *string(255)* |         |             |
| `location_country_id` | *integer*     |         |             |
| `code`                | *string(5)*   |         |             |

**Table location_city**

| Attribute           | Type          | Default | Description |
|---------------------|---------------|---------|-------------|
| `id`                | *integer*     |         |             |
| `name`              | *string(255)* |         |             |
| `slug`              | *string(255)* |         |             |
| `location_state_id` | *integer*     |         |             |

**Table location_neighborhood**

| Attribute          | Type          | Default | Description |
|--------------------|---------------|---------|-------------|
| `id`               | *integer*     |         |             |
| `name`             | *string(255)* |         |             |
| `slug`             | *string(255)* |         |             |
| `location_city_id` | *integer*     |         |             |

## Translation
Tables and all relationship from `translation`

**Table translation**

| Attribute       | Type          | Default | Description |
|-----------------|---------------|---------|-------------|
| `id`            | *integer*     |         |             |
| `text`          | *string(255)* |         |             |
| `slug`          | *string(255)* |         |             |
| `language_id`   | *integer*     |         |             |
| `translate_key` | *string(255)* |         |             |

## Language
Tables and all relationship from `language`  
Keep in mind the languages should be structured with a simple way (`en`, `es`, `pt`)

**Table language**

| Attribute       | Type          | Default | Description                                                                                                                                                           |
|-----------------|---------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`            | *integer*     |         |                                                                                                                                                                       |
| `name`          | *string(255)* |         |                                                                                                                                                                       |
| `active`        | *boolean*     | 1       |                                                                                                                                                                       |
| `locale`        | *string(10)*  |         |                                                                                                                                                                       |
| `identifier`    | *string(10)*  |         | Follow the format: [https://gist.github.com/jacobbubu/1836273](https://gist.github.com/jacobbubu/1836273)                                                             |
| `translate_key` | *string(225)* |         | Relate to one `translation` table                                                                                                                                     |
| `system`        | *boolean*     | 0       | Determine if this language is use for language chooser on the system.                                                                                                 |
| `user`          | *boolean*     | 0       | Determine if this language is use as skills for users.                                                                                                                |
