
//----------------------------//---------
//import pool from '../config/db.js';
//import bcrypt from 'bcryptjs';

//const Usuarios = {
  //async getAll() {
    //const [rows] = await pool.query('SELECT * FROM usuarios');
    //return rows;
  //},

  //async getById(id) {
    //const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    //return rows[0];
  //},

  //async create({ nombre, email, telefono, tipo = 'cliente', contraseña }) {
    // Cifrar contraseña antes de guardar
    //const hashedPassword = await bcrypt.hash(contraseña, 10);

    //const sql = `
      //INSERT INTO usuarios (nombre, email, telefono, tipo, contraseña)
      //VALUES (?, ?, ?, ?, ?)
    //`;
    //const [result] = await pool.query(sql, [nombre, email, telefono, tipo, hashedPassword]);
    //return result.insertId;
  //},

  //async update(id, { nombre, email, telefono, tipo }) {
    //const sql = `
      //UPDATE usuarios
      //SET nombre = ?, email = ?, telefono = ?, tipo = ?
      //WHERE id = ?
    //`;
    //const [result] = await pool.query(sql, [nombre, email, telefono, tipo, id]);
    //return result.affectedRows > 0;
  //},

  //async delete(id) {
    //const [result] = await pool.query('DELETE FROM usuarios WHERE id = ?', [id]);
    //return result.affectedRows > 0;
  //},
//};

//export default Usuarios;

//----------------------------------------------///----------------

import pool from '../config/db.js';

const Usuario = {
  async create({ nombre, email, password, telefono, tipo }) {
    const sql = `
      INSERT INTO usuarios (nombre, email, password, telefono, tipo)
      VALUES (?, ?, ?, ?, ?)
    `;
    const [result] = await pool.query(sql, [nombre, email, password, telefono, tipo]);
    return result.insertId;
  },

  async findByEmail(email) {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    return rows[0];
  },

  async getById(id) {
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    return rows[0];
  }
};

export default Usuario;
