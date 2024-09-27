import { Router } from 'express';
import CategoriaController from '../controllers/categoria.controller.js';
import { createCategoriaValidator } from '../validators/categoria.validator.js'

const router = Router();


router.get('/', CategoriaController.index);
router.post('/', CategoriaController.create);

router.post('/', createCategoriaValidator, CategoriaController.create)

export default router;
