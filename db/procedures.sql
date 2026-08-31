USE yeezzydb;

DELIMITER $$
USE `yeezzydb`$$

CREATE PROCEDURE `productoAddOrEdit` (
  IN _id INT,
  IN _nombre_modelo VARCHAR(60),
  IN _color VARCHAR(45),
  IN _talla VARCHAR(10),
  IN _precio INT
)
BEGIN 
  IF _id = 0 THEN
    INSERT INTO producto (nombre_modelo, color, talla, precio)
    VALUES (_nombre_modelo, _color, _talla, _precio);

    SET _id = LAST_INSERT_ID();
  ELSE
    UPDATE producto
    SET
    nombre_modelo = _nombre_modelo,
    color = _color,
    talla = _talla,
    precio = _precio
    WHERE id = _id;
  END IF;

  SELECT _id AS 'id';
END$$
DELIMITER ;