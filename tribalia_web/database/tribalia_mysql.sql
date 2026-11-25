-- ============================================================================
-- Tribalia Soluciones Informáticas S.A.S. — Esquema Oficial MySQL / MariaDB
-- Compatible con Hostinger hPanel (u774936641_tribalia_web)
-- Incluye: Noticias, Revistas (PNG + EPUB + PDF), Leads, Productos,
-- Planes Mensual/Anual, Propuestas Comerciales con % Descuento, Tienda y Licencias.
-- ============================================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- 1. Usuarios (Administradores y Comerciales)
CREATE TABLE IF NOT EXISTS `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) NOT NULL,
  `email` VARCHAR(190) NOT NULL,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'commercial') NOT NULL DEFAULT 'commercial',
  `full_name` VARCHAR(150) DEFAULT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_users_username` (`username`),
  UNIQUE KEY `uq_users_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 2. Noticias (con imagen carátula PNG/JPG)
CREATE TABLE IF NOT EXISTS `articles` (
  `id` CHAR(36) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `tag` VARCHAR(80) NOT NULL DEFAULT 'Actualidad Tribalia',
  `summary` TEXT DEFAULT NULL,
  `content` LONGTEXT NOT NULL,
  `cover_image_path` VARCHAR(512) DEFAULT NULL,
  `status` ENUM('draft', 'published', 'scheduled') NOT NULL DEFAULT 'draft',
  `published_at` DATETIME DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_articles_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 3. Revistas (Carátula PNG/JPG + EPUB + PDF)
CREATE TABLE IF NOT EXISTS `magazines` (
  `id` CHAR(36) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `edition_number` INT NOT NULL,
  `summary` TEXT DEFAULT NULL,
  `cover_image_path` VARCHAR(512) DEFAULT NULL,
  `epub_path` VARCHAR(512) DEFAULT NULL,
  `pdf_path` VARCHAR(512) DEFAULT NULL,
  `publish_date` DATE NOT NULL,
  `is_published` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 4. Control de Mensajes de Interés (Leads)
CREATE TABLE IF NOT EXISTS `contact_messages` (
  `id` CHAR(36) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `company` VARCHAR(255) DEFAULT '',
  `phone` VARCHAR(50) DEFAULT '',
  `email` VARCHAR(190) NOT NULL,
  `product_interest` VARCHAR(120) DEFAULT 'General',
  `message` TEXT NOT NULL,
  `status` ENUM('nuevo', 'en_contacto', 'propuesta_enviada', 'cerrado', 'descartado') NOT NULL DEFAULT 'nuevo',
  `commercial_notes` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 5. Productos del Ecosistema Tribalia
CREATE TABLE IF NOT EXISTS `products` (
  `id` CHAR(36) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(120) NOT NULL,
  `sku` VARCHAR(100) NOT NULL,
  `tagline` VARCHAR(255) DEFAULT '',
  `description` TEXT DEFAULT NULL,
  `accent_color` VARCHAR(20) NOT NULL DEFAULT '#00A8E8',
  `bridge_color` VARCHAR(20) NOT NULL DEFAULT '#0B2853',
  `subdomain_url` VARCHAR(255) DEFAULT '',
  `logo_path` VARCHAR(255) DEFAULT '',
  `display_order` INT UNSIGNED NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_products_slug` (`slug`),
  UNIQUE KEY `uq_products_sku` (`sku`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 6. Planes / Tipos de Licencia (Mensual y Anual)
CREATE TABLE IF NOT EXISTS `license_types` (
  `id` CHAR(36) NOT NULL,
  `product_id` CHAR(36) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `billing_cycle` ENUM('monthly', 'annual') NOT NULL DEFAULT 'monthly',
  `price` DECIMAL(12,2) NOT NULL,
  `duration_days` INT NOT NULL,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `idx_lt_product` (`product_id`),
  CONSTRAINT `fk_lt_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 7. Propuestas Comerciales (con % de descuento libre)
CREATE TABLE IF NOT EXISTS `commercial_proposals` (
  `id` CHAR(36) NOT NULL,
  `code` VARCHAR(32) NOT NULL,
  `commercial_user_id` INT UNSIGNED DEFAULT NULL,
  `commercial_name` VARCHAR(150) DEFAULT 'Equipo Comercial Tribalia',
  `client_name` VARCHAR(200) NOT NULL,
  `client_company` VARCHAR(200) DEFAULT '',
  `client_email` VARCHAR(190) NOT NULL,
  `client_phone` VARCHAR(50) DEFAULT '',
  `discount_percent` DECIMAL(5,2) NOT NULL DEFAULT 0.00,
  `notes` TEXT DEFAULT NULL,
  `valid_until` DATE DEFAULT NULL,
  `status` ENUM('draft', 'sent', 'accepted', 'paid', 'expired') NOT NULL DEFAULT 'sent',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_proposals_code` (`code`),
  KEY `idx_prop_user` (`commercial_user_id`),
  CONSTRAINT `fk_prop_user` FOREIGN KEY (`commercial_user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 8. Productos incluidos en cada Propuesta Comercial
CREATE TABLE IF NOT EXISTS `proposal_items` (
  `id` CHAR(36) NOT NULL,
  `proposal_id` CHAR(36) NOT NULL,
  `license_type_id` CHAR(36) NOT NULL,
  `quantity` INT UNSIGNED NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `idx_pi_proposal` (`proposal_id`),
  KEY `idx_pi_lt` (`license_type_id`),
  CONSTRAINT `fk_pi_proposal` FOREIGN KEY (`proposal_id`) REFERENCES `commercial_proposals` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_pi_lt` FOREIGN KEY (`license_type_id`) REFERENCES `license_types` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 9. Transacciones de la Tienda / Pasarela de Pagos
CREATE TABLE IF NOT EXISTS `transactions` (
  `id` CHAR(36) NOT NULL,
  `payment_gateway` VARCHAR(100) NOT NULL,
  `gateway_reference` VARCHAR(255) NOT NULL,
  `amount` DECIMAL(12,2) NOT NULL,
  `currency` VARCHAR(10) NOT NULL DEFAULT 'COP',
  `status` ENUM('pending', 'successful', 'failed', 'refunded') NOT NULL DEFAULT 'pending',
  `customer_email` VARCHAR(190) NOT NULL,
  `license_type_id` CHAR(36) DEFAULT NULL,
  `proposal_id` CHAR(36) DEFAULT NULL,
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_tx_ref` (`gateway_reference`),
  KEY `idx_tx_lt` (`license_type_id`),
  KEY `idx_tx_prop` (`proposal_id`),
  CONSTRAINT `fk_tx_lt` FOREIGN KEY (`license_type_id`) REFERENCES `license_types` (`id`) ON DELETE SET NULL,
  CONSTRAINT `fk_tx_prop` FOREIGN KEY (`proposal_id`) REFERENCES `commercial_proposals` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- 10. Licencias Emitidas
CREATE TABLE IF NOT EXISTS `licenses` (
  `id` CHAR(36) NOT NULL,
  `license_type_id` CHAR(36) NOT NULL,
  `license_key` VARCHAR(255) NOT NULL,
  `customer_email` VARCHAR(190) NOT NULL,
  `status` ENUM('active', 'expired', 'suspended') NOT NULL DEFAULT 'active',
  `issued_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `expires_at` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uq_licenses_key` (`license_key`),
  KEY `idx_lic_lt` (`license_type_id`),
  CONSTRAINT `fk_lic_lt` FOREIGN KEY (`license_type_id`) REFERENCES `license_types` (`id`) ON DELETE RESTRICT
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================================
-- DATOS INICIALES: 10 Productos Oficiales Tribalia + Planes Mensual y Anual
-- ============================================================================

INSERT INTO `products` (`id`, `name`, `slug`, `sku`, `tagline`, `description`, `accent_color`, `bridge_color`, `subdomain_url`, `logo_path`, `display_order`, `is_active`) VALUES
('11111111-1111-4111-8111-000000000001', 'Tribalia Software Contable', 'tribalia-software-contable', 'TRB-CONT', 'Núcleo contable nativo con Inteligencia Artificial', 'Diseñada desde su arquitectura base para operar de manera nativa con Inteligencia Artificial. Importa y procesa facturas de la DIAN con aprendizaje contextual privado.', '#00A8E8', '#0B2853', 'https://contable.tribalia.com.co', 'assets/img/logos/tribalia-software-contable.svg', 1, 1),
('11111111-1111-4111-8111-000000000002', 'Tribalia Complementos', 'tribalia-complementos', 'TRB-COMP', 'Suite modular de utilidades contables y tributarias con IA', 'Automatiza descarga masiva DIAN, auditoría de nómina electrónica, retenciones, conversión de extractos PDF y proyección de renta.', '#008B7A', '#0A5B75', 'https://complementos.tribalia.com.co', 'assets/img/logos/tribalia-complementos.svg', 2, 1),
('11111111-1111-4111-8111-000000000003', 'Tribalia Compliance', 'tribalia-compliance', 'TRB-CMPL', 'Control normativo, vencimientos y rentabilidad por cliente', 'Hoja de vida integral del cliente, calendario inteligente por células, Time Tracking y cálculo real de margen de utilidad.', '#D98A2B', '#F4B961', 'https://compliance.tribalia.com.co', 'assets/img/logos/tribalia-compliance.svg', 3, 1),
('11111111-1111-4111-8111-000000000004', 'Tribalia Exógena', 'tribalia-exogena', 'TRB-EXOG', 'Medios Magnéticos Nacionales (DIAN) y Distritales', 'Automatiza, estructura y valida reportes de Información Exógena Nacional (DIAN) y Distrital de Bogotá antes de generar los XML.', '#9A4896', '#6B328A', 'https://exogena.tribalia.com.co', 'assets/img/logos/tribalia-exogena.svg', 4, 1),
('11111111-1111-4111-8111-000000000005', 'Tribalia Rentas Naturales', 'tribalia-rentas-naturales', 'TRB-RENT', 'Declaración de Renta de Personas Naturales (210 / 110)', 'Modo Asistido y Modo Despacho con carga directa de Exógena DIAN, asistente IA, estados financieros y conciliación patrimonial.', '#559646', '#C86432', 'https://rentas.tribalia.com.co', 'assets/img/logos/tribalia-rentas-naturales.svg', 5, 1),
('11111111-1111-4111-8111-000000000006', 'Tribalia Egresos', 'tribalia-egresos', 'TRB-EGRE', 'Registro multimodal por voz, chat y foto en tiempo real', 'Captura inmediata de pagos y soportes por voz, chat y fotografía móvil con puente directo al área contable.', '#149CB8', '#0E7490', 'https://egresos.tribalia.com.co', 'assets/img/logos/tribalia-egresos.svg', 6, 1),
('11111111-1111-4111-8111-000000000007', 'Tribalia Legalizaciones', 'tribalia-legalizaciones', 'TRB-LEGA', 'Control tributario de anticipos y cajas menores', 'Validación automática de facturas electrónicas y alertas para emisión de Documento Soporte Electrónico con no obligados.', '#BA8E36', '#7D6B46', 'https://legalizaciones.tribalia.com.co', 'assets/img/logos/tribalia-legalizaciones.svg', 7, 1),
('11111111-1111-4111-8111-000000000008', 'Tribalia Capacitaciones', 'tribalia-capacitaciones', 'TRB-CAPA', 'Formación continua y aulas sincrónicas con IA', 'Rutas asincrónicas, aulas en vivo con transcripción y resúmenes por IA, videos, pódcast y dinámicas gamificadas.', '#22B560', '#0D7A68', 'https://capacitaciones.tribalia.com.co', 'assets/img/logos/tribalia-capacitaciones.svg', 8, 1),
('11111111-1111-4111-8111-000000000009', 'Tribalia Meeting', 'tribalia-meeting', 'TRB-MEET', 'Videoconferencias ejecutivas seguras sin descargas', 'Salas cifradas de extremo a extremo con acceso por enlace privado desde el navegador para proyectar informes y asesorías.', '#EC4899', '#4F46E5', 'https://meeting.tribalia.com.co', 'assets/img/logos/tribalia-meeting.svg', 9, 1),
('11111111-1111-4111-8111-000000000010', 'Tribalia Recursos Humanos', 'tribalia-recursos-humanos', 'TRB-RRHH', 'Gestión documental laboral y seguridad social', 'Expedientes digitales, contratos, asistencia en afiliaciones EPS/AFP/ARL y certificaciones laborales automatizadas.', '#F97316', '#0D9488', 'https://rrhh.tribalia.com.co', 'assets/img/logos/tribalia-recursos-humanos.svg', 10, 1)
ON DUPLICATE KEY UPDATE `name` = VALUES(`name`);

INSERT INTO `license_types` (`id`, `product_id`, `name`, `billing_cycle`, `price`, `duration_days`, `is_active`) VALUES
('22222222-2222-4222-8222-000000000001', '11111111-1111-4111-8111-000000000001', 'Suscripción Mensual', 'monthly', 149000.00, 30, 1),
('22222222-2222-4222-8222-000000000002', '11111111-1111-4111-8111-000000000001', 'Suscripción Anual', 'annual', 1490000.00, 365, 1),
('22222222-2222-4222-8222-000000000003', '11111111-1111-4111-8111-000000000002', 'Suscripción Mensual', 'monthly', 89000.00, 30, 1),
('22222222-2222-4222-8222-000000000004', '11111111-1111-4111-8111-000000000002', 'Suscripción Anual', 'annual', 890000.00, 365, 1),
('22222222-2222-4222-8222-000000000005', '11111111-1111-4111-8111-000000000003', 'Suscripción Mensual', 'monthly', 99000.00, 30, 1),
('22222222-2222-4222-8222-000000000006', '11111111-1111-4111-8111-000000000003', 'Suscripción Anual', 'annual', 990000.00, 365, 1),
('22222222-2222-4222-8222-000000000007', '11111111-1111-4111-8111-000000000004', 'Suscripción Mensual', 'monthly', 79000.00, 30, 1),
('22222222-2222-4222-8222-000000000008', '11111111-1111-4111-8111-000000000004', 'Suscripción Anual', 'annual', 790000.00, 365, 1),
('22222222-2222-4222-8222-000000000009', '11111111-1111-4111-8111-000000000005', 'Suscripción Mensual', 'monthly', 69000.00, 30, 1),
('22222222-2222-4222-8222-000000000010', '11111111-1111-4111-8111-000000000005', 'Suscripción Anual', 'annual', 690000.00, 365, 1),
('22222222-2222-4222-8222-000000000011', '11111111-1111-4111-8111-000000000006', 'Suscripción Mensual', 'monthly', 59000.00, 30, 1),
('22222222-2222-4222-8222-000000000012', '11111111-1111-4111-8111-000000000006', 'Suscripción Anual', 'annual', 590000.00, 365, 1),
('22222222-2222-4222-8222-000000000013', '11111111-1111-4111-8111-000000000007', 'Suscripción Mensual', 'monthly', 65000.00, 30, 1),
('22222222-2222-4222-8222-000000000014', '11111111-1111-4111-8111-000000000007', 'Suscripción Anual', 'annual', 650000.00, 365, 1),
('22222222-2222-4222-8222-000000000015', '11111111-1111-4111-8111-000000000008', 'Suscripción Mensual', 'monthly', 49000.00, 30, 1),
('22222222-2222-4222-8222-000000000016', '11111111-1111-4111-8111-000000000008', 'Suscripción Anual', 'annual', 490000.00, 365, 1),
('22222222-2222-4222-8222-000000000017', '11111111-1111-4111-8111-000000000009', 'Suscripción Mensual', 'monthly', 45000.00, 30, 1),
('22222222-2222-4222-8222-000000000018', '11111111-1111-4111-8111-000000000009', 'Suscripción Anual', 'annual', 450000.00, 365, 1),
('22222222-2222-4222-8222-000000000019', '11111111-1111-4111-8111-000000000010', 'Suscripción Mensual', 'monthly', 75000.00, 30, 1),
('22222222-2222-4222-8222-000000000020', '11111111-1111-4111-8111-000000000010', 'Suscripción Anual', 'annual', 750000.00, 365, 1)
ON DUPLICATE KEY UPDATE `price` = VALUES(`price`);

SET FOREIGN_KEY_CHECKS = 1;
