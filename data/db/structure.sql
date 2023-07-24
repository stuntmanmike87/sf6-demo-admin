SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Table structure for table `account_verification`
--

CREATE TABLE `account_verification` (
  `id` int NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `valid_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acl_action`
--

CREATE TABLE `acl_action` (
  `id` int NOT NULL,
  `controller_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acl_controller`
--

CREATE TABLE `acl_controller` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prefix` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acl_permission`
--

CREATE TABLE `acl_permission` (
  `id` int NOT NULL,
  `action_id` int NOT NULL,
  `user_group_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `acl_user_group`
--

CREATE TABLE `acl_user_group` (
  `id` int NOT NULL,
  `permission_id` int DEFAULT NULL,
  `active` tinyint(1) NOT NULL,
  `adm` tinyint(1) NOT NULL,
  `translate_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8mb3_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `language`
--

CREATE TABLE `language` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `locale` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `identifier` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `translate_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `app` tinyint(1) NOT NULL,
  `user` tinyint(1) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `active` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location_city`
--

CREATE TABLE `location_city` (
  `id` int NOT NULL,
  `state_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location_country`
--

CREATE TABLE `location_country` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alpha3` varchar(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `native` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `alpha2` varchar(2) COLLATE utf8mb4_unicode_ci NOT NULL,
  `calling_code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location_neighborhood`
--

CREATE TABLE `location_neighborhood` (
  `id` int NOT NULL,
  `city_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `location_state`
--

CREATE TABLE `location_state` (
  `id` int NOT NULL,
  `country_id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `available_at` datetime NOT NULL,
  `delivered_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reset_user_password`
--

CREATE TABLE `reset_user_password` (
  `id` int NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `reset_at` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `valid_at` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `translation`
--

CREATE TABLE `translation` (
  `id` int NOT NULL,
  `language_id` int NOT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `translate_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_group_id` int NOT NULL,
  `neighborhood_id` int DEFAULT NULL,
  `city_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `country_id` int DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  `username` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `verified` tinyint(1) NOT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `birthday` datetime DEFAULT NULL,
  `url_picture` longtext COLLATE utf8mb4_unicode_ci,
  `show_picture` tinyint(1) NOT NULL,
  `active` tinyint(1) NOT NULL,
  `last_access_at` datetime DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `street_number` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `complement` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `postal_code` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lat` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lng` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `formatted_address` longtext COLLATE utf8mb4_unicode_ci,
  `bio` longtext COLLATE utf8mb4_unicode_ci,
  `facebook_id` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_id` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `google_access_token` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  `roles` json NOT NULL,
  `phone_number_country_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_language`
--

CREATE TABLE `user_language` (
  `id` int NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `language_id` int NOT NULL,
  `category` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `level` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `id` int NOT NULL,
  `translate_key` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account_verification`
--
ALTER TABLE `account_verification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_C329D34DA76ED395` (`user_id`),
  ADD KEY `idx_verified_at` (`verified_at`),
  ADD KEY `idx_valid_at` (`valid_at`),
  ADD KEY `idx_token` (`token`);

--
-- Indexes for table `acl_action`
--
ALTER TABLE `acl_action`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_1C96BBC2F6D1A74B` (`controller_id`);

--
-- Indexes for table `acl_controller`
--
ALTER TABLE `acl_controller`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `acl_permission`
--
ALTER TABLE `acl_permission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B68D53BF9D32F035` (`action_id`),
  ADD KEY `IDX_B68D53BF1ED93D47` (`user_group_id`);

--
-- Indexes for table `acl_user_group`
--
ALTER TABLE `acl_user_group`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D9C67E88FED90CCA` (`permission_id`);

--
-- Indexes for table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Indexes for table `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_translate_key` (`translate_key`),
  ADD KEY `idx_locale` (`locale`),
  ADD KEY `idx_app` (`app`),
  ADD KEY `idx_user` (`user`);

--
-- Indexes for table `location_city`
--
ALTER TABLE `location_city`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_AD5FB7745D83CC1` (`state_id`),
  ADD KEY `idx_name` (`name`),
  ADD KEY `idx_slug` (`slug`);

--
-- Indexes for table `location_country`
--
ALTER TABLE `location_country`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_name` (`name`),
  ADD KEY `idx_slug` (`slug`);

--
-- Indexes for table `location_neighborhood`
--
ALTER TABLE `location_neighborhood`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_8F56B9808BAC62AF` (`city_id`),
  ADD KEY `idx_name` (`name`),
  ADD KEY `idx_slug` (`slug`);

--
-- Indexes for table `location_state`
--
ALTER TABLE `location_state`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_D5CF97DEF92F3E70` (`country_id`),
  ADD KEY `idx_name` (`name`),
  ADD KEY `idx_slug` (`slug`);

--
-- Indexes for table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Indexes for table `reset_user_password`
--
ALTER TABLE `reset_user_password`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_86F1268AA76ED395` (`user_id`),
  ADD KEY `idx_reset_at` (`reset_at`),
  ADD KEY `idx_valid_at` (`valid_at`),
  ADD KEY `idx_token` (`token`);

--
-- Indexes for table `translation`
--
ALTER TABLE `translation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B469456F82F1BAF4` (`language_id`),
  ADD KEY `idx_translate_key` (`translate_key`),
  ADD KEY `idx_slug` (`slug`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649F85E0677` (`username`),
  ADD KEY `IDX_8D93D6491ED93D47` (`user_group_id`),
  ADD KEY `IDX_8D93D649803BB24B` (`neighborhood_id`),
  ADD KEY `IDX_8D93D6498BAC62AF` (`city_id`),
  ADD KEY `IDX_8D93D6495D83CC1` (`state_id`),
  ADD KEY `IDX_8D93D649F92F3E70` (`country_id`),
  ADD KEY `IDX_8D93D649C54C8C93` (`type_id`),
  ADD KEY `idx_username` (`username`),
  ADD KEY `idx_first_name` (`first_name`),
  ADD KEY `idx_last_name` (`last_name`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_active` (`active`),
  ADD KEY `idx_lat` (`lat`),
  ADD KEY `idx_lng` (`lng`),
  ADD KEY `idx_google_id` (`google_id`),
  ADD KEY `idx_facebook_id` (`facebook_id`),
  ADD KEY `IDX_8D93D649CFCB5771` (`phone_number_country_id`);

--
-- Indexes for table `user_language`
--
ALTER TABLE `user_language`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_345695B5A76ED395` (`user_id`),
  ADD KEY `IDX_345695B582F1BAF4` (`language_id`),
  ADD KEY `idx_category` (`category`),
  ADD KEY `idx_level` (`level`);

--
-- Indexes for table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_translate_key` (`translate_key`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account_verification`
--
ALTER TABLE `account_verification`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acl_action`
--
ALTER TABLE `acl_action`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acl_controller`
--
ALTER TABLE `acl_controller`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acl_permission`
--
ALTER TABLE `acl_permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `acl_user_group`
--
ALTER TABLE `acl_user_group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `language`
--
ALTER TABLE `language`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location_city`
--
ALTER TABLE `location_city`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location_country`
--
ALTER TABLE `location_country`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location_neighborhood`
--
ALTER TABLE `location_neighborhood`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `location_state`
--
ALTER TABLE `location_state`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reset_user_password`
--
ALTER TABLE `reset_user_password`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `translation`
--
ALTER TABLE `translation`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_language`
--
ALTER TABLE `user_language`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `account_verification`
--
ALTER TABLE `account_verification`
  ADD CONSTRAINT `FK_C329D34DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `acl_action`
--
ALTER TABLE `acl_action`
  ADD CONSTRAINT `FK_1C96BBC2F6D1A74B` FOREIGN KEY (`controller_id`) REFERENCES `acl_controller` (`id`);

--
-- Constraints for table `acl_permission`
--
ALTER TABLE `acl_permission`
  ADD CONSTRAINT `FK_B68D53BF1ED93D47` FOREIGN KEY (`user_group_id`) REFERENCES `acl_user_group` (`id`),
  ADD CONSTRAINT `FK_B68D53BF9D32F035` FOREIGN KEY (`action_id`) REFERENCES `acl_action` (`id`);

--
-- Constraints for table `acl_user_group`
--
ALTER TABLE `acl_user_group`
  ADD CONSTRAINT `FK_D9C67E88FED90CCA` FOREIGN KEY (`permission_id`) REFERENCES `acl_permission` (`id`);

--
-- Constraints for table `location_city`
--
ALTER TABLE `location_city`
  ADD CONSTRAINT `FK_AD5FB7745D83CC1` FOREIGN KEY (`state_id`) REFERENCES `location_state` (`id`);

--
-- Constraints for table `location_neighborhood`
--
ALTER TABLE `location_neighborhood`
  ADD CONSTRAINT `FK_8F56B9808BAC62AF` FOREIGN KEY (`city_id`) REFERENCES `location_city` (`id`);

--
-- Constraints for table `location_state`
--
ALTER TABLE `location_state`
  ADD CONSTRAINT `FK_D5CF97DEF92F3E70` FOREIGN KEY (`country_id`) REFERENCES `location_country` (`id`);

--
-- Constraints for table `reset_user_password`
--
ALTER TABLE `reset_user_password`
  ADD CONSTRAINT `FK_86F1268AA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `translation`
--
ALTER TABLE `translation`
  ADD CONSTRAINT `FK_B469456F82F1BAF4` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_8D93D6491ED93D47` FOREIGN KEY (`user_group_id`) REFERENCES `acl_user_group` (`id`),
  ADD CONSTRAINT `FK_8D93D6495D83CC1` FOREIGN KEY (`state_id`) REFERENCES `location_state` (`id`),
  ADD CONSTRAINT `FK_8D93D649803BB24B` FOREIGN KEY (`neighborhood_id`) REFERENCES `location_neighborhood` (`id`),
  ADD CONSTRAINT `FK_8D93D6498BAC62AF` FOREIGN KEY (`city_id`) REFERENCES `location_city` (`id`),
  ADD CONSTRAINT `FK_8D93D649C54C8C93` FOREIGN KEY (`type_id`) REFERENCES `user_type` (`id`),
  ADD CONSTRAINT `FK_8D93D649CFCB5771` FOREIGN KEY (`phone_number_country_id`) REFERENCES `location_country` (`id`),
  ADD CONSTRAINT `FK_8D93D649F92F3E70` FOREIGN KEY (`country_id`) REFERENCES `location_country` (`id`);

--
-- Constraints for table `user_language`
--
ALTER TABLE `user_language`
  ADD CONSTRAINT `FK_345695B582F1BAF4` FOREIGN KEY (`language_id`) REFERENCES `language` (`id`),
  ADD CONSTRAINT `FK_345695B5A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
