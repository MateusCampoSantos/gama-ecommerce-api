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
npm install express nodemon sucrase swagger-jsdoc swagger-ui-express
```

Execute o projeto

```bash
npm start
```

</p>

## Routes
### GET - Lista todos os produtos
> URL http://localhost:3333/produtos

### GET - Busca o produto espesífico pelo ID
> URL http://localhost:3333/produto/:id

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