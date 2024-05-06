// Exemplo de função para inserir dados
function inserir() {
    const nome = document.getElementById('nome').value;
    const local = document.getElementById('local').value;
    const quantidade = document.getElementById('quantidade').value;
  
    // Aqui você adicionaria o código para inserir os dados no arquivo JSON
  }
  
  // Exemplo de função para buscar dados
  function buscar() {
    // Aqui você adicionaria o código para buscar os dados no arquivo JSON
  }
  
  // Exemplo de função para alterar dados
  function alterar() {
    // Aqui você adicionaria o código para alterar os dados no arquivo JSON
  }
  function exibir() {
    // Aqui você adicionaria o código para alterar os dados no arquivo JSON
    // Exemplo de código para ler dados do arquivo JSON usando fetch
    fetch('registros.json')
    .then(response => response.json())
    .then(data => console.log(data));

}  