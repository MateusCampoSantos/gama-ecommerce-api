import express from 'express'; //importa o express
import routes from './routes' //importa o arquivo routes

const app = express(); //inicia o express na váriavel app
const port = 3333; //porta do servidor

 /* diz para o express usar o formato o json,
  necessário para ler o body nas requisições POST/PUT */ 
app.use(express.json());

/* diz para o express usar as rotas
do arquivo routes */
app.use(routes);

/* diz para o express iniciar na porta passada na
 váriavel port e dar um console.log */
app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})