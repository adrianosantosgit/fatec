// npm i prompt-sync
// npm i -D @types/prompt-sync
// npm i -D typescript
// npx tsc --init
// npx tsc

// import promptSync from 'prompt-sync';

// const prompt = promptSync();

type situacao = 'aprovado' | 'reprovado';

interface Aluno {
    nome: String,
    mediaFinal: number,
    situacao: situacao
};

const aluno: Aluno = {
    nome: "Nome do aluno",
    mediaFinal: 9,
    situacao: "aprovado"
}
console.log(aluno.nome);

function alunoFactory(nome:String, mediaFinal: number) {
    let situacao: situacao = 'reprovado'
    
    if (mediaFinal >= 6) {
        situacao = 'aprovado'
    } 
}