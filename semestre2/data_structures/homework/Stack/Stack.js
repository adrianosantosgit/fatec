class Stack {
    constructor() {
        this.items = [];
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

const stack = new Stack();

process.stdout.write('Pilha vazia? '); console.log(stack.isEmpty());

stack.push(5);
stack.push(8);

process.stdout.write('Elemento do topo da pilha: '); console.log(stack.peek());

stack.push(11);
process.stdout.write('Tamanho da pilha: '); console.log(stack.size());
process.stdout.write('Pilha vazia? '); console.log(stack.isEmpty());

stack.push(15);

stack.pop();
stack.pop();

process.stdout.write('Tamanho da pilha: '); console.log(stack.size());

