
//.............
import pool from '../config/db.js';

const Pago = {
  // Obtener todos los pagos con datos de usuario y cancha
  async getAll() {
    const [rows] = await pool.query(`
      SELECT p.*, 
             u.nombre AS usuario, 
             c.nombre AS cancha, 
             r.fecha, 
             r.hora_inicio, 
             r.hora_fin
      FROM pagos p
      JOIN reservas r ON p.reserva_id = r.id
      JOIN usuarios u ON r.usuario_id = u.id
      JOIN canchas c ON r.cancha_id = c.id
    `);
    return rows;
  },

  // Obtener un pago por su ID
  async getById(id) {
    const [rows] = await pool.query(`
      SELECT p.*, 
             u.nombre AS usuario, 
             c.nombre AS cancha, 
             r.fecha, 
             r.hora_inicio, 
             r.hora_fin
      FROM pagos p
      JOIN reservas r ON p.reserva_id = r.id
      JOIN usuarios u ON r.usuario_id = u.id
      JOIN canchas c ON r.cancha_id = c.id
      WHERE p.id = ?
    `, [id]);
    return rows[0];
  },

  // Crear un nuevo pago
  async create({ reserva_id, monto, metodo_pago }) {
    const sql = `
      INSERT INTO pagos (reserva_id, monto, metodo_pago)
      VALUES (?, ?, ?)
    `;
    const [result] = await pool.query(sql, [reserva_id, monto, metodo_pago]);
    return result.insertId;
  },

  // Actualizar un pago existente
  async update(id, data) {
    const campos = Object.keys(data).map(key => `${key} = ?`).join(', ');
    const valores = Object.values(data);
    const sql = `UPDATE pagos SET ${campos} WHERE id = ?`;
    const [result] = await pool.query(sql, [...valores, id]);
    return result.affectedRows > 0;
  },

  // Eliminar un pago
  async delete(id) {
    const [result] = await pool.query('DELETE FROM pagos WHERE id = ?', [id]);
    return result.affectedRows > 0;
  },
};

export default Pago;



