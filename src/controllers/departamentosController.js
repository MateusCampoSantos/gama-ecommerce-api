const knex = require('../database/index')

export default class DepartamentosController {
  async getAll(req, res){
    const departamentos = await knex('departamentos')

    res.status(200).send(departamentos)
  }

  async getProdutos(req, res){
    const { id } = req.params
    const departamento = await knex('departamentos').where({id: id})
    if(departamento){
      const produtos = await knex('produtos').where({departamento: id})

      res.status(200).send([departamento, produtos])
    }else{
      res.status(404).send({message: 'Departamento não encontrado'})
    }
  }
}