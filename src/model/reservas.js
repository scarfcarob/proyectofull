

//--------------------------------///---------------

import pool from '../config/db.js';

const Reserva = {
  // Obtener todas las reservas con los datos del usuario y la cancha
  async getAll() {
    const [rows] = await pool.query(`
      SELECT r.*, 
             u.nombre AS usuario, 
             c.nombre AS cancha
      FROM reservas r
      JOIN usuarios u ON r.usuario_id = u.id
      JOIN canchas c ON r.cancha_id = c.id
    `);
    return rows;
  },

  // Obtener una reserva por su ID
  async getById(id) {
    const [rows] = await pool.query(`
      SELECT r.*, 
             u.nombre AS usuario, 
             c.nombre AS cancha
      FROM reservas r
      JOIN usuarios u ON r.usuario_id = u.id
      JOIN canchas c ON r.cancha_id = c.id
      WHERE r.id = ?
    `, [id]);
    return rows[0];
  },

  // Crear una nueva reserva
  async create({ usuario_id, cancha_id, fecha, hora_inicio, hora_fin, estado = 'pendiente' }) {
    const sql = `
      INSERT INTO reservas (usuario_id, cancha_id, fecha, hora_inicio, hora_fin, estado)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(sql, [usuario_id, cancha_id, fecha, hora_inicio, hora_fin, estado]);
    return result.insertId;
  },

  // Actualizar una reserva existente
  async update(id, data) {
    const campos = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const valores = Object.values(data);
    const sql = `UPDATE reservas SET ${campos} WHERE id = ?`;
    const [result] = await pool.query(sql, [...valores, id]);
    return result.affectedRows > 0;
  },

  // Eliminar una reserva
  async delete(id) {
    const [result] = await pool.query('DELETE FROM reservas WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

export default Reserva;
