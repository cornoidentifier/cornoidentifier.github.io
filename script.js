const nome = document.getElementById("nome");
const resposta = document.getElementById("resposta");
let english = false;

let lista = ["será corno", "é corno", "ainda não é corno. Ainda", "talvez seja corno", "não é corno", "muito provavelmente será corno", "não é corno, apesar de parecer"];

function setLang(lang) {
  if (lang === 'pt') {
    changeLangToPortuguese();
  } else if (lang === 'en') {
    changeLang();
  }
}

function changeLang() {
  english = true;
  lista = ["will be a cuckold", "is a cuckold", "is not a cuckold yet. Yet", "maybe isn't a cuckold", "is not a cuckold", "will most likely be a cuckold", "is not a cuckold, despite looking like one"];
  document.getElementById("title").innerText = "Welcome to the cuckold identifier";
  document.getElementById("paragraph").innerText = "Type a name:";
  document.getElementById("verify").innerText = "Check";
}

function changeLangToPortuguese() {
  english = false;
  lista = ["será corno", "é corno", "ainda não é corno. Ainda", "talvez seja corno", "não é corno", "muito provavelmente será corno", "não é corno, apesar de parecer"];
  document.getElementById("title").innerText = "Bem-vindo ao detector de cornos";
  document.getElementById("paragraph").innerText = "Digite um nome:";
  document.getElementById("verify").innerText = "Verificar";
}

function analisar() {
  const primeiroNome = nome.value.trim().split(' ')[0].toLowerCase();
  let index = Math.floor(Math.random() * lista.length);

  if (nome.value === "") {
    resposta.textContent = english ? "Type something first, you cuckold" : "Digite algo primeiro, seu corno";
    return;
  }

  if (nome.value.toLowerCase().includes("felipe") || nome.value.toLowerCase().includes("logan")) {
    resposta.textContent = english ? `${nome.value} is uncuckable` : `${nome.value} é incorneável`;
  } else if (nome.value.toLowerCase().includes("josh")) {
    resposta.textContent = english ? `${nome.value} is a cuckold` : `${nome.value} é corno`;
  } else {
    resposta.textContent = `${nome.value} ${lista[index]}`;
  }
}
