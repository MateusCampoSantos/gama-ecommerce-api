import { listaProdutos } from "../database/static"

export default class ProdutosService {
  async getProdutos() {
    return listaProdutos;
  };

  async getProduto(id){
    let produto = listaProdutos.find((produto) => produto.codProduto == id);
    return produto;
  }
}