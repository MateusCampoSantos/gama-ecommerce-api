<div align="center">
<img src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-1-logo-png-transparent.png">
<img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png">
</div>
<h1 align="center">Gama Ecommerce API</h1>
<div align="center">
    <img alt="GitHub contagem de linguagens" src="https://img.shields.io/github/languages/count/MateusCampoSantos/gama-ecommerce-api">
    <img alt="Tamanho do repositório" src="https://img.shields.io/github/languages/code-size/MateusCampoSantos/gama-ecommerce-api">
    <img alt="GitHub forks" src="https://img.shields.io/github/forks/MateusCampoSantos/gama-ecommerce-api">
    <img alt="GitHub contribuidores" src="https://img.shields.io/github/contributors/MateusCampoSantos/gama-ecommerce-api">
    <img alt="GitHub último commit" src="https://img.shields.io/github/last-commit/MateusCampoSantos/gama-ecommerce-api">
</div><br>

<h1 align="center">
Sobre
</h1>
<p> Este projeto, tem como objetivo desevenvolver uma REST API para um e-commerce fictício, realizado durante o Gama Experience #37, afim de aplicar os conhecimentos adquiridos sobre arquitetura REST dentro de uma API. Os métodos utilizados foram uma listagem dos produtos, busca por um produto especificando seu ID, criação e adição de um novo produto a listagem dos produtos, atualização de um produto existente, listagem de departamento e busca de um departamento especificando seu ID associando aos seus produtos.</p><br>

## Tecnologias


- [Node JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Swagger](https://swagger.io/)

## Como rodar o projeto

<p>
Faça o clone do repositório com o comando:

```bash
git clone https://github.com/MateusCampoSantos/gama-ecommerce-api 
```

Instale as dependências do projeto, usando o comando:

```bash
npm install
```

Execute o projeto

```bash
npm start
```

</p>

## Dependências

- express v4.17.1
- nodemon v2.0.7
- sucrase v3.18.1
- body-parser v1.19.0
- swagger-jsdoc v6.1.0
- swagger-ui-express v4.1.6

## Documentação

Acesse a documentação deste projeto:
> URL: http://localhost:3333/api-docs/

Deploy online do projeto:
> URL: https://gama-ecommerce-api-ntmu3.ondigitalocean.app/api-docs/


## Routes
### GET - Lista todos os produtos
> URL: http://localhost:3333/produtos

### GET - Busca o produto espesífico pelo ID
> URL: http://localhost:3333/produto/:id

Exemplo: 
> ID = 25754: http://localhost:3333/produto/25754

Resultado do exemplo:
```json
{
  "codProduto": 25754,
  "descricao": "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",
  "preco": 5,
  "qtdEstoque": 10,
  "disponivel": "sim",
  "emDestaque": "sim",
  "departamento": 1
}
```
Exemplo de erro 404:
> ID = 555: http://localhost:3333/produto/555

Resultado do exemplo de erro 404:
```json
{
  "message": "produto não encontrado"
}
```

### PUT - Alterando produto existente
> URL:http://localhost:3333/produto/:id

Exemplo:
> ID = 25754: http://localhost:3333/produto/25754

Request body:
```json
{
    "codProduto": 25754,
    "descricao": "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",
    "preco": 5.9,
    "qtdEstoque": 10,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 1
 }
```
Resultado do exemplo:
```json
{
    "codProduto": 25754,
    "descricao": "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",
    "preco": 5.9,
    "qtdEstoque": 10,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 1
 }
```

Exemplo de erro 400:
> Parametro divergente do exigido. Preço zerado.
```json
{
    "codProduto": 25754,
    "descricao": "ADAPTADOR BLUETOOH USB RECEPTOR DE AUDIO P2",
    "preco": 0,
    "qtdEstoque": 10,
    "disponivel": "sim",
    "emDestaque": "sim",
    "departamento": 1
 }
```
Resultado do exemplo de erro 400
```json
{
  "message": "estrutura/informações inválidas, consulte a documentação"
}
```

Exemplo de erro 404:
> Passando um ID não existente. ID = 555.

Resultado do exemplo de erro 404:
```json
{
  "message": "estrutura/informações inválidas, consulte a documentação"
}
```
### POST - Criando e adicionando um produto para a lista
> URL: http://localhost:3333/produtos

Exemplo:
```json
{
  "codProduto": 12901,
  "descricao": "Placa de Vídeo Asus NVIDIA GeForce TUF Gaming RTX 3070, O8G, GDDR6 - TUF-RTX3070-O8G-GAMING",
  "preco": 12499.90,
  "qtdEstoque": 15,
  "disponivel": "sim",
  "emDestaque": "nao",
  "departamento": 9
}
```

Resultado do exemplo:
```json
{
  "codProduto": 12901,
  "descricao": "Placa de Vídeo Asus NVIDIA GeForce TUF Gaming RTX 3070, O8G, GDDR6 - TUF-RTX3070-O8G-GAMING",
  "preco": 12499.90,
  "qtdEstoque": 15,
  "disponivel": "sim",
  "emDestaque": "nao",
  "departamento": 9
}
```

Exemplo de erro 400:
> Produto com preço faltando
```json
{
  "codProduto": 13456,
  "descricao": "Notebook Acer Aspire 3, Intel Core I3-1005G1, 4GB, 256GB SSD, 15.6´, Windows 10 Home - A315-56-330J",
  "preco": 0,
  "qtdEstoque": 4,
  "disponivel": "sim",
  "emDestaque": "sim",
  "departamento": 9
}
```

Resultado do exemplo de erro 400:
```json
{
  "message": "produto já existe ou estrutura/informações inválidas, consulte a documentação"
}
```

### GET - Lista todos os departamentos
> URL: http://localhost:3333/departamentos

### GET - Busca um departamento específico pelo ID
> URL: http://localhost:3333/departamento/:id

Exemplo:
> ID = 9: http://localhost:3333/departamento/9

Resultado do exemplo:
```json
[
  {
    "nomeDepto": "Informatica",
    "idDepto": 9,
    "produtos": [
      {
        "codProduto": 25678,
        "descricao": "DESKTOP ACER C24-963-UA91 I3-1005G1 1.2GHz/8GB/512GB SSD/23.8FHD IPS/W10/INGLES PRETO",
        "preco": 750,
        "qtdEstoque": 0,
        "disponivel": "nao",
        "emDestaque": "nao",
        "departamento": 9
      },
      {
        "codProduto": 27707,
        "descricao": "FONE C/ MICROFONE JBL C50HI PRETO",
        "preco": 7,
        "qtdEstoque": 29,
        "disponivel": "sim",
        "emDestaque": "sim",
        "departamento": 9
      }
    ]
  }
]
```

Exemplo de erro 404:
> ID = 555: http://localhost:3333/departamento/555

Resultado do exemplo de erro 404:
```json
{
  "message": "departamento não encontado"
}
```

## Contribuições

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/SuaFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Adicionando uma Feature!`)
5. Faça o Push da Branch (`git push origin feature/SuaFeature`)
6. Abra uma Pull Request

## Contatos

GitHub: [Felipe José](https://github.com/fej0se)

GitHub: [Lucas Miliante](https://github.com/LucasMiliante)

GitHub: [Mateus Campos](https://github.com/MateusCampoSantos)