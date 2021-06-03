export const checaProduto = (produto) =>{
  const verificarProduto = (produto.hasOwnProperty('codProduto') && produto.hasOwnProperty('descricao') && produto.hasOwnProperty('preco') && produto.hasOwnProperty('qtdEstoque') && produto.hasOwnProperty('disponivel') && produto.hasOwnProperty('emDestaque') && produto.hasOwnProperty('departamento'))
  const verificarPreco = produto.preco <= 0
  const verificarDescricao = ((produto.descricao.length < 3) && (typeof produto.descricao !== "string"))

  if(verificarProduto){
      if(verificarPreco){
          return false;
      }
      if (verificarDescricao){
          return false
      }
      return produto
  }else{
      return false
  }
}