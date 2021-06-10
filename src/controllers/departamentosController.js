import DepartamentosService from "../services/departamentosService";
const departamentosService = new DepartamentosService();

export default class DepartamentosController {
  async getAll(req, res) {
    const departamentos = await departamentosService.getDepartamentos();
    res.status(200).send(departamentos);
  }

  async getProdutos(req, res) {
    const { id } = req.params;
    const departamento = await departamentosService.getDepartamento(parseInt(id))
    if (departamento) {
      const produtos = await departamentosService.getProdutos(parseInt(id))
      res.status(200).send([{
        nomeDepto: departamento.nomeDepto,
        idDepto: departamento.idDepto,
        produtos: produtos
      }])
    } else {
      res.status(404).send({ message: 'departamento não encontado' })
    }
  }

  async criaDepartamento(req, res) {
    const { idDepto, nomeDepto } = req.body;
    const DepartamentoExiste = await departamentosService.getDepartamento(idDepto)

    if (DepartamentoExiste) {
      if (DepartamentoExiste.nomeDepto == nomeDepto) {
        res.status(400).send({ message: 'departamento já existe' })
      } else {
        res.status(400).send({ message: 'código departamento já utilizado' })
      }
    } else {
      const departamento = await departamentosService.newDepto(idDepto, nomeDepto)
      res.status(201).send({ message: `departamento ${departamento} criado com sucesso` })
    }
  }

  async atualizaDepartamento(req, res) {
    const { id } = req.params
    const { nomeDepto } = req.body;
    const DepartamentoExiste = await departamentosService.getDepartamento(id)
    if (!DepartamentoExiste) {
      res.status(404).send({ message: 'departamento não existe' })
    } else {
      await departamentosService.atualizaDepto(id, nomeDepto)
      res.status(200).send({ message: `departamento atualizado, novo nome: ${nomeDepto}` })
    }
  }

  async deletaDepartamento(req, res) {
    const { id } = req.params
    const departamentoExiste = await departamentosService.getDepartamento(id)
    const existeProdutosNoDepartamento = await departamentosService.getProdutos(id)
    if (!departamentoExiste) {
      res.status(404).send({ message: 'departamento não existe' })
    } else {
      if (existeProdutosNoDepartamento) {
        res.status(400).send({ message: 'existem produtos cadastrados nesse departamento, não é possivel deleta-lo' })
      } else {
        await departamentosService.deletaDepto(id);
        res.status(200).send({ message: 'departamento deletado' })
      }
    }
  }


}