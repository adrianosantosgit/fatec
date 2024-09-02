"use strict";
// npm i prompt-sync
// npm i -D @types/prompt-sync
// npm i -D typescript
// npx tsc --init
// npx tsc
;
const aluno = {
    nome: "Nome do aluno",
    mediaFinal: 9,
    situacao: "aprovado"
};
console.log(aluno.nome);
function alunoFactory(nome, mediaFinal) {
    let situacao = 'reprovado';
    if (mediaFinal >= 6) {
        situacao = 'aprovado';
    }
}
