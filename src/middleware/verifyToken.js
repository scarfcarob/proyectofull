
// src/middleware/verifyToken.js
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verifica que venga el token en el header
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Acceso denegado. Token no proporcionado." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verifica y decodifica el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // guarda los datos del usuario (id, email, tipo)
    next();
  } catch (error) {
    console.error("Error al verificar token:", error);
    res.status(403).json({ error: "Token inválido o expirado." });
  }
};

export default verifyToken;

//--------------------------///----------

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Verificar si existe el token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Acceso denegado. Token no proporcionado." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // guarda los datos del usuario en la request
    next();
  } catch (error) {
    console.error("Error al verificar token:", error);
    res.status(403).json({ error: "Token inválido o expirado." });
  }
};

export default verifyToken;
