const nome = document.getElementById("nome");
const resposta = document.getElementById("resposta");

let english = false;
let lista = [
  "será corno", "é corno", "ainda não é corno. Ainda", "talvez seja corno", 
  "não é corno", "muito provavelmente será corno", "não é corno, apesar de parecer"
];

const nomesFemininos = ["ana", "maria", "joana", "luana", "camila", "beatriz", "patricia", "fernanda"]; // Exemplo de nomes femininos

// Função para remover acentos (normalizar a comparação)
function removeAcento(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Função para mudar o idioma
function setLang(lang) {
  if (lang === 'pt') {
    changeLangToPortuguese();
  } else if (lang === 'en') {
    changeLang();
  }
}

// Função para alterar o idioma para inglês
function changeLang() {
  english = true;
  lista = [
    "will be a cuckold", "is a cuckold", "is not a cuckold yet. Yet", 
    "maybe isn't a cuckold", "is not a cuckold", "will most likely be a cuckold", 
    "is not a cuckold, despite looking like one"
  ];
  document.getElementById("title").innerText = "Welcome to the cuckold identifier";
  document.getElementById("paragraph").innerText = "Type a name:";
  document.getElementById("verify").innerText = "Check";
}

// Função para alterar o idioma para português
function changeLangToPortuguese() {
  english = false;
  lista = [
    "será corno", "é corno", "ainda não é corno. Ainda", "talvez seja corno", 
    "não é corno", "muito provavelmente será corno", "não é corno, apesar de parecer"
  ];
  document.getElementById("title").innerText = "Bem-vindo ao detector de cornos";
  document.getElementById("paragraph").innerText = "Digite um nome:";
  document.getElementById("verify").innerText = "Verificar";
}

// Função para analisar o nome e retornar a resposta
function analisar() {
  const nomeDigitado = nome.value.trim();
  const nomeLower = nomeDigitado.toLowerCase(); // Nome em minúsculas para comparação
  let index = Math.floor(Math.random() * lista.length);

  if (!nomeDigitado) {
    resposta.textContent = english ? "Type something first, you cuckold" : "Digite algo primeiro, seu corno";
    return;
  }

  // Verificação para nomes específicos (Felipe, Logan, Josh)
  if (nomeLower.includes("felipe") || nomeLower.includes("logan")) {
    resposta.textContent = english ? `${nomeDigitado} is uncuckable` : `${nomeDigitado} é incorneável`;
  } else if (nomeLower.includes("josh")) {
    resposta.textContent = english ? `${nomeDigitado} is a cuckold` : `${nomeDigitado} é corno`;
  } else {
    // Verificação se algum nome feminino está presente
    const nomeSemAcento = removeAcento(nomeLower);
    const nomeFemininoEncontrado = nomesFemininos.some(nome => nomeSemAcento.includes(nome));

    // Substitui "corno" por "corna" se nome feminino for encontrado
    let resultado = `${nomeDigitado} ${lista[index]}`;
    if (nomeFemininoEncontrado) {
      resultado = resultado.replace("corno", "corna");
    }

    resposta.textContent = resultado;
  }
}
