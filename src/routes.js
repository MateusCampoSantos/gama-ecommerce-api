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
            url: "http://157.245.252.69/api-docs",
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
routes.get('/produtos', produtosController.pegaTodos)

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
routes.get('/produto/:id', produtosController.pegaUm)

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
 *       201:
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
 *   name: Produtos
 * /produto/{id}:
 *   delete:
 *     tags: [Produtos]
 *     description: Deleta um determinado produto identificado pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numerico do produto à retornar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto deletado
 *       404:
 *         description: Produto não encontrado
 */
routes.delete('/produto/:id', produtosController.deleta)

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

/**
 * @swagger
 * tags:
 *   name: Departamentos
 * /departamento:
 *   post:
 *     tags: [Departamentos]
 *     descripiton: Cria e adiciona um departamento na lista de departamento
 *     requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                       idDepto:
 *                          type: integer
 *                          default: 00
 *                       nomeDepto:
 *                          type: string
 *                          default: Nome do departamento
 *     responses:
 *       201:
 *         description: Sucesso
 *       400:
 *         description: Departamento já existe
 *       403:
 *         description: Código departamento já utilizado
 */
routes.post('/departamento', departamentosController.criaDepartamento)

/**
 * @swagger
 * tags:
 *   name: Departamentos
 * /departamento/{id}:
 *   put:
 *     tags: [Departamentos]
 *     descripiton: Atualiza um departamento já existente
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numerico do departamento à retornar
 *         schema:
 *           type: integer
 *     requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                 schema:
 *                    type: object
 *                    properties:
 *                       idDepto:
 *                          type: integer
 *                          default: 00
 *                       nomeDepto:
 *                          type: string
 *                          default: Nome do departamento
 *     responses:
 *       200:
 *         description: Departamento atualizado
 *       404:
 *         description: Departamento não existe
 */
routes.put('/departamento/:id', departamentosController.atualizaDepartamento)

/**
 * @swagger
 * tags:
 *   name: Departamentos
 * /departamento/{id}:
 *   delete:
 *     tags: [Departamentos]
 *     description: Deleta um determinado departamento identificado pelo ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID numerico do departamento à retornar
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Departamento deletado
 *       400:
 *         description: Existem produtos cadastrados nesse departamento, não é possivel deleta-lo
 *       404:
 *         description: Departamento não encontrado
 */
routes.delete('/departamento/:id', departamentosController.deletaDepartamento)


export default routes;