import { listaProdutos } from "../database/static"
import { checaProduto } from '../utils/checaProduto'

export default class ProdutosService {
  async getProdutos() {
    return listaProdutos;
  };

  async getProduto(id) {
    let produto = listaProdutos.find((produto) => produto.codProduto == id);
    return produto;
  }

  async criaProduto(entrada) {
    const produto = checaProduto(entrada);
    const produtoExiste = listaProdutos.find((p) => p.codProduto == produto.codProduto);
    if (produto) {
      if (!produtoExiste) {
        listaProdutos.push(produto);
        return produto;
      }
    } else {
      return false;
    }

  }

  async atualizaProduto(entrada, id) {
    const produto = checaProduto(entrada);
    console.log(produto)
    if (produto) {
      for(let i = 0; i < listaProdutos.length; i++) {
        if(listaProdutos[i].codProduto == id){
          listaProdutos[i] = produto;
        }
        return produto;
      }
    } else {
      return false;
    }
  }
}