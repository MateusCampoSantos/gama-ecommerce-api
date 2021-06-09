export const checaProduto = (produto) => {
  const verificarProduto = (produto.hasOwnProperty('codProduto') 
  && produto.hasOwnProperty('descricao') 
  && produto.hasOwnProperty('preco') 
  && produto.hasOwnProperty('qtdProduto') 
  && produto.hasOwnProperty('disponivel') 
  && produto.hasOwnProperty('emDestaque') 
  && produto.hasOwnProperty('departamento'))

  if(verificarProduto){
    const verificarPreco = produto.preco <= 0
    const verificarDescricao = ((produto.descricao.length < 3) || (typeof produto.descricao !== "string"))
    const verificarCodigo = produto.codProduto <= 0

      if(verificarPreco){
          return false;
      }
      if (verificarDescricao){
          return false
      }
      if(verificarCodigo){
          return false
      }
      return produto
  }else{
      return false
  }
}