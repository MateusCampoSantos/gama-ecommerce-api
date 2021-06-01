import { Router } from 'express'; //importa o Router do express
import listaProdutos from './database/static' //importa a lista de produtos
const routes = Router(); // atribui o Router() do express na váriavel routes

//rota de get, retorta a lista de produtos
routes.get('/produtos', (req, res) => {
  res.json(listaProdutos)
})

/*rota de get, retorna um produto:
exemplo: http://localhost:3333/produtos/21542 
vai retornar o produto (caso exista) cujo codigo é 21542
caso não, retorna erro 404 com uma menssagem */

routes.get('/produtos/:id', (req, res) => {
  const { id } = req.params; //desestruturando (isolando) o id passado em uma váriavel
  let prod; // váriavel para guardar o produto caso exista

  //for para procurar o produto
  for(let i = 0; i < listaProdutos.length; i++) {
    if (id == listaProdutos[i].codProduto){
      prod = listaProdutos[i];
      break //caso ache o produto para o for
    }
  }

  /* checa se existe o produto caso não ele retorna
  o status(404) e a mensagem de não encontrado, caso sim
  ele retorna o produto que foi guardado na váriavel prod */
  if (!prod){ 
    res.status(404).json({message: 'não encontrado'})
  } else {
  res.json(prod);
  }
})

/* rota de post, ao acessar a rota passando um json no corpo 
da requisição com o seguinte formato: {"message": "teste"} 
ele vai imprimir no console "teste" e retornar "teste" */
routes.post('/teste', (req, res) => {
  const { message } = req.body
  console.log(message)
  res.json(message)
})


//exporta o arquivo de routes
export default routes;