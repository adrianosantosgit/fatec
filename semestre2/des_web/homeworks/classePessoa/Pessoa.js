// Trabalhando com classe
// Você deverá criar uma classe Pessoa que representará uma pessoa no sistema. A classe deverá conter os seguintes atributos e métodos:
// Requisitos:
// Atributos:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// email (string): Email da pessoa.
// Construtor:
// O construtor da classe deve receber os valores iniciais para os atributos nome, idade e email e inicializá-los.
// Métodos:
// apresentar(): Esse método deve retornar uma string com a apresentação da pessoa no seguinte formato: 
// "Olá, meu nome é [nome], tenho [idade] anos e meu email é [email]."

class Pessoa {
    constructor(nome, idade, email){
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }

    apresentar(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}`
    }
}

// // Exemplo de uso:
const pessoa1 = new Pessoa("João", 30, "joao@example.com");
console.log(pessoa1.apresentar()); // "Olá, meu nome é João, tenho 30 anos e meu email é joao@example.com."
