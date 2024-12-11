## -----------------------------------------------------------------
-- Tema     : Gestión de datos desde Cero
-- Curso    : Base de Datos 1
-- SGBD     : MySQL 5x
-- Profesor : Jesús Canales G.
-- ----------------------------------------------------------------- ##

## CREACIÓN DE BASE DE DATOS PRO
CREATE DATABASE IF NOT EXISTS formulario
CHARACTER SET utf8mb4
COLLATE utf8mb4_spanish_ci;
USE formulario;
###

## CREACIÓN DE TABLAS PRO
-- Eliminar tablas si existen para evitar errores al recrearlas
DROP TABLE IF EXISTS usuario;

-- Creación de tabla solicitante
CREATE TABLE usuarios (
    IdUsuario INT AUTO_INCREMENT PRIMARY KEY not null,
    Nombre VARCHAR(255)not null,
    Apellido VARCHAR(255)not null,
    Telefono BIGINT not null,
    Correo VARCHAR(255) not null,
    Consulta  text not null
);







## Ponemos en uso la base de datos formulario
USE formulario;

/* Sentencias DML (Data Manipulation Language / Lenguaje de Manipulación de Datos)*/
/*
Sentencias básicas para la gestión de datos que están basadas en operaciones con datos: CRUD
Create -> crear o insertar (ok)
Read -> leer o listar (ok)
Update -> actualizar o modificar (ok)
Delete -> eliminar o borrar (ok)
*/

## INSERCIÓN DE REGISTROS
-- INSERT INTO
/*
-- sintaxis:
INSERT INTO nombre_tabla
	(campo1, campo2, campo3, ...)
VALUES
	(dato1, dato2, dato3, ...);
*/
-- <> Insertar registros en tabla usuario
-- Ver estructura de la tabla usuario
DESCRIBE usuario;
-- Insertar un applicant
INSERT INTO usuarios (Nombre, Apellido, Telefono, Correo, Consulta)
VALUES 
('Juan', 'Pérez', 1234567890, 'juan.perez@example.com', 'Consulta sobre productos'),
('Ana', 'Gómez', 9876543210, 'ana.gomez@example.com', 'Consulta sobre servicios'),
('Carlos', 'López', 1122334455, 'carlos.lopez@example.com', 'Consulta sobre precios');

## LISTAR REGISTROS
/* 
sintaxis:
SELECT nombre_columnas FROM nombre_tabla;
*/
-- Listar registros de applicants
SELECT * FROM usuario;
SELECT 
    Nombre, 
    Apellido, 
    Correo
FROM usuarios;

## MODIFICAR O ACTUALIZAR REGISTROS
/*
sintaxis:
UPDATE nombre_tabla
SET
	campo = nuevo_dato,
    campo = nuevo_dato
WHERE
	campo = valor
*/
-- Describir tabla
-- Modificar el documento de identificación y número de documento
UPDATE usuarios
SET 
    Telefono = '32659814785236995132', 
    Correo = 'maria.barrios@outlook.com'
WHERE IdUsuario = 2;

-- Modificar nombre y apellido
UPDATE usuarios
SET 
    Nombre = 'María Luisa', 
    Apellido = 'Barrios'
WHERE IdUsuario = 2;


-- Elimina un registro específico de la tabla 'usuarios'
DELETE FROM usuarios
WHERE IdUsuario = 1;

-- Elimina físicamente todos los registros de la tabla 'usuarios'
-- pero no reinicia el autoincrementable
DELETE FROM usuarios;

-- Eliminar registros y reiniciar el autoincrementable
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE usuarios;
SET FOREIGN_KEY_CHECKS = 1;

-- Verificar los registros restantes en la tabla
SELECT * FROM usuarios;
