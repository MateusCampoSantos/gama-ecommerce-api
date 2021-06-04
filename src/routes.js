import { Router } from 'express';
import DepartamentosController from './controllers/departamentosController';
import ProdutosController from './controllers/produtosController'

const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
const routes = Router();
const produtosController = new ProdutosController();
const departamentosController = new DepartamentosController();

const swaggerOptions = {
  swaggerDefinition:{
      openapi: '3.0.1',
      info:{
          title: 'Gama Ecommerce API',
          version: '1.0.0'
      },
      servers:[
          {
              url: "http://localhost:3333",
              description: 'localhost server'
          },
          {
            url: "https://gama-ecommerce-api-ntmu3.ondigitalocean.app",
            description: 'digitalocean server'
        }
          
      ]
  },
  apis: ['./src/routes.js']
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)
routes.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))

routes.get('/', (req, res) => {
  res.status(200).send({
    title: 'gama-ecommerce-api',
    grupo: 1,
    integrantes: 'Felipe José, Lucas Militante e Mateus Campos'
  })
})

/**
 * @swagger
 * tags:
 *   name: Produtos
 * /produtos:
 *   get:
 *     tags: [Produtos]
 *     description: Retorna todos os produtos
 *     responses:
 *       200:
 *         description: Success
 * 
 */
routes.get('/produtos', produtosController.getAll)

/**
 * @swagger
 * tags:
 *   name: Produtos
 * /produto/{id}:
 *   get:
 *     tags: [Produtos]
 *     description: Retorna um produto de determinado ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numerico do produto à retornar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Produto não encontrado
 */
routes.get('/produto/:id', produtosController.getOne)

/**
 * @swagger
 * tags:
 *   name: Produtos
 * /produto:
 *   post:
 *     tags: [Produtos]
 *     descripiton: Cria e adiciona um produto na lista de produtos
 *     requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                       codProduto:
 *                          type: integer
 *                          default: 00000
 *                       descricao:
 *                          type: string
 *                          default: Descrição do produto
 *                       preco:
 *                          type: float
 *                          default: 00.00
 *                       qtdEstoque:
 *                          type: integer
 *                          default: 00
 *                       disponivel:
 *                          type: string
 *                          default: Disponivel?
 *                       emDestaque:
 *                          type: string
 *                          default: Destaque?
 *                       departamento:
 *                          type: integer
 *                          default: 0
 *     responses:
 *       200:
 *         description: Sucesso
 *       400:
 *         description: Produto já existe ou estrutura/informações inválidas, consulte a documentação
 */
routes.post('/produto', produtosController.cria)

/**
 * @swagger
 * tags:
 *   name: Produtos
 * /produto/{id}:
 *   put:
 *     tags: [Produtos]
 *     descripiton: Atualiza um produto já cadastrado na lista de produtos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numerico do produto à atualizar
 *         schema:
 *           type: integer
 *     requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                       codProduto:
 *                          type: integer
 *                          default: 00000
 *                       descricao:
 *                          type: string
 *                          default: Descrição do produto
 *                       preco:
 *                          type: float
 *                          default: 00.00
 *                       qtdEstoque:
 *                          type: integer
 *                          default: 00
 *                       disponivel:
 *                          type: string
 *                          default: Disponivel?
 *                       emDestaque:
 *                          type: string
 *                          default: Destaque?
 *                       departamento:
 *                          type: integer
 *                          default: 0
 *     responses:
 *       200:
 *         description: Sucesso
 *       400:
 *         description: Estrutura/informações inválidas, consulte a documentação
 *       404:
 *         description: Produto não existe
 */
routes.put('/produto/:id', produtosController.atualiza)

/**
 * @swagger
 * tags: 
 *   name: Departamentos
 * /departamentos:
 *   get:
 *     tags: [Departamentos]
 *     description: Retorna todos os departamentos
 *     responses:
 *       200:
 *         description: Success
 * 
 */
routes.get('/departamentos', departamentosController.getAll)

/**
 * @swagger
 * tags:
 *   name: Departamentos
 * /departamento/{id}:
 *   get:
 *     tags: [Departamentos]
 *     description: Retorna o departamento junto com seus produtos
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numerico do departamento à retornar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Sucesso
 *       404:
 *         description: Departamento não encontrado
 */
routes.get('/departamento/:id', departamentosController.getProdutos)


export default routes;