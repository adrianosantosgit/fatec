const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const { v4: uuidv4 } = require('uuid');

const arquivoDados = 'registros.json';

function lerRegistros() {
  if (fs.existsSync(arquivoDados)) {
    const dados = fs.readFileSync(arquivoDados);
    return JSON.parse(dados);
  } else {
    return [];
  }
}

let registros = lerRegistros();

function salvarRegistros() {
  fs.writeFileSync(arquivoDados, JSON.stringify(registros, null, 2));
}

function buscarRegistro(query) {
  return registros.filter(registro =>
    registro.nome.includes(query) || registro.cpf.includes(query)
  );
}

function adicionarRegistro(nome, cpf) {
  if (nome.length <= 255 && cpf.length === 11 && !isNaN(cpf)) {
    const novoRegistro = {
        id: uuidv4(), // Gera uma ID única para o registro
        nome,
        cpf
      };
    registros.push({ novoRegistro });
    salvarRegistros();
    console.log('Registro adicionado com sucesso! ID:', novoRegistro.id);
  } else {
    console.log('Erro: Nome deve ter até 255 caracteres e CPF deve ter 11 dígitos.');
  }
}

function alterarRegistro(nomeAntigo, nomeNovo, cpfNovo) {
  const registroIndex = registros.findIndex(registro => registro.nome === nomeAntigo);
  if (registroIndex !== -1) {
    registros[registroIndex] = { nome: nomeNovo, cpf: cpfNovo };
    salvarRegistros();
    console.log('Registro alterado com sucesso!');
  } else {
    console.log('Registro não encontrado.');
  }
}

function iniciar() {
  rl.question('Digite 1 para adicionar, 2 para buscar ou 3 para alterar um registro: ', opcao => {
    if (opcao === '1') {
      rl.question('Digite o NOME (até 255 caracteres): ', nome => {
        rl.question('Digite o CPF (11 dígitos): ', cpf => {
          adicionarRegistro(nome, cpf);
          iniciar(); // Recomeça o processo
        });
      });
    } else if (opcao === '2') {
      rl.question('Digite o NOME ou CPF para buscar: ', query => {
        const resultados = buscarRegistro(query);
        console.log('Registros encontrados:');
        resultados.forEach(registro => console.log(`Nome: ${registro.nome}, CPF: ${registro.cpf}`));
        iniciar(); // Recomeça o processo
      });
    } else if (opcao === '3') {
        rl.question('Digite o novo NOME (ou pressione Enter para manter o atual): ', nomeNovo => {
            rl.question('Digite o novo CPF (11 dígitos, ou pressione Enter para manter o atual): ', cpfNovo => {
              alterarRegistro(nomeAntigo, nomeNovo, cpfNovo);
              iniciar(); // Recomeça o processo
            });
          });
    } else {
      console.log('Opção inválida.');
      iniciar(); // Recomeça o processo
    }
  });
}

iniciar();

