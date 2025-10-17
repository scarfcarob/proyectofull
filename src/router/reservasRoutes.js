

//------------------------
import { Router } from 'express';
import ReservaController from '../controller/reservasController.js';
import verifyToken from '../middleware/verifyToken.js';  // importamos el middleware



const router = Router();

router.get('/', ReservaController.getAll);
router.get('/:id', ReservaController.getById);
router.post('/', ReservaController.create);
router.put('/:id', ReservaController.update);
router.delete('/:id', ReservaController.delete);


// Solo usuarios logueados pueden crear reservas
router.post("/", verifyToken, ReservaController.create);

router.put("/:id", verifyToken, ReservaController.update);
router.delete("/:id", verifyToken, ReservaController.delete);


export default router;

//-----(((------------------------)))









