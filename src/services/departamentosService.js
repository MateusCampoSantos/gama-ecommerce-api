import knex from '../database/connection';

export default class DepartamentosService {
  async getDepartamentos() {
    const departamentos = await knex('departamentos')
    return departamentos;
  }

  async getProdutos(id) {
    const produtos = await knex('produtos').where({departamento: id})
    return produtos
  }

  async getDepartamento(id) {
    const departamento = await knex('departamentos').where({idDepto: id})
    return departamento[0] 
  }
}