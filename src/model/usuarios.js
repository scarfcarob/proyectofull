
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























//...............................esto es del profe--------------------------
//import { pool } from "../config/db.js";  
//import { } from "../config/db.js";  


// esto es del profe
//import bcrypt from "bcryptjs";

//const userModel = {
  //getAll: async () => {
    //try {
      //const query = "SELECT * FROM usuario";
      //const [rows] = await pool.query(query);
      //return rows;
    //} catch (error) {
      //console.error("Error fetching users:", error);
      //throw new Error("Could not fetch users from the database.");
    //}
  //},

  //getById: async (id) => {
    //try {
      //const query = "SELECT * FROM usuario WHERE id_usuario = ?";
      //const [rows] = await pool.query(query, [id]);
      //if (rows.length === 0) {
        //return null;
      //}
      //return rows[0];
    //} catch (error) {
      //console.error(`Error fetching user with id ${id}:`, error);
      //throw new Error(`Could not fetch user with id ${id} from the database.`);
    //}
  //},

  //create: async (user) => {                     // id_rol (cambia esto)
    //try {
      //const { nombre, mail, password, id_rol = 3 } = user; // Default role to 'Lector'
      //ciframos la clave para que no se guarde como texto plano
      //const hashedPassword = await bcrypt.hash(password, 10);
      //const query =
        //"INSERT INTO usuario (nombre, apellido, mail, contrasenia, id_rol) VALUES (?, ?, ?, ?, ?)";
      //const [result] = await pool.execute(query, [
        //nombre,
        //mail,
        //hashedPassword,
        //id_rol,
      //]);
      //return { id: result.insertId, nombre, mail, id_rol };
    //} catch (error) {
      //console.error("Error creating user:", error);
      //throw new Error("Could not create user in the database.");
    //}
  //},

  //findByEmail: async (mail) => {
    //try {
      //const query = "SELECT * FROM usuario WHERE mail = ?";
      //const [rows] = await pool.query(query, [mail]);
      //if (rows.length === 0) {
        //return null;
        //throw new Error(`Usuario no encontrado con el mail : ${mail}`);
      //}
      //si no saltó el error en el if anterior entoces se devuelve el resultado
      //return rows[0];
    //} catch (error) {
      //console.error(`Error fetching user with email ${mail}:`, error);
      //throw new Error(
        //`Could not fetch user with email ${mail} from the database.`
      //);
   // }
  //},

  //un metodo que utiliza la funcion del login para saber si existe ese usuario o no
  //findByMail: async (mail) => {
    //try {
      //const consulta = `SELECT p.nombre, u.mail, u.pass
        //FROM usuario u INNER JOIN persona p ON u.persona_id = p.dni AND u.mail = ?`;
      //const [result] = await db.execute(consulta, [mail]);
      //if (result.length == 0) {
        //throw new Error(`Usuario no encontrado con el mail : ${mail}`);
      //}
      //return result; //si no saltó el error en el if anterior entoces se devuelve el resultado
    //} catch (error) {
      //throw new Error(error.message);
    //}
  //},

  //updateById: async (id, user) => {
    //try {
      //const { nombre, mail, password, id_rol } = user;
      //const query =
        //"UPDATE usuario SET nombre = ?, mail = ?, password = ?, id_rol = ? WHERE id_usuario = ?";
      //const [result] = await pool.query(query, [
        //nombre,
        //mail,
        //password,
        //id_rol,
        //id,
      //]);
      //return result.affectedRows > 0;
    //} catch (error) {
      //console.error(`Error updating user with id ${id}:`, error);
      //throw new Error(`Could not update user with id ${id} in the database.`);
    //}
  //},

  //deleteById: async (id) => {
    //try {
      //const query = "DELETE FROM usuario WHERE id_usuario = ?";
      //const [result] = await pool.query(query, [id]);
      //return result.affectedRows > 0;
    //} catch (error) {
      //console.error(`Error deleting user with id ${id}:`, error);
      //throw new Error(`Could not delete user with id ${id} from the database.`);
    //}
  //},
//};

//export default userModel;




//----------------------------//---------
//import pool from '../config/db.js'; //este es el q estaba bien con getAll

//import bcrypt from 'bcryptjs';   // no lo actives (o no funciona index)

//const Usuarios = {
  //async getAll() {
    
  //const [rows] = await pool.query('SELECT * FROM usuarios');
    //return rows;
  //},

  //async getById(id) {
    //const [rows] = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    //return rows[0];
  //},

  // esto dijo el profe que pegues en tu proyecto 
//const Usuario = {
  //async create({ nombre, email, password, telefono, tipo }) {
    //try {
      //const sql = `
      //INSERT INTO usuarios (nombre, email, password, telefono, tipo)
      //VALUES (?, ?, ?, ?, ?)
    //`;
      
  //},
  
  //async create({ nombre, email, telefono, tipo = 'cliente', contraseña }) {
    //Cifrar contraseña antes de guardar
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

//const Usuario = {
  //async create({ nombre, email, password, telefono, tipo }) {
    //try {
      //const sql = `
      //INSERT INTO usuarios (nombre, email, password, telefono, tipo)
      //VALUES (?, ?, ?, ?, ?)
    //`;
      //const [result] = await pool.query(sql, [
        //nombre,
        //email,
        //password,
        //telefono,
        //tipo,
      //]);
      //return result.insertId;
    //} catch (error) {
      //throw new Error(error);
    //}
  //},
//};

//------------------------///----------------
//ESTO EL PROFE QUIERE QUE PEGUES
//const [result] = await pool.query(sql, [
        //nombre,
        //email,
        //password,
        //telefono,
        //tipo,
      //]);
      //return result.insertId;
    //} catch (error) {
      //throw new Error(error);
    //}