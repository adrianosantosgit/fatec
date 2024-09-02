import promptSync from 'prompt-sync';

const prompt = promptSync();

// Função para converter Celsius para Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Recebe a temperatura em Celsius
const celsius = parseFloat(prompt('Digite a temperatura em Celsius: '));

// Verifica se a entrada é um número válido
if (!isNaN(celsius)) {
    const fahrenheit = celsiusParaFahrenheit(celsius);
    console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(1)}°F`);
} else {
    console.log('Por favor, insira um número válido.');
}
