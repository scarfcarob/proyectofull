

import pool from '../config/db.js';

const Horario = {
  // Obtener todos los horarios con el nombre de la cancha
  async getAll() {
    const [rows] = await pool.query(`
      SELECT h.*, c.nombre AS cancha
      FROM horarios h
      JOIN canchas c ON h.cancha_id = c.id
    `);
    return rows;
  },

  // Obtener un horario por su ID
  async getById(id) {
    const [rows] = await pool.query(`
      SELECT h.*, c.nombre AS cancha
      FROM horarios h
      JOIN canchas c ON h.cancha_id = c.id
      WHERE h.id = ?
    `, [id]);
    return rows[0];
  },

  // Crear un nuevo horario
  async create({ cancha_id, dia, hora_inicio, hora_fin, disponible = true }) {
    const sql = `
      INSERT INTO horarios (cancha_id, dia, hora_inicio, hora_fin, disponible)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(sql, [cancha_id, dia, hora_inicio, hora_fin, disponible]);
    return result.insertId;
  },

  // Actualizar un horario existente
  async update(id, data) {
    const campos = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const valores = Object.values(data);
    const sql = `UPDATE horarios SET ${campos} WHERE id = ?`;
    const [result] = await pool.query(sql, [...valores, id]);
    return result.affectedRows > 0;
  },

  // Eliminar un horario
  async delete(id) {
    const [result] = await pool.query('DELETE FROM horarios WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

export default Horario;
