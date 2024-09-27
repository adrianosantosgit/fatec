import { body, param } from 'express-validator';

export const createProdutoValidator = [
  body('nome').isString().withMessage('Nome inválido'),
  body('descricao').isString().withMessage('Descrição inválida'),
  body('preco').isFloat().withMessage("Preço Inválido").optional(),
]

export const updateProdutoValidator = [
  param('id').isInt().withMessage("ID inválido"),
  body('nome').isString().withMessage("Nome inválido"),
  body('descricao').isString().withMessage("Descrição inválida"),
]

export const deleteProdutoValidator = [
  param('id').isInt().withMessage("Id inválido"),
];
