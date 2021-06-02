export const checaProduto = (produto) => {
  if (produto.codProduto || produto.descricao || produto.preco || produto.qtdEstoque || produto.disponivel || produto.emDestaque || produto.departamento) {
    if (produto.preco <= 0) {
      return false;
    }
    if (produto.descricao.length < 15) {
      return false;
    }
    return produto

  } else {
    return false
  }
}