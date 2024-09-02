const avgTemp = [];

avgTemp[0] = 1.50;
avgTemp[1] = 1.60;
avgTemp[2] = 1.40;
avgTemp[3] = 1.70;
avgTemp[4] = 1.30;
avgTemp[5] = 1.50;
avgTemp[6] = 9;


console.log(`Nº temperaturas lidas: ${avgTemp.length}`);
console.log(avgTemp);

let daysOfWeek = [];

    let diasDaSemana = [['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],['Novo dia']];

// for (let i = 0; i < diasDaSemana.length; i++) {
//     console.log(diasDaSemana[i]);
    
// }
console.log(`Tamanho do array: ${diasDaSemana.length}`);

diasDaSemana.push('Feriado');

diasDaSemana.unshift('New Year');

console.log(`Tamanho do array: ${diasDaSemana.length}`);

let junto = diasDaSemana.join(' - ');
 console.log(junto);


 let numbers = [0,1,2,3,4,5,6,7,8,9,10];

 console.log(numbers);

 let printNumbers = numbers.join(' - ');

 console.log('Último elemento do array: ' + numbers.pop());

 console.log(printNumbers);


// Exibindo todos os valores armazenados no array
console.log(diasDaSemana);


class Stack {
    constructor() {
    this.items = []; // {1}
    }
    push(element) {
        this.items.push(element);
        }   

    pop() {
        return this.items.pop();
        }   
                
    peek() {
        return this.items[this.items.length - 1];
        }

    isEmpty() {
        return this.items.length === 0;
        }
            
    size() {
        return this.items.length;
        }

    clear() {
        this.items = [];
        }
            
    }

let lifo = new Stack;

lifo.push('Passo 1');
lifo.push('Passo 2');
lifo.push('Passo 3');

console.log(lifo);

console.log('Último item da pilha: ' + lifo.peek());

console.log(`Tamanho do array: ${lifo.size()}`);

