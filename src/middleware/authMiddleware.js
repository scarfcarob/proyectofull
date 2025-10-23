

import jwt from "jsonwebtoken";     
import dotenv from "dotenv";

dotenv.config();

//  Verificar si el token es válido
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Acceso denegado. Token no proporcionado." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // guardamos los datos del usuario (id, email, tipo)
    next();
  } catch (error) {
    console.error("Error al verificar token:", error);
    res.status(403).json({ error: "Token inválido o expirado." });
  }
};

//  Verificar si el usuario tiene rol admin
export const isAdmin = (req, res, next) => {
  if (req.user.tipo !== "admin") {
    return res.status(403).json({ error: "Acceso denegado. Solo administradores pueden realizar esta acción." });
  }
  next();
};


///-------------------------------------///--------------------


//import jwt from 'jsonwebtoken';
//import dotenv from 'dotenv';

//dotenv.config();

// Verificar si el token es válido
//export const verifyToken = (req, res, next) => {
  //const authHeader = req.header('Authorization');

  //if (!authHeader) {
    //return res.status(401).json({ error: 'Acceso denegado. Token no proporcionado.' });
  //}

  //const token = authHeader.split(' ')[1]; // formato: "Bearer token"

  //try {
    //const decoded = jwt.verify(token, process.env.JWT_SECRET);
    //req.user = decoded; // guardamos los datos del usuario en la request
    //next();
  //} catch (error) {
    //res.status(403).json({ error: 'Token inválido o expirado.' });
  //}
//};

// Verificar si el usuario es administrador
//export const isAdmin = (req, res, next) => {
  //if (req.user.tipo !== 'admin') {
    //return res.status(403).json({ error: 'Acceso denegado. Solo los administradores pueden realizar esta acción.' });
  //}
  //next();
//};











































