class Queue {
    constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
    }

    // Método para adicionar elementos à fila
    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }
    dequeue(){
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }    
    size(){
        return this.count - this.lowestCount;
    }
    isEmpty() {
        return this.size() === 0;
    }
    toString(){
        if (this.isEmpty()) {
            return "";
        }
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
            
        }
        return objString;
    }
    // Método para visualizar o primeiro elemento da fila
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    // Método para inverter os elementos da fila
    reverse() {
        let stack = [];
        while (!this.isEmpty()) {
            stack.push(this.dequeue());
        }
        while (stack.length > 0) {
            this.enqueue(stack.pop());
        }
    }
}

let fila = new Queue();
console.log(fila.isEmpty());

fila.enqueue('Jack');
fila.enqueue('John');

console.log(fila.toString());

fila.enqueue('Camila');

console.log(fila.toString());

// Exercicio universidade Ouro Preto // escreva uma função que inverta a ordem dos elementos da fila
// A fila F já possui elementos
let F = new Queue;
console.log(F.isEmpty());
// Populando a fila com números de 1 a 10
for (let i = 1; i <= 10; i++) {
    F.enqueue(i);
}
console.log(F.toString());

// A fila P deve iniciar vazia, sem elementos e receber os elementos de F em ordem inversa
let P = new Queue;
console.log('P vazio? ' + P.isEmpty());
// Aplica a reversão do conjunto contido na fila F
F.reverse();
//Implementa enfileirar em P
P.enqueue(F);
console.log(P.toString());