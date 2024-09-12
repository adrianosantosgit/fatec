// Criar e popular a matriz 5xn
let matriz = [];
n = 5
for (let i = 0; i < n; i++) {
    matriz[i] = [];
    for (let j = 0; j < n; j++) {
        matriz[i][j] = i * n + j + 1; // Populando com números
    }
}

// Exibir a matriz no terminal
console.log(`Matriz quadrada de ${n} x ${n} completa:`);
for (let i = 0; i < n; i++) {
    let linha = '';
    for (let j = 0; j < n; j++) {
        linha += matriz[i][j] + '\t'; // Usando tabulação para separar os números
    }
    console.log(linha);
}

// Exibir a matriz diagonal principal
console.log("Diagonal principal:");
let diagonal = [];
for (let i = 0; i < n; i++) {
    diagonal.push(matriz[i][i]);
}
console.log(diagonal.join('\t'));

// Exibir a matriz diagonal secundára
console.log("Diagonal secundária:");
let diagonalSecundaria = [];
for (let i = 0; i < n; i++) {
    diagonalSecundaria.push(matriz[i][n - 1 - i]);
}
console.log(diagonalSecundaria.join('\t'));

// Exibir a matriz triangular superior
console.log("Matriz triangular superior:");
let matrizTriangularSuperior = [];
for (let i = 0; i < n; i++) {
    let linha = [];
    for (let j = 0; j < n; j++) {
        if (i > j) {
            linha.push(' ');
        } else {
            linha.push(matriz[i][j]);
        }
    }
    matrizTriangularSuperior.push(linha);
}
for (let i = 0; i < n; i++) {
    console.log(matrizTriangularSuperior[i].join('\t'));
}

console.log("Matriz triangular superior (sem diagonal principal):");
let matrizTriangularSuperiorSemDiagPrinc = [];
for (let i = 0; i < n; i++) {
    let linha = [];
    for (let j = 0; j < n; j++) {
        if (i >= j) {
            linha.push(' ');
        } else {
            linha.push(matriz[i][j]);
        }
    }
    matrizTriangularSuperiorSemDiagPrinc.push(linha);
}
for (let i = 0; i < n; i++) {
    console.log(matrizTriangularSuperiorSemDiagPrinc[i].join('\t'));
}

console.log("Matriz triangular inferior:");
let matrizTriangularInferior = [];
for (let i = 0; i < n; i++) {
    let linha = [];
    for (let j = 0; j < n; j++) {
        if (i < j) {
            linha.push(' ');
        } else {
            linha.push(matriz[i][j]);
        }
    }
    matrizTriangularInferior.push(linha);
}
for (let i = 0; i < n; i++) {
    console.log(matrizTriangularInferior[i].join('\t'));
}

console.log("Matriz triangular inferior (sem diagonal principal):");
let matrizTriangularInferiorSemDiagPrinc = [];
for (let i = 0; i < n; i++) {
    let linha = [];
    for (let j = 0; j < n; j++) {
        if (i <= j) {
            linha.push(' ');
        } else {
            linha.push(matriz[i][j]);
        }
    }
    matrizTriangularInferiorSemDiagPrinc.push(linha);
}
for (let i = 0; i < n; i++) {
    console.log(matrizTriangularInferiorSemDiagPrinc[i].join('\t'));
}