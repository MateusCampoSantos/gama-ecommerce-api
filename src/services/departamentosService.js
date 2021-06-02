import { listaDepatamento, listaProdutos } from "../database/static";

export default class DepartamentosService {
  async getDepartamentos() {
    return listaDepatamento;
  }

  async getProdutos(id) {
    const prods = listaProdutos.filter(p => p.departamento == id);
    return prods
  }

  async getDepartamento(id) {
    const departamento = listaDepatamento.find(departamento => departamento.idDepto == id)
    return departamento
  }
}