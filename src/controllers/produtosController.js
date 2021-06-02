import ProdutosService from '../services/produtosService';
const produtosService = new ProdutosService();

export default class ProdutosController {

  async getAll(req, res) {
    const produtos = await produtosService.getProdutos();
    res.status(200).send(produtos);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const produto = await produtosService.getProduto(id);
    if (produto) {
      res.status(200).send(produto)
    } else {
      res.status(404).send({ message: 'produto não encontrado' })
    }
  }

  async cria(req, res) {
    const entrada = req.body;
    const produto = await produtosService.criaProduto(entrada);

    if (produto) {
      res.status(200).send(produto)
    } else {
      res.status(400).send({
        message: 'produto já existe ou estrutura/informações inválidas, consulte a documentação'
      })
    }

  }

  async atualiza(req, res) {
    const { id } = req.params;
    const entrada = req.body;
    
    const checaExistencia = await produtosService.getProduto(id);
    if (checaExistencia){
      const produto = await produtosService.atualizaProduto(entrada, id);
      if(produto){
        res.status(200).send(produto)
      } else {
        res.status(400).send({ message: 'estrutura/informações inválidas, consulte a documentação'})
      }
    } else {
      res.status(404).send({ message: 'produto não existe'})
    }
    
    
  }
}