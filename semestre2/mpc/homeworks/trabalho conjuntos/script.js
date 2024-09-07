let A = [1, 2, 3, 4, 5];
let B = [2, 4, 6, 8, 10];

let U = []; // U de união

let I = []; // I de intersecção

let DAB = []; // DAB de diferença A - B

let DBA = []; // DBA de diferença B - A

let DS = []; // DBA de diferença simétrica

let PA = [] // Conjunto das partes de A

// Adiciona todos os elementos de A em U
for (let i = 0; i < A.length; i++) {
    U.push(A[i]);
}

// Adiciona os elementos de B em U, se não estiverem já presentes
for (let i = 0; i < B.length; i++) {
    let encontrado = false;
    for (let j = 0; j < U.length; j++) {
        if (B[i] === U[j]) {
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        U.push(B[i]);
    }
}


//Intersecção
for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
        if (A[i] === B[j]) {
            I.push(A[i]);
            break;
        }
    }
}

// Adiciona os elementos de A que não estão em B
for (let i = 0; i < A.length; i++) {
    let encontrado = false;
    for (let j = 0; j < B.length; j++) {
        if (A[i] === B[j]) {
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        DAB.push(A[i]);
    }
}

// Adiciona os elementos de B que não estão em A
for (let i = 0; i < B.length; i++) {
    let encontrado = false;
    for (let j = 0; j < A.length; j++) {
        if (B[i] === A[j]) {
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        DBA.push(B[i]);
    }
}

// Diferença simétrica DS
// Adiciona os elementos de A que não estão em B
for (let i = 0; i < A.length; i++) {
    let encontrado = false;
    for (let j = 0; j < B.length; j++) {
        if (A[i] === B[j]) {
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        DS.push(A[i]);
    }
}
// Diferença simétrica DS
// Adiciona os elementos de B que não estão em A
for (let i = 0; i < B.length; i++) {
    let encontrado = false;
    for (let j = 0; j < A.length; j++) {
        if (B[i] === A[j]) {
            encontrado = true;
            break;
        }
    }
    if (!encontrado) {
        DS.push(B[i]);
    }
}

// Conjunto das partes de A
PA.push([]); // Adiciona o conjunto vazio

    for (let i = 0; i < A.length; i++) {
        let tamanhoAtual = PA.length;
        for (let j = 0; j < tamanhoAtual; j++) {
            let subconjunto = [];
            // Copia manualmente os elementos do subconjunto atual
            for (let k = 0; k < PA[j].length; k++) {
                subconjunto.push(PA[j][k]);
            }
            subconjunto.push(A[i]); // Adiciona o elemento atual de A
            PA.push(subconjunto); // Adiciona o novo subconjunto ao conjunto das partes
        }
    }

function imprimirConjuntosAB(){
    console.log(``);
    console.log(`Conjunto A: `);
    console.log(A);
    console.log(`Conjunto B: `);
    console.log(B);
}

imprimirConjuntosAB();
console.log(`Conjunto U ou União = `);
console.log(U);
console.log(`Tamanho do conjunto U = ${U.length}`);

imprimirConjuntosAB();
console.log(`Conjunto I ou Intersecção = `);
console.log(I);
console.log(`Tamanho do conjunto I = ${I.length}`);

imprimirConjuntosAB();
console.log(`Conjunto DAB ou diferença de A - B = `);
console.log(DAB);
console.log(`Tamanho do conjunto I = ${DAB.length}`);

imprimirConjuntosAB();
console.log(`Conjunto DAB ou diferença de B - A = `);
console.log(DBA);
console.log(`Tamanho do conjunto I = ${DBA.length}`);

imprimirConjuntosAB();
console.log(`Conjunto Diferença simétrica DS AB = `);
console.log(DS);
console.log(`Tamanho do conjunto I = ${DS.length}`);

imprimirConjuntosAB();
console.log(`Conjunto das partes de A, P(A) = `);
console.log(PA);
console.log(`Tamanho do conjunto P(A) = ${PA.length}`);
