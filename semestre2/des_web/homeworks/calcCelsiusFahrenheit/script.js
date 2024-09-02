document.getElementById('celsius').addEventListener('input', function() {
    let celsius = parseFloat(this.value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('resultado').textContent = `Temperatura em Fahrenheit: ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('resultado').textContent = 'Campo de temperatura vazio';
    }
});
