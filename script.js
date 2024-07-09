const nome = document.getElementById("nome");
const resposta = document.getElementById("resposta");
let english = false;
let lista = ["será corno", "é corno", "ainda não é corno. Ainda", "talvez seja corno", "não é corno", "muito provavelmente será corno", "não é corno, apesar de parecer"];
let index;

function changeLang(){
  english = true;
  lista = ["will be a cuckold", "is a cuckold", "is not a cuckold yet. Yet", "maybe isn't a cuckold", "is not a cuckold", "will most likely be a cuckold", "is not a cuckold, despite looking like one"];
  document.getElementById("title").innerText = "Welcome to the cuckold identifier";
  document.getElementById("paragraph").innerText = "Type a name:";
  document.getElementById("verify").innerText = "Check"
}

function analisar() {

  if(!english){
    index = Math.floor(Math.random() * lista.length)

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
  else{
    index = Math.floor(Math.random() * lista.length)

    if (nome.value.toLowerCase().includes("felipe") || nome.value.toLowerCase().includes("logan")) {
      resposta.textContent = `${nome.value} is uncuckable`;
    }

    else if (nome.value.toLowerCase().includes("josh")) {
      resposta.textContent = `${nome.value} is a cuckold`;
    }

    else if (nome.value === "") {
      resposta.textContent = "Type something first, you cuckold"
    }

    else {
      resposta.textContent = `${nome.value} ${lista[index]}`;
    }
  }

  

}
