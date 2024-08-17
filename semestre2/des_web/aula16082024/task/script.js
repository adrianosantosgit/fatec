import promptSync from 'prompt-sync';

const prompt = promptSync();

/*
Crie um código com Node que escreva a tabuada de um número digitado pelo usuário.

A tabuada deve ser apresentada no console como:
1X2=2
2X2=4
*/

let tabuadaDesejada = Number(prompt("Informe a tabuada desejada: "))

let multiplosDesejados = Number(prompt("Informe até quantos multiplos deseja, ou ENTER para tabuada padrão, por exemplo 10 para receber a tabuada desejada até 10x:\n"))

if (multiplosDesejados === 0) {
    multiplosDesejados = 10
}

for (let i = 1; i <= multiplosDesejados; i++) {
    console.log(`${tabuadaDesejada}X${i}=${tabuadaDesejada*i}`);
}

console.log(`Tabuada solicitada foi: Tabuada do ${tabuadaDesejada}`);
console.log(`Multiplos informados: ${multiplosDesejados}`);
