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
routes.get('/produtos/:id', produtosController.getOne)
routes.post('/produtos', produtosController.cria)
routes.put('/produtos/:id', produtosController.atualiza)
routes.get('/departamentos', departamentosController.getAll)
routes.get('/departamentos/:id', departamentosController.getProdutos)


export default routes;