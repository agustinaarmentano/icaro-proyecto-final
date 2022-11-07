CREATE SCHEMA `correos_db`;
use correos_db;
CREATE TABLE `usuarios`(
	idusuarios INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(45),
    apellido VARCHAR(45),
    pais VARCHAR(45),
    ciudad VARCHAR(45),
    PRIMARY KEY(idusuarios)
);
CREATE TABLE `emails`(
	idemails INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(144),
    fecha DATE,
    recibido boolean,
    enviado boolean
);
ALTER TABLE emails
ADD idusuarios INT;
ADD FOREIGN KEY (idusuarios) REFERENCES usuarios(idusuarios);

ALTER TABLE usuarios
ADD password VARCHAR(255)

ALTER TABLE usuarios
ADD salt VARCHAR(255)

ALTER TABLE usuarios
ADD usuario VARCHAR(40)

ALTER TABLE emails
ADD destinatario VARCHAR(40)

ALTER TABLE `emails` add COLUMN `remitente` varchar(60);

-- CONSULTAS

--Cantidad de usuarios por país.
select count(*) from usuarios where pais='Argentina papa';
-- Cantidad de mensajes por usuario.
select count(*) from emails where idusuarios=1;
--Cantidad de mensajes leídos por usuario
select count(*) from emails where leido=true;
--Cantidad de mensajes por fecha.
select count(*) from emails where fecha='2022-11-07';
