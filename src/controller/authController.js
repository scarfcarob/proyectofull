
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../model/usuarios.js';
import dotenv from 'dotenv';

dotenv.config();

const AuthController = {                                  // funciones de registro y login
  // Registro de usuario
  async register(req, res) {
    try {
      const { nombre, email, password, telefono, tipo } = req.body;

      // Verificar si ya existe
      const userExistente = await Usuario.findByEmail(email);
      if (userExistente) {
        return res.status(400).json({ error: 'El email ya está registrado' });
      }

      // Encriptar contraseña
      const hashedPassword = await bcrypt.hash(password, 10);

      const id = await Usuario.create({
        nombre,
        email,
        password: hashedPassword,
        telefono,
        tipo: tipo || 'cliente'
      });

      res.status(201).json({ message: 'Usuario registrado exitosamente', id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al registrar el usuario' });
    }
  },

  // Inicio de sesión
  async login(req, res) {
    try {
      const { email, password } = req.body;

      const usuario = await Usuario.findByEmail(email);
      if (!usuario) {
        return res.status(400).json({ error: 'Usuario no encontrado' });
      }

      const passwordValida = await bcrypt.compare(password, usuario.password);
      if (!passwordValida) {
        return res.status(401).json({ error: 'Contraseña incorrecta' });
      }


    console.log('JWT_SECRET:', process.env.JWT_SECRET);


      // Crear token JWT
      const token = jwt.sign(
        { id: usuario.id, email: usuario.email, tipo: usuario.tipo },
        process.env.JWT_SECRET,
        { expiresIn: '2h' }
      );

      res.json({ message: 'Login exitoso', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error en el login' });
    }
  }
};

export default AuthController;









