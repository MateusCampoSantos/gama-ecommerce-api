import { Router } from 'express'; 
import ProdutosController from './controllers/produtosController'

const routes = Router(); 
const produtosController = new ProdutosController();

routes.get('/', (req, res) => {
  res.status(200).send({
    title: 'gama-ecommerce-api',
    grupo: 'grupo 1',
    integrantes: 'Felipe José, Lucas Militante e Mateus Campos'
  })
})


routes.get('/produtos', produtosController.getAll)
routes.get('/produtos/:id', produtosController.getOne)

export default routes;