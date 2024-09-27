import { Router } from 'express'
import ProdutoController from '../controllers/produto.controller.js'
import { createProdutoValidator, updateProdutoValidator, deleteProdutoValidator } from '../validators/produto.validator.js'

const router = Router()

router.get('/', ProdutoController.index)
router.get('/:id', ProdutoController.show)
router.post('/', createProdutoValidator, ProdutoController.create)
router.put('/:id', updateProdutoValidator, ProdutoController.update)
router.delete('/:id', deleteProdutoValidator, ProdutoController.delete)

export default router