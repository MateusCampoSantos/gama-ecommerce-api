import ProdutosService from '../services/produtosService';
const produtosService = new ProdutosService();

export default class ProdutosController {

  async getAll(req, res){
    const produtos = await produtosService.getProdutos();
    res.status(200).send(produtos);
  }

  async getOne(req, res){
    const { id } = req.params;
    const produto = await produtosService.getProduto(id);
    if (produto) {
      res.status(200).send(produto)
    } else {
      res.status(404).send({message: 'produto não encontrado'})
    }
  }
}