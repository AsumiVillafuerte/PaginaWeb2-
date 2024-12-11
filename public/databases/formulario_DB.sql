CREATE database formulario_DB;
USE formulario_DB;
CREATE TABLE consultas (
    identificador int  NOT NULL COMMENT 'identificador de la tabla consulta',
    nombre_completo varchar(150)  NOT NULL COMMENT 'nombre y apellido de los usuarios',
    email varchar(150)  NOT NULL COMMENT 'e-mail de cada usuario que se registra',
    telefono char(9)  NOT NULL COMMENT 'numero de telefono que consta de 9 digitos',
    direccion varchar(100)  NOT NULL COMMENT 'ubicacion de vivienda de los usuarios ',
    consulta longtext  NOT NULL COMMENT 'consulta realizada por cada usuario registrado',
    CONSTRAINT consultas_pk PRIMARY KEY (identificador)
) COMMENT 'entidad que almacena los datos de los usuarios interesados en realizar alguna consulta sobre sus dudas referente a la ods';
-- Table: galletas
CREATE TABLE galletas (
    identificador int  NOT NULL COMMENT 'indentificador de la tabla galletas',
    nombre_completo varchar(150)  NOT NULL COMMENT 'nompre y apellidos del cliente ',
    email varchar(150)  NOT NULL COMMENT 'e-mail del cliente',
    telefono varchar(9)  NOT NULL COMMENT 'telefono de contacto del cliente que consta de 9 digitos',
    fecha_entrega datetime  NOT NULL COMMENT 'fecha de entrega en la que el usuario quiere recibir su pedido ',
    cantidad_paquetes int  NOT NULL COMMENT 'cantidad de paquetes solicitados por el cliente ',
    metodos_pago varchar(100)  NOT NULL COMMENT 'metodo de pago ',
    CONSTRAINT galletas_pk PRIMARY KEY (identificador)
) COMMENT 'tabla que almacena informacion de los pedidos de galletas realizados a traves de la pagina';

