
import pool from '../config/db.js';

const Cancha = {
  async getAll() {
    const [rows] = await pool.query('SELECT * FROM canchas');
    return rows;
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM canchas WHERE id = ?', [id]);
    return rows[0];
  },

  async create({ nombre, ubicacion, tipo, precio_por_hora }) {
    const sql = `
      INSERT INTO canchas (nombre, ubicacion, tipo, precio_por_hora)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await pool.query(sql, [nombre, ubicacion, tipo, precio_por_hora]);
    return result.insertId;
  },

  async update(id, { nombre, ubicacion, tipo, precio_por_hora }) {
    const sql = `
      UPDATE canchas
      SET nombre = ?, ubicacion = ?, tipo = ?, precio_por_hora = ?
      WHERE id = ?
    `;
    const [result] = await pool.query(sql, [nombre, ubicacion, tipo, precio_por_hora, id]);
    return result.affectedRows > 0;
  },

  async delete(id) {
    const [result] = await pool.query('DELETE FROM canchas WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

export default Cancha;
