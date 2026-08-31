CREATE DATABASE IF NOT EXISTS `YEEZZYdb`;

use yezzydb;

CREATE TABLE producto (
  id INT(11) NOT NULL AUTO_INCREMENT,
  nombre_modelo VARCHAR(60) DEFAULT NULL,
  color VARCHAR(45) DEFAULT NULL,
  talla VARCHAR(10) DEFAULT NULL,
  precio INT(5) DEFAULT NULL,
  PRIMARY KEY (id)
);

DESCRIBE producto;

INSERT INTO producto (id, nombre_modelo, color, talla, precio) VALUES 
  (1, 'Yeezy Boost 350 V2', 'Beluga', '9.5', 220),
  (2, 'Yeezy Slide', 'Onyx', '10', 70),
  (3, 'Yeezy Foam Runner', 'Sand', '9', 90);

SELECT * FROM producto;