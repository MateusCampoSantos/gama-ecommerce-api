import { Router } from 'express';
import DepartamentosController from './controllers/departamentosController';
import ProdutosController from './controllers/produtosController'

const routes = Router();
const produtosController = new ProdutosController();
const departamentosController = new DepartamentosController();

routes.get('/', (req, res) => {
  res.status(200).send({
    title: 'gama-ecommerce-api',
    grupo: 'grupo 1',
    integrantes: 'Felipe José, Lucas Militante e Mateus Campos'
  })
})


routes.get('/produtos', produtosController.getAll)

routes.get('/produto/:id', produtosController.getOne)


/**
 * POST /produto
 * @summary Rota para pegar todos os produtos cadastrados.
 * @param {Produto} body.object.required - Objeto de produto
 * @example request - produto ok
 * 
 * {
    "codProduto": 63254,
    "descricao": "CONTROLE XBOX SERIES X",
    "preco": 79,
    "qtdEstoque": 10,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 8
  }
 *
 * @example request - produto erro preço zerado
 * 
 * {
    "codProduto": 8524,
    "descricao": "MONITOR 21 POLEGADAS",
    "preco": 0,
    "qtdEstoque": 10,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 1
  }
 * 
 * 
 * @return {object} 200 - response ok
 * @example response - 200 - exemplo response 200
 * {
    "codProduto": 25754,
    "descricao": "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",
    "preco": 5,
    "qtdEstoque": 10,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 1
  }
 * @return {object} 400 - error response
 * @example response - 400 - exemplo erro 400
 * {
 *    "message": "produto já existe ou estrutura/informações inválidas, consulte a documentação"
 * }
 */
routes.post('/produto', produtosController.cria)
routes.put('/produto/:id', produtosController.atualiza)
routes.get('/departamentos', departamentosController.getAll)
routes.get('/departamento/:id', departamentosController.getProdutos)


export default routes;

//swagger schemas
/**
*
* @typedef {object} Produto
* @property {number} codProduto.required - Código do produto
* @property {string} descricao.required - Nome do produto
* @property {number} preco.required - Preço do produto
* @property {number} qtdEstoque.required - Quantidade em estoque do produto
* @property {string} disponivel.required - Produto disponivel "sim"/"nao"
* @property {string} emDestaque.required - Produto em destaque na loja "sim"/"nao"
* @property {number} departamento.required - ID do departamento do produto
*/

/**
* @typedef {object} ErroMessage
* @property {string} message.required - mensagem de erro
* */