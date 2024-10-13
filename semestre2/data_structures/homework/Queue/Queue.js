class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }

    enqueue(element) {
        this.items[this.count] = element;
        this.count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    }

    isEmpty() {
        return this.count - this.lowestCount === 0;
    }

    size() {
        return this.count - this.lowestCount;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    tail() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[this.count - 1];
    }
    clear() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    toString() {
        if (this.isEmpty()) {
            return "Vazio";
        }
        console.log('\n\tPrinting Queue toString(): \n');
        let objString = `${this.items[this.lowestCount]}`;
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`;
        }
        // return objString;
        console.log(`\t${objString}\n`);
    }
}

let fila = new Queue();

process.stdout.write('Fila vazia? '); console.log(fila.isEmpty());

fila.enqueue(5);
console.log('Elemento adicionado a fila usando o método enqueue(): ');console.log(fila.tail());
fila.enqueue(3);
console.log('Elemento adicionado a fila usando o método enqueue(): ');console.log(fila.tail());
fila.enqueue(7);
console.log('Elemento adicionado a fila usando o método enqueue(): ');console.log(fila.tail());
fila.enqueue(2);
console.log('Elemento adicionado a fila usando o método enqueue(): ');console.log(fila.tail());

// process.stdout.write('Fila: '); console.log(fila);
fila.toString();

console.log('Removendo primeiro elemento usando o método dequeue(): '); console.log(fila.dequeue());
process.stdout.write('Primeiro elemento: '); console.log(fila.peek());
process.stdout.write('Fila: '); console.log(fila);

console.log('Removendo primeiro elemento usando o método dequeue(): '); console.log(fila.dequeue());
process.stdout.write('Primeiro elemento: '); console.log(fila.peek());
process.stdout.write('Fila: '); console.log(fila);

console.log('Removendo primeiro elemento usando o método dequeue(): '); console.log(fila.dequeue());
process.stdout.write('Primeiro elemento: '); console.log(fila.peek());
process.stdout.write('Fila: '); console.log(fila);

console.log('Removendo primeiro elemento usando o método dequeue(): '); console.log(fila.dequeue());
process.stdout.write('Primeiro elemento: '); console.log(fila.peek());
process.stdout.write('Fila: '); console.log(fila);

console.log('Limpando a fila usando o método clear()');
fila.clear();
process.stdout.write('Fila: '); console.log(fila);