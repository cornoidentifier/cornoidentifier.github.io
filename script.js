const nome = document.getElementById("nome");
const resposta = document.getElementById("resposta");

let english = false;
let lista = [
  "será corno", "é corno", "ainda não é corno. Ainda", "talvez seja corno", 
  "não é corno", "muito provavelmente será corno", "não é corno, apesar de parecer"
];

const nomesFemininos = [
    "Aline", "Amanda", "Ana", "Beatriz", "Bianca", "Bruna", "Camila", "Carolina", "Clara", "Clarissa",
    "Cíntia", "Cintia", "Cristina", "Daniela", "Débora", "Debora", "Denise", "Eduarda", "Eliane", "Elisa", 
    "Fabiana", "Fernanda", "Flávia", "Flavia", "Gabriela", "Geovana", "Glaucia", "Graziela", "Helena", 
    "Ingrid", "Isabel", "Jéssica", "Jessica", "Juliana", "Karina", "Larissa", "Laura", "Letícia", "Leticia", 
    "Luana", "Luana", "Luísa", "Luisa", "Manuela", "Marcela", "Mariana", "Marta", "Melissa", "Michele", 
    "Monique", "Natália", "Natalia", "Nicole", "Noemi", "Patrícia", "Patricia", "Paula", "Priscila", 
    "Rafaela", "Renata", "Roberta", "Sabrina", "Samara", "Sandra", "Sílvia", "Silvia", "Simone", "Talita", 
    "Tatiane", "Thaís", "Thais", "Vanessa", "Vitória", "Vitoria", "Yasmin", "Adriana", "Alessandra", 
    "Amélia", "Amelia", "Ana Clara", "Ana Clara", "Andreia", "Angela", "Anita", "Aparecida", "Ariane", 
    "Bianca", "Bruna", "Camila", "Carla", "Cecília", "Cecilia", "Dalila", "Daniele", "Diana", "Elisa", 
    "Fabíola", "Fabiola", "Fátima", "Fatima", "Flávia", "Flavia", "Gabrielle", "Gisele", "Giovana", 
    "Graziele", "Helena", "Isabela", "Ivana", "Janaína", "Janaina", "Jéssica", "Joana", "Karine", "Kátia", 
    "Katya", "Laís", "Lais", "Letícia", "Leticia", "Lívia", "Livia", "Lorena", "Luciana", "Luísa", "Luisa", 
    "Lúcia", "Lucia", "Manuela", "Maria", "Marília", "Marilia", "Marina", "Marta", "Michele", "Milena", 
    "Mônica", "Monica", "Natália", "Natalia", "Nicole", "Priscila", "Raquel", "Renata", "Rita", "Roberta", 
    "Sabrina", "Sílvia", "Silvia", "Simone", "Sônia", "Sonya", "Talita", "Tatiane", "Tereza", "Valéria", 
    "Valeria", "Vanessa", "Verônica", "Veronica", "Vera", "Vitória", "Yasmin", "Zélia", "Zelia", "Abigail", 
    "Adélia", "Adelia", "Amália", "Amalia", "Andréa", "Andrea", "Anésia", "Anesia", "Angélica", "Angelica", 
    "Antonieta", "Ariane", "Aurora", "Bernadete", "Carolina", "Catarina", "Cecília", "Cristina", "Célia", 
    "Celia", "Dalila", "Daniele", "Débora", "Debora", "Eloá", "Eloa", "Eliane", "Érica", "Erica", "Fabiola", 
    "Fernanda", "Giane", "Greice", "Helena", "Inês", "Ines", "Ivana", "Janaína", "Janaina", "Joana", 
    "Karine", "Lana", "Laura", "Lívia", "Livia", "Luciana", "Luana", "Luísa", "Lúcia", "Manuela", "Mariana", 
    "Maristela", "Marta", "Michele", "Milena", "Mônica", "Monica", "Patrícia", "Raquel", "Rafaela", "Renata", 
    "Rita", "Sabrina", "Sílvia", "Simone", "Sônia", "Talita", "Tatiane", "Thaís", "Valéria", "Vanessa", 
    "Verônica", "Vera", "Vitória", "Yasmin", "Zilda", "Andrelise"
];

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
  document.getElementById("credit").innerText = "Created by Felipe Godoy";
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
  document.getElementById("credit").innerText = "Criado por Felipe Godoy";
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
    // Verificação se o nome digitado corresponde a um nome feminino
    const nomeSemAcento = removeAcento(nomeLower); // Remover acentos
    const nomeFemininoEncontrado = nomesFemininos.some(nome => removeAcento(nome.toLowerCase()) === nomeSemAcento);

    // Substitui "corno" por "corna" se nome feminino for encontrado
    let resultado = `${nomeDigitado} ${lista[index]}`;
    if (nomeFemininoEncontrado) {
      resultado = resultado.replace("corno", "corna");
    }

    resposta.textContent = resultado;
  }
}
