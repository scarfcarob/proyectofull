
import { Router } from 'express';
import CanchaController from '../controller/canchasController.js';
import { verifyToken, isAdmin } from '../middleware/authMiddleware.js';   // agregue recientemnt

const router = Router();

router.get('/', CanchaController.getAll);
router.get('/:id', CanchaController.getById);
router.post('/', CanchaController.create);
router.put('/:id', CanchaController.update);
router.delete('/:id', CanchaController.delete);

//..........................agrege recientement
// Rutas públicas (clientes y admins)
router.get('/', CanchaController.getAll);
router.get('/:id', CanchaController.getById);

// Rutas protegidas (solo usuarios logueados)
router.post('/', verifyToken, isAdmin, CanchaController.create);
router.put('/:id', verifyToken, isAdmin, CanchaController.update);
router.delete('/:id', verifyToken, isAdmin, CanchaController.delete);


export default router;

//-----------------------------------------------//--------------------------------------------
//Los GET son públicos (cualquiera puede ver canchas).

//Los POST, PUT, y DELETE requieren:

//Un token válido (verifyToken)

//Que el usuario tenga rol "admin" (isAdmin)







