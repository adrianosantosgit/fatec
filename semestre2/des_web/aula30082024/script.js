function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.mostrarInfo = function() {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    };
}

// Criando um novo objeto Pessoa
const pessoa1 = new Pessoa('Ana', 30);
pessoa1.mostrarInfo(); // Saída: Ana tem 30 anos.