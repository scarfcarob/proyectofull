
import { Router } from 'express';
import { body } from 'express-validator';
import AuthController from '../controller/authController.js';
import validateFields from '../middleware/validationMiddleware.js';

const router = Router();

// Registro
router.post(
  '/register',
  [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    validateFields
  ],
  AuthController.register
);

// Login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Debe ser un email válido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    validateFields
  ],
  AuthController.login
);

export default router;





