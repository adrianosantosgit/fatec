import promptSync from 'prompt-sync';

const prompt = promptSync();

const valorInicial = Number(prompt("Informe o investimento incial: "))

const valorDesejado = valorInicial * 3

let aporte = Number(prompt("Informe o valor do aporte mensal: "))

const taxaDeRendimento = Number(prompt("Informe a taxa de rendimento: "))

let rendimento = 0

let valorTotal = valorInicial

let meses = 0

while (valorTotal < valorDesejado) {
    
    valorTotal = valorTotal * (1 + taxaDeRendimento) + aporte
    valorTotal = parseFloat(valorTotal).toFixed(2)
    console.log(`Valor total: ${valorTotal}`);
    
    meses = meses + 1
    console.log(`Meses: ${meses}`);

}

rendimento = valorTotal - valorInicial
rendimento = parseFloat(rendimento).toFixed(2)
console.log(`Rendimento: ${rendimento}`);
