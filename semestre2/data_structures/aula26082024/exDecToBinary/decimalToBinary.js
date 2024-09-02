class Stack {
    #count = 0;
    #items = [];

    // métodos de Stack
    push(element) {
        this.#items[this.#count] = element;
        this.#count++;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.#count--;
        return this.#items.pop();
    }

    isEmpty() {
        return this.#count === 0;
    }
    }

function decimalToBinary(decNumber) {

    console.log(`
    function decimalToBinary(decNumber) {
        const remStack = new Stack();
        let number = decNumber;
        let rem;
        let binaryString = '';
        while (number > 0)
    `);

    const remStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    while (number > 0) { // {1}
    
    console.log(`number = ${number}`);

    console.log(`rem = Math.floor(number % 2);`);

    rem = Math.floor(number % 2); // {2}
    console.log(`rem = ${rem}`);
    
    console.log(`remStack.push(rem);`);
    remStack.push(rem); // {3}
    
    number = Math.floor(number / 2); // {4}
    console.log(`number = Math.floor(number / 2): ${number}`);

    }
    while (!remStack.isEmpty()) { // {5}
    
    binaryString += remStack.pop().toString();
    console.log(`binaryString += remStack.pop().toString(); ${binaryString}`);
    }
    
    console.log(`binaryString: `);
    return binaryString;
    }

    // console.log(decimalToBinary(233)); // 11101001

    console.log(decimalToBinary(10)); // 1010
    
    // console.log(decimalToBinary(1000)); // 1111101000