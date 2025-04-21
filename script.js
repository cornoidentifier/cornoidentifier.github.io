const nome = document.getElementById("nome");
const resposta = document.getElementById("resposta");
const credit = document.getElementById("credit");
let english = false;

const nomesFemininos = [
  "ana", "maria", "beatriz", "julia", "carla", "amanda", "mariana",
  "larissa", "fernanda", "bruna", "aline", "isabela", "sofia",
  "laura", "patricia", "natalia", "jessica", "juliana", "luana", "valentina"
];

let listaPt = [
  "será corno(a)",
  "é corno(a)",
  "ainda não é corno(a). Ainda",
  "talvez seja corno(a)",
  "não é corno(a)",
  "muito provavelmente será corno(a)",
  "não é corno(a), apesar de parecer"
];

let listaEn = [
  "will be a cuckold",
  "is a cuckold",
  "is not a cuckold yet. Yet",
  "maybe isn't a cuckold",
  "is not a cuckold",
  "will most likely be a cuckold",
  "is not a cuckold, despite looking like one"
];

let lista = [...listaPt];

function setLang(lang) {
  english = lang === "en";

  if (english) {
    lista = [...listaEn];
    document.getElementById("title").innerText = "Welcome to the cuckold identifier";
    document.getElementById("paragraph").innerText = "Type a name:";
    document.getElementById("verify").innerText = "Check";
    credit.innerText = "Created by Phil Godoy";
  } else {
    lista = [...listaPt];
    document.getElementById("title").innerText = "Bem-vindo ao detector de cornos";
    document.getElementById("paragraph").innerText = "Digite um nome:";
    document.getElementById("verify").innerText = "Verificar";
    credit.innerText = "Criado por Felipe Godoy";
  }
}

function analisar() {
  const valor = nome.value.trim();
  const lower = valor.toLowerCase();
  const index = Math.floor(Math.random() * lista.length);

  const isFeminino = !english && (
    nomesFemininos.includes(lower) ||
    lower.endsWith("a") ||
    lower.endsWith("e")
  );

  if (valor === "") {
    resposta.textContent = english
      ? "Type something first, you cuckold"
      : "Digite algo primeiro, seu corno";
    return;
  }

  if (lower.includes("felipe") || lower.includes("logan")) {
    resposta.textContent = english
      ? `${valor} is uncuckable`
      : `${valor} é incorneável`;
    return;
  }

  if (lower.includes("josh")) {
    resposta.textContent = english
      ? `${valor} is a cuckold`
      : `${valor} é corno`;
    return;
  }

  let resultado = lista[index];

  if (!english && isFeminino) {
    resultado = resultado.replace(/corno\(a\)/g, "corna").replace(/corno/g, "corna");
  } else {
    resultado = resultado.replace(/\(a\)/g, "");
  }

  resposta.style.opacity = 0;
  setTimeout(() => {
    resposta.textContent = `${valor} ${resultado}`;
    resposta.style.opacity = 1;
  }, 150);
}

nome.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    analisar();
  }
});
