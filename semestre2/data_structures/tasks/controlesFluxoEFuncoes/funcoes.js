function sayHello() {
    console.log('Hello! From sayHello() function');
    }

sayHello();

function output(text) {
    console.log(text + ' From output() function');
    }

output('Hello!');

function sum(num1, num2) {
    console.log(`A soma de ${num1} e ${num2} é:`);
    return num1 + num2;
    }

var result = sum(1, 2);
output(result); // a saída é 3
        