function calc(value) {
    let celsius = parseFloat(value);
    if (!isNaN(celsius)) {
        let fahrenheit = (celsius * 9/5) + 32;
        console.log(`Temperatura em Fahrenheit: ${fahrenheit.toFixed(1)}°F`);
    } else {
        console.log('Campo de temperatura vazio');
    }
}

calc(1000)