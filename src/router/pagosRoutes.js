
import { Router } from 'express';
import PagoController from '../controller/pagosController.js';


const router = Router();

router.get('/', PagoController.getAll);
router.get('/:id', PagoController.getById);
router.post('/', PagoController.create);
router.put('/:id', PagoController.update);
router.delete('/:id', PagoController.delete);

export default router;
