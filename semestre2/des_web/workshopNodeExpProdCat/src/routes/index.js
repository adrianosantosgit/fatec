import { Router } from 'express'
import produtoRoute from './produto.route.js'
import categoriaRoute from './categoria.route.js';


const router = Router()

router.use('/produtos', produtoRoute)

router.use('/categorias', categoriaRoute)

export default router