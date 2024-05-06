const fs = require('fs');
const crypto = require('crypto');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para gerar ID única
function gerarIdUnico() {
  return crypto.randomBytes(16).toString('hex');
}

// Função para adicionar um novo registro
function adicionarRegistro(nome, local, quantidade) {
  const novoRegistro = {
    id: gerarIdUnico(),
    nome: nome.substring(0, 50),
    local: local.substring(0, 100),
    quantidade: Math.min(99, quantidade)
  };

  let registros = lerRegistros();
  registros.push(novoRegistro);
  salvarRegistros(registros);
  console.log('Registro adicionado com sucesso!');
}

// Função para buscar registros
function buscarRegistro(query) {
  let registros = lerRegistros();
  return registros.filter(registro =>
    registro.nome.includes(query) ||
    registro.local.includes(query) ||
    registro.id.includes(query)
  );
}

// Função para alterar um registro
function alterarRegistro(id, nome, local, quantidade) {
  let registros = lerRegistros();
  const index = registros.findIndex(registro => registro.id === id);
  if (index !== -1) {
    registros[index] = {
      ...registros[index],
      nome: nome || registros[index].nome,
      local: local || registros[index].local,
      quantidade: quantidade !== undefined ? Math.min(99, quantidade) : registros[index].quantidade
    };
    salvarRegistros(registros);
    console.log('Registro alterado com sucesso!');
  } else {
    console.log('Registro não encontrado.');
  }
}

// Função para ler registros do arquivo
function lerRegistros() {
    if (!fs.existsSync('registros.json')) {
      return [];
    }
    const dados = fs.readFileSync('registros.json', 'utf8');
    if (dados.trim().length === 0) {
      return [];
    }
    try {
      return JSON.parse(dados);
    } catch (e) {
      console.error('Erro ao analisar registros.json:', e);
      return [];
    }
  }
  

// Função para salvar registros no arquivo
function salvarRegistros(registros) {
  fs.writeFileSync('registros.json', JSON.stringify(registros, null, 2));
}

// Função para exibir o menu de opções
function exibirMenu() {
  console.log('\nEscolha uma opção:');
  console.log('1. Adicionar Registro');
  console.log('2. Buscar Registro');
  console.log('3. Alterar Registro');
  console.log('4. Sair\n');
  let registros = lerRegistros();
  console.log(`Atualmente existem ${registros.length} registros armazenados.\n`);
}

// Função para processar o comando do usuário
function iniciarPrograma() {
  exibirMenu();
  rl.question('Digite o número da opção desejada: ', (opcao) => {
    if (opcao === '1') {
        rl.question('Digite o NOME (até 50 caracteres): ', (nome) => {
          rl.question('Digite o LOCAL (até 100 caracteres): ', (local) => {
            rl.question('Digite a QUANTIDADE (valor inteiro de até 2 dígitos): ', (quantidade) => {
              adicionarRegistro(nome, local, parseInt(quantidade));
              iniciarPrograma();
            });
          });
        });
        ;
    } else if (opcao === '2') {
            rl.question('Digite parte do NOME, LOCAL ou ID para buscar: ', (query) => {
          const resultados = buscarRegistro(query);
          console.log('Registros encontrados:', resultados);
          iniciarPrograma();
        });
        ;
    } else if (opcao === '3') {
        rl.question('Digite o ID do registro a ser alterado: ', (id) => {
          rl.question('Digite o novo NOME (pressione enter para manter o atual): ', (nome) => {
            rl.question('Digite o novo LOCAL (pressione enter para manter o atual): ', (local) => {
              rl.question('Digite a nova QUANTIDADE (pressione enter para manter a atual): ', (quantidade) => {
                alterarRegistro(id, nome, local, quantidade ? parseInt(quantidade) : undefined);
                iniciarPrograma();
              });
            });
          });
        });
        ;
    } else if (opcao === '4') {
        console.log('Saindo do programa...');
        rl.close();
        ;
    
    } else {
        console.log('Opção inválida. Tente novamente.');
        iniciarPrograma();
    }
  });
}

// Iniciar o programa
iniciarPrograma();

// const express = require('express');
// const app = express();
// const port = 3000;

// // Middleware para analisar JSON no corpo das requisições
// app.use(express.json());

// // Rota para adicionar um registro
// app.post('/adicionar', (req, res) => {
//   const { nome, local, quantidade } = req.body;
//   adicionarRegistro(nome, local, quantidade);
//   res.send('Registro adicionado com sucesso!');
// });

// // Rota para buscar registros
// app.get('/buscar', (req, res) => {
//   const { query } = req.query;
//   const resultados = buscarRegistro(query);
//   res.json(resultados);
// });

// // Rota para alterar um registro
// app.put('/alterar/:id', (req, res) => {
//   const { id } = req.params;
//   const { nome, local, quantidade } = req.body;
//   alterarRegistro(id, nome, local, quantidade);
//   res.send('Registro alterado com sucesso!');
// });

// // Iniciar o servidor
// app.listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });


