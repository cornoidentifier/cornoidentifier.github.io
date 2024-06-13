const nome = document.getElementById("nome");
const resposta = document.getElementById("resposta");
const lista = ["será corno", "é corno", "ainda não é corno. Ainda", "talvez seja corno", "não é corno", "muito provavelmente será corno", "não é corno, apesar de parecer"];
let index;

function analisar() {

  index = Math.floor(Math.random() * 5)

  if (nome.value.toLowerCase().includes("felipe") || nome.value.toLowerCase().includes("logan")) {
    resposta.textContent = `${nome.value} é incorneável`;
  }

  else if (nome.value.toLowerCase().includes("josh")) {
    resposta.textContent = `${nome.value} é corno`;
  }

  else if (nome.value === "") {
    resposta.textContent = "Digite algo primeiro, seu corno"
  }

  else {
    resposta.textContent = `${nome.value} ${lista[index]}`;
  }

}
