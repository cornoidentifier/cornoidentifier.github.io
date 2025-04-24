const nome = document.getElementById("nome");
const resposta = document.getElementById("resposta");

let english = false;
let lista = [
  "será corno", "é corno", "ainda não é corno. Ainda", "talvez seja corno", 
  "não é corno", "muito provavelmente será corno", "não é corno, apesar de parecer"
];

const nomesFemininos = [
    "Abigail", "Adélia", "Adelia", "Adriana", "Agata", "Ágata", "Alana", "Alessandra", "Alice", "Alicia",
    "Alina", "Alícia", "Amabile", "Amábile", "Amalia", "Amália", "Amara", "Amelia", "Amélia", "Amora",
    "Ana", "Ana Beatriz", "Ana Clara", "Ana Júlia", "Ana Julia", "Ana Laura", "Ana Luíza", "Ana Luiza",
    "Ana Vitória", "Analu", "Anastácia", "Andreia", "Andrea", "Andréa", "Andrelise", "Angela", "Angelica",
    "Angélica", "Angelina", "Anésia", "Anesia", "Anita", "Antônia", "Antonella", "Antonieta", "Aparecida",
    "Aqua", "Arlete", "Arlinda", "Ariana", "Ariane", "Ariela", "Ariella", "Assunta", "Aurélia", "Aurea",
    "Áurea", "Aurora", "Aylla", "Ayla", "Barbara", "Bárbara", "Beatriz", "Bela", "Bel", "Benedita",
    "Bernadete", "Betina", "Bia", "Bianca", "Brenda", "Bruna", "Camila", "Carine", "Carla", "Carlota",
    "Carol", "Carolina", "Caroline", "Carmen", "Cármen", "Cassia", "Cássia", "Catarina", "Cecilia",
    "Cecília", "Celina", "Célia", "Celia", "Cintia", "Cíntia", "Clarice", "Clarissa", "Clara", "Claudia",
    "Cláudia", "Cléa", "Clea", "Cleo", "Cléo", "Cristiane", "Cristina", "Daiane", "Dalila", "Dana",
    "Daniele", "Daniela", "Danielly", "Dandara", "Darlene", "Débora", "Debora", "Diana", "Duda", "Dulce",
    "Eduarda", "Elaine", "Eliane", "Eloá", "Eloa", "Elisa", "Elis", "Emanuelle", "Emilly", "Ester",
    "Estela", "Esther", "Eva", "Evelyn", "Fabiana", "Fabiane", "Fabiola", "Fabíola", "Fernanda", "Flavia",
    "Flávia", "Franciele", "Francisca", "Gabriela", "Gabrielle", "Gabriella", "Geovana", "Geovanna", "Giane",
    "Giovana", "Giovanna", "Gisele", "Glauce", "Glaucia", "Gláucia", "Gleice", "Graziele", "Graziella", "Graziela",
    "Greice", "Heloísa", "Heloisa", "Helena", "Iara", "Iasmin", "Iasmim", "Ines", "Inês", "Ingrid", "Irene",
    "Iris", "Isabel", "Isabela", "Isabelle", "Isadora", "Isis", "Ivana", "Ivone", "Jacqueline", "Jamile",
    "Janaina", "Janaína", "Janete", "Jéssica", "Jessica", "Joana", "Joice", "Josiane", "Juju", "Júlia",
    "Julia", "Juliana", "Karina", "Karine", "Karen", "Karol", "Karolina", "Karla", "Kátia", "Katia", "Katya",
    "Kelly", "Kyara", "Lais", "Laís", "Lana", "Lara", "Larissa", "Laura", "Leila", "Lelê", "Lê", "Leticia",
    "Letícia", "Lia", "Lilian", "Lígia", "Ligia", "Livia", "Lívia", "Liz", "Lorena", "Lourdes", "Lucelia",
    "Lucélia", "Luciana", "Lucilene", "Lucia", "Lúcia", "Lú", "Luana", "Luna", "Luisa", "Luísa", "Maíra",
    "Maira", "Manuela", "Marcela", "Marcia", "Márcia", "Maria", "Maria Alice", "Maria Clara", "Maria Cecília",
    "Maria Eduarda", "Mariana", "Marilda", "Marilia", "Marília", "Marina", "Maristela", "Marta", "Maura",
    "Melissa", "Michele", "Milena", "Miriam", "Míriam", "Monica", "Mônica", "Marianna", "Mariane", "Marianne",
    "Natália", "Natalia", "Neide", "Neusa", "Nicole", "Nina", "Noemi", "Odete", "Olivia", "Olívia", "Paloma",
    "Pamela", "Pâmela", "Patricia", "Patrícia", "Paula", "Poliana", "Priscila", "Raissa", "Raíssa", "Raquel",
    "Rafaela", "Regina", "Renata", "Rebeca", "Rita", "Roberta", "Rosana", "Rosangela", "Rosângela", "Roseli",
    "Rosa", "Sabrina", "Samara", "Sandra", "Sara", "Selma", "Sheila", "Silvia", "Sílvia", "Simone", "Sofia",
    "Sophia", "Solange", "Sonya", "Sônia", "Stella", "Sueli", "Suzana", "Talita", "Tainá", "Taina", "Tatiana",
    "Tatiane", "Tania", "Tânia", "Thacielle", "Thais", "Thaís", "Tereza", "Valeria", "Valéria", "Vanessa",
    "Vera", "Veronica", "Verônica", "Victoria", "Victória", "Vitoria", "Vitória", "Vilma", "Viviane", "Wilma",
    "Yara", "Yasmin", "Zélia", "Zelia", "Zenaide", "Zilda", "Zuleica", "Elise"
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
