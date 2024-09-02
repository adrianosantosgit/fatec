class Pilha {
    constructor() {
      this.itens = [];
    }
  
    // Adiciona um item à pilha
    push(elemento) {
      this.itens.push(elemento);
    }
  
    // Remove e retorna o item do topo da pilha
    pop() {
      if (this.isEmpty()) {
        return "A pilha está vazia";
      }
      return this.itens.pop();
    }
  
    // Retorna o item do topo da pilha sem removê-lo
    peek() {
      if (this.isEmpty()) {
        return "A pilha está vazia";
      }
      return this.itens[this.itens.length - 1];
    }
  
    // Verifica se a pilha está vazia
    isEmpty() {
      return this.itens.length === 0;
    }
  
    // Retorna o tamanho da pilha
    size() {
      return this.itens.length;
    }
  
    // Limpa a pilha
    clear() {
      this.itens = [];
    }
  }
  
  // Exemplo de uso
  const pilha = new Pilha();
  pilha.push(1);
  pilha.push(2);
  console.log(pilha.peek()); // 2
  console.log(pilha.pop());  // 2
  console.log(pilha.size()); // 1

  console.log(pilha.clear());
  console.log(pilha.isEmpty());
  