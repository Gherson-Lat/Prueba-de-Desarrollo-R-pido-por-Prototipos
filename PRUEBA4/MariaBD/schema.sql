-- ---------------------------------------------------
-- 1. Creación de la Base de Datos 
-- ---------------------------------------------------
CREATE DATABASE IF NOT EXISTS `lista_tareas_db`;
USE `lista_tareas_db`;

-- ---------------------------------------------------
-- 2. Creación de la Tabla 'usuarios'
-- ---------------------------------------------------
CREATE TABLE `usuarios` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL UNIQUE
);

-- ---------------------------------------------------
-- 3. Creación de la Tabla 'tareas'
-- ---------------------------------------------------
CREATE TABLE `tareas` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `titulo` VARCHAR(100) NOT NULL,
    `estado` ENUM('pendiente', 'completada') NOT NULL DEFAULT 'pendiente',
    `usuario_id` INT NOT NULL,
    FOREIGN KEY (`usuario_id`) REFERENCES `usuarios`(`id`) ON DELETE CASCADE
);

-- ---------------------------------------------------
-- 4. Inserción de Datos de Prueba
--    1. Inserte 3 usuarios y 5 tareas.
-- ---------------------------------------------------

-- Insertar 3 usuarios
INSERT INTO `usuarios` (`nombre`, `email`) VALUES
    ('Juan Pérez', 'juan.perez@example.com'),
    ('María García', 'maria.garcia@example.com'),
    ('Carlos Ruiz', 'carlos.ruiz@example.com');

-- Insertar 5 tareas (distribuidas entre los usuarios)
--pendientes y 1 completada

INSERT INTO `tareas` (`titulo`, `estado`, `usuario_id`) VALUES
    ('Comprar víveres', 'pendiente', 1),
    ('Pagar factura de luz', 'pendiente', 1),
    ('Llamar al banco', 'completada', 1),
    ('Enviar informe mensual', 'pendiente', 2),
    ('Actualizar CV', 'pendiente', 3);

-- ---------------------------------------------------
-- 5. Consultas Solicitadas
-- ---------------------------------------------------

-- 1. Liste cada usuario con el número de tareas estado='pendiente'.
SELECT
    u.nombre,
    u.email,
    COUNT(CASE WHEN t.estado = 'pendiente' THEN 1 ELSE NULL END) AS total_tareas_pendientes
FROM
    `usuarios` u
LEFT JOIN
    `tareas` t ON u.id = t.usuario_id
GROUP BY
    u.id, u.nombre, u.email
ORDER BY
    u.nombre;

-- 2. Marque como completada todas las tareas de un usuario por su id.
UPDATE `tareas`
SET `estado` = 'completada'
WHERE `usuario_id` = 1;

