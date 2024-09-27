import { body } from 'express-validator'

export const createCategoriaValidator = [
  body('nome').isString().withMessage("Caegoria Inválida"),
  body('produtoId').isInt().withMessage("Id de produto inválida"),
]