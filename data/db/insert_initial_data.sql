SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

INSERT INTO acl_action (id, controller_id, name) VALUES
(1, 1, 'index'),
(2, 1, 'add'),
(3, 1, 'edit'),
(4, 1, 'delete'),
(6, 2, 'security'),
(7, 2, 'profile'),
(8, 2, 'address');

INSERT INTO acl_controller (id, name, prefix) VALUES
(1, 'user', 'admin'),
(2, 'settings', 'admin');

INSERT INTO acl_permission (id, action_id, user_group_id) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 6, 1),
(6, 7, 1),
(7, 8, 1);

INSERT INTO acl_user_group (id, permission_id, active, adm, translate_key) VALUES
(1, NULL, 1, 1, 'acl-user-group.master'),
(2, NULL, 1, 0, 'acl-user-group.tutor'),
(3, NULL, 1, 0, 'acl-user-group.student');

INSERT INTO language (id, name, locale, identifier, translate_key, app, user, created_at, active) VALUES
(1, 'English', 'en', 'en_US', 'language.english', 1, 1, NULL, 1),
(2, 'Português', 'pt', 'pt_BR', 'language.portuguese', 1, 1, NULL, 1),
(3, 'Deutsch', 'de', 'de_DE', 'language.german', 1, 1, NULL, 1);

INSERT INTO translation (id, language_id, text, slug, translate_key) VALUES
(2, 1, 'Master', 'master', 'acl-user-group.master'),
(3, 2, 'Master', 'master', 'acl-user-group.master'),
(4, 1, 'English', 'english', 'language.english'),
(5, 2, 'Inglês', 'ingles', 'language.english'),
(6, 1, 'Portuguese', 'portuguese', 'language.portuguese'),
(7, 2, 'Português', 'portugues', 'language.portuguese'),
(8, 3, 'Master', 'master', 'acl-user-group.master'),
(11, 1, 'Student', 'student', 'user-type.student'),
(12, 2, 'Estudante', 'estudante', 'user-type.student'),
(13, 3, 'Student', 'student', 'user-type.student'),
(14, 1, 'Tutor', 'tutor', 'user-type.tutor'),
(15, 2, 'Tutor', 'tutor', 'user-type.tutor'),
(16, 3, 'Tutor', 'tutor', 'user-type.tutor'),
(17, 1, 'Tutor', 'tutor', 'acl-user-group.tutor'),
(18, 2, 'Tutor', 'tutor', 'acl-user-group.tutor'),
(19, 3, 'Tutor', 'tutor', 'acl-user-group.tutor'),
(20, 1, 'Student', 'student', 'acl-user-group.student'),
(21, 2, 'Estudante', 'estudante', 'acl-user-group.student'),
(22, 3, 'Student', 'Student', 'acl-user-group.student');

INSERT INTO user (id, user_group_id, neighborhood_id, city_id, state_id, country_id, type_id, username, password, verified, first_name, last_name, email, phone_number, birthday, url_picture, show_picture, active, last_access_at, address, street_number, complement, postal_code, lat, lng, formatted_address, bio, facebook_id, google_id, google_access_token, created_at, updated_at, deleted_at, roles, phone_number_country_id) VALUES
('8367895e-74a1-11ed-9f88-521016916acd', 1, 1, 336, 104, 12, NULL, 'admin', '$2y$13$r0JTEfVqJTiqAk6j5AQPBegwR.eznDAOreqYgOxLm9sRnZify.XQi', 0, 'Admin', 'Manager', 'admin.manager@app.com', NULL, '2014-04-01 00:00:00', 'https://files.bonom.me/user/2023/01/massive-art-thomas-ka-nzig-640x640-63c3ff1cbf993.jpeg', 0, 1, NULL, 'Bloch-Bauer-Promenade', '24/2/6', NULL, '1100', '48.1787423', '16.3862005', 'Bloch-Bauer-Promenade 24/2 6, 1100 Wien, Austria', NULL, NULL, NULL, NULL, NULL, '2023-01-15 15:01:23', NULL, '[]', NULL);

INSERT INTO user_type (id, translate_key) VALUES
(1, 'user-type.student'),
(2, 'user-type.tutor');
