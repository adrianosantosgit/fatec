/*
Para gerar um ID de tamanho personalizado no Node.js, você pode usar o módulo crypto que já vem embutido no Node.js, em vez de usar o módulo uuid. O módulo crypto permite gerar bytes aleatórios que você pode então formatar como desejar. Aqui está um exemplo de como você pode gerar um ID com um tamanho personalizado:
*/

const crypto = require('crypto');

function gerarIdPersonalizado(tamanho) {
  if (tamanho <= 0) {
    throw new Error('O tamanho deve ser um número positivo.');
  }
  return crypto.randomBytes(Math.ceil(tamanho / 2)).toString('hex').slice(0, tamanho);
}

// Exemplo de uso:
const meuId = gerarIdPersonalizado(12); // Gera um ID com 12 caracteres
console.log(meuId);
