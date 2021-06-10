import knex from '../database/connection';
import { checaProduto } from '../utils/checaProduto'

export default class ProdutosService {
  async getProdutos() {
    const produtos = await knex('produtos').orderBy('departamento').orderBy('codProduto')
    return produtos
  };

  async getProduto(id) {
    const produto = await knex('produtos').where({ codProduto: id }).first()
    return produto;
  }

  async criaProduto(entrada) {
    const produto = checaProduto(entrada);
    if (produto) {
      const produtoExiste = await this.getProduto(produto.codProduto)
      if (!produtoExiste) {
        await knex('produtos').insert(produto)
        return produto
      }
    } else {
      return false;
    }

  }

  async atualizaProduto(entrada, id) {
    const produto = checaProduto(entrada);
    if (produto) {
      await knex('produtos').where({ codProduto: id }).update(produto)
      return await this.getProduto(id)
    } else {
      return false;
    }
  }

  async deletaProduto(id) {
    await knex('produtos').where({ codProduto: id }).delete()
  }
}