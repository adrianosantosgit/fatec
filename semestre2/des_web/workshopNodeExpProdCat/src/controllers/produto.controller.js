import { validationResult } from 'express-validator';
import User from '../models/produto.model.js';

export default class ProdutoController {
  static async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const produto = await Produto.create({
        data: req.body,
      });
      res.json(produto);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar produto' });
    }
  }

  static async index(req, res) {
    try {
      const produtos = await Produto.findMany();
      res.json(produtos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }
  static async show(req, res) {
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }
    res.json(produto)
  }
  static async update(req, res) {
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }
    const updatedUser = await User.update({
      where: {
        id: parseInt(req.params.id)
      },
      data: req.body
    })
    res.json(updatedUser)
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }  
  }
  static async delete(req, res) {
    const produto = await Produto.findUnique({
      where: {
        id: parseInt(req.params.id)
      }
    })
    if (!produto) {
      return res.status(404).json({ message: 'Produto não encontrado' })
    }
    await Produto.delete({
      where: {
        id: parseInt(req.params.id)
      }
    })
    res.status(204).json({ message: 'Produto deletado com sucesso' })
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
  }
  
}
