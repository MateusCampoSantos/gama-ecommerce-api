const knex = require('../database/index')
import { checaProduto } from '../utils/checaProduto'

export default class ProdutosController {

  async getAll(req, res) {
    const produtos = await knex('produtos').orderBy('id')

    return res.status(200).send(produtos)
  }

  async getOne(req, res) {
    const { id } = req.params
    const produto = await knex('produtos').where({codProduto: id})
    if (produto){
      return res.status(200).send(produto)
    }else{
      return res.status(404).send({ message: 'produto não encontrado' })
    }
  }

  async cria(req, res) {
    const novoProduto = req.body
    const produto = checaProduto(novoProduto)

    if(produto){
      await knex('produtos').insert(produto)

      return res.status(200).send(produto)
    }else{

      return res.status(400).send({message: 'produto já existe ou estrutura/informações inválidas, consulte a documentação'})
    }
  }

  async atualiza(req, res) {
    const { id } = req.params;
    const entrada = req.body;
    const produto = checaProduto(entrada)
    const produtoExiste = await knex('produtos').where({codProduto: id})

    if (produtoExiste){
      const updateProduto = await knex('produtos').where({codProduto: id}).update(produto)
      if(updateProduto){
        return res.status(200).send(updateProduto)
      } else {
        return res.status(400).send({ message: 'estrutura/informações inválidas, consulte a documentação'})
      }
    } else {
      return res.status(404).send({ message: 'produto não existe'})
    }
  }
}