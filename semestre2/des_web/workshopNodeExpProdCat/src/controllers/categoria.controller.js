import Categoria from '../models/categoria.model.js'

export default class CategoriaController{
  static async index(req, res) {
    const categorias = await Task.findMany({
      include: {
        produto: {
          select: {
            name: true
          }
        }
      }
    })
    res.json(categorias)
  }
  static async create(req, res) {
    const categoria = await Task.create({
      data: req.body
    })
    res.json(categoria)
  }
  
}