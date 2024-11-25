class Pilha {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Underflow";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    printPilha() {
        return this.items.join(' ');
    }
}

function moverDiscos(discos, origem, destino, auxiliar) {
    if (discos === 1) {
        destino.push(origem.pop());
        imprimirEstado();
        return;
    }
    moverDiscos(discos - 1, origem, auxiliar, destino);
    destino.push(origem.pop());
    imprimirEstado();
    moverDiscos(discos - 1, auxiliar, destino, origem);
}

let passo = 0;

function imprimirEstado() {
    console.log(`Passo: ${passo}`);
    console.log("P1: " + p1.printPilha());
    console.log("P2: " + p2.printPilha());
    console.log("P3: " + p3.printPilha());
    passo++;
    console.log('---');
}

// Inicializa as pilhas
let p1 = new Pilha();
let p2 = new Pilha();
let p3 = new Pilha();

// Carrega P1 com os discos (3, 2, 1)
function inicializarTorres(numDiscos) {
    p1 = new Pilha();
    p2 = new Pilha();
    p3 = new Pilha();
    for (let i = numDiscos; i > 0; i--) {
        p1.push(i);
    }
    imprimirEstado();
}

// Quantidade de discos (pode ser alterado conforme desejado)
const numDiscos = 3;

// Inicializa as torres com os discos
inicializarTorres(numDiscos);

// Resolve o problema da Torre de Hanoi
moverDiscos(numDiscos, p1, p3, p2);
