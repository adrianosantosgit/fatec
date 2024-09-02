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
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
            
        }
    }

    }

let fila = new Queue;

// Populando a fila com números de 1 a 20
for (let i = 1; i <= 10; i++) {
    fila.enqueue(i);
}

console.log(fila.items);

// Criando uma nova fila
let alfabeto = new Queue();

// Lista das palavras do alfabeto fonético em ordem alfabética
const alfabetoFonetico = [
    "", "Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel",     "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa",     "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey",     "X-ray", "Yankee", "Zulu"];
// const alfabetoFonetico = [
//     "", "Alfa"];

// Populando a fila com as palavras do alfabeto fonético
alfabetoFonetico.forEach(word => alfabeto.enqueue(word));

console.log(alfabeto.items);

// Criando uma nova fila
let nomes = new Queue();

// Lista de nomes masculinos e femininos em inglês americano
const nomesAlfabeticos = [
    "", "Alexander", "Benjamin", "Christopher", "Daniel", "Ethan", "Finn", "Gabriel", "Henry", "Isaac", "James", "Kevin", "Liam", "Michael", "Noah", "Oliver", "Patrick", "Quentin", "Ryan", "Samuel", "Thomas", "Uriel", "Victor", "William", "Xavier", "Yosef", "Zachary", "Amelia", "Bella", "Charlotte", "Daisy", "Emma", "Fiona", "Grace", "Hannah", "Isabella", "Julia", "Katherine", "Lily", "Mia", "Natalie", "Olivia", "Penelope", "Quinn", "Ruby", "Sophia", "Taylor", "Uma", "Victoria", "Willow", "Ximena", "Yara", "Zoe"];

// Populando a fila com os nomes
nomesAlfabeticos.forEach(nome => nomes.enqueue(nome));

console.log(nomes.items);

let vazia = new Queue;

vazia.dequeue();

nomes.toString();
