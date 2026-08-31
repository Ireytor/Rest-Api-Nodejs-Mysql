import { pool } from "../db.js";

export const getProductos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM producto");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const getProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("SELECT * FROM producto WHERE id = ?", [id]);

    if (rows.length <= 0) {
      return res.status(404).json({ message: "Producto not found" });
    }

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await pool.query("DELETE FROM producto WHERE id = ?", [id]);

    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Producto not found" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const createProducto = async (req, res) => {
  try {
    const { nombre_modelo, color, talla, precio } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO producto (nombre_modelo, color, talla, precio) VALUES (?, ?, ?, ?)",
      [nombre_modelo, color, talla, precio]
    );
    res.status(201).json({ id: rows.insertId, nombre_modelo, color, talla, precio });
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};

export const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre_modelo, color, talla, precio } = req.body;

    const [result] = await pool.query(
      "UPDATE producto SET nombre_modelo = IFNULL(?, nombre_modelo), color = IFNULL(?, color), talla = IFNULL(?, talla), precio = IFNULL(?, precio) WHERE id = ?",
      [nombre_modelo, color, talla, precio, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Producto not found" });

    const [rows] = await pool.query("SELECT * FROM producto WHERE id = ?", [id]);

    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Something goes wrong" });
  }
};