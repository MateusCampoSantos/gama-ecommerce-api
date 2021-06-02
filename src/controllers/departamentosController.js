import DepartamentosService  from "../services/departamentosService";
const departamentosService = new DepartamentosService();

export default class DepartamentosController {
  async getAll(req, res){
    const departamentos = await departamentosService.getDepartamentos();
    res.status(200).send(departamentos);
  }

  async getProdutos(req, res){
    const { id } = req.params;
    const departamento = await departamentosService.getDepartamento(id)
    if(departamento){
      const produtos = await departamentosService.getProdutos(id)
      res.status(200).send([{
        nomeDepto: departamento.nomeDepto,
        idDepto: departamento.idDepto,
        produtos: produtos
      }])
    } else {
      res.status(404).send({message: 'departamento não encontado'})
    }
  }
}