
const log = document.getElementById("log")

const form = document.getElementById("contato")

form.addEventListener("submit", (event) => {
  event.preventDefault();

const email = document.getElementById("email").value;
const name = document.getElementById("name").value;
const mensagem = document.getElementById("mensagem").value;

log.innerText = JSON.stringify(Object.values( {name, email, mensagem}))

log.innerHTML

})