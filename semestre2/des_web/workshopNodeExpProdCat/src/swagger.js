import swaggerAutogen from 'swagger-autogen'

const doc = {
    info: {
        version: "1.0.0",
        title: "Minha API",
        description: "API de exemplo - FATEC DSM"
    },
    servers: [
        {
            url: 'http://localhost:3000'
        }
    ],
    definitions: {
      AddOrUpdateProduto: {
        nome: "Nome do produto no swagger", descricao: "Descricao do produto no swagger", preco: 99.90
      },
      AddOrUpdateCategoria: {
        nome: "Nova categoria no swagger", userId: 1
      }
    }
  }

const outputFile = './swagger-output.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFiles, doc)