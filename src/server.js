import express from 'express'; 
import routes from './routes';
const app = express();
const port = 3333; 

app.use(express.json());

app.use(routes);

app.use((error, req, res, next) => {
  res.status(error.status || 500)
  res.json({error: error.message})
})

app.listen(port, () => {
  console.log(`listening on port: ${port}`)
})