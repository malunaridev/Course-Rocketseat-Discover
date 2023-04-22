const element = document.querySelector("h1")

// adicionando ou manipulando o texto 
 element.textContent += "Olá, Devs!"

 // troca o texto interno
 element.innerText = "Olá, Devs!"

  // altera o conteúdo e pode receber HTML
 element.innerHTML = "Olá, Devs! <small>!!!</small>"



 /////////////////////////
 const element2 = document.querySelector("input")

 // funciona como o value do HTML
 element.value = "Valor que eu quiser"



///////////////////////// --- podem ser classes
const header = document.querySelector("header")

 // adiciona uma id
header.setAttribute("id", "header")

 // pega uma id
header.getAttribute("id")

 // remove uma id
 header.removeAttribute("id")



/////////////////////////
const element3 = document.querySelector("body")

// adiciona uma propriedade
element3.style.backgroundColor = "#ff0000"

// lista todas as classes
element3.classList

// adiciona uma classe
element3.classList.add("active", "green")

// remove uma classe
element3.classList.remove("active")

// remove uma classe se tiver, adiciona se não tiver
element3.classList.toggle("active")


/////////////////////////
// navegação pelos elementos
const body = document.querySelector("body")

// navegação pelo pais
body.parentNode

// navegação pelos filhos --- Nodelist (pega espaços vazios)
body.childNodes

// navegação pelos filhos  --- HTML Collection (não pega espaços vazios)
body.children

// pega a primeira linha (leva em consideração espaço vazio)
body.firstChild

// primeiro elemento após aquele
body.firstElementChild

// pega a última linha (leva em consideração espaço vazio)
body.lastChild

// último elemento antes daquele
body.lastElementChild

// pega o próximo elemento irmão após aquele (pega espaços vazios)
body.nextSibling

// pega o elemento irmão anterior daquele (pega espaços vazios)
body.previousSibling

// pega o próximo elemento irmão após aquele (não pega espaços vazios)
body.nextElementSibling

// pega o elemento irmão anterior daquele (não pega espaços vazios)
body.previousElementSibling

// criando elementos
body.createElement('div')

//adicionando elemento depois de tudo
body.append(div)

// adiciona elemento antes de tudo
body.prepend(div)

// adicionando um elemento antes de outro
// primeiro: o que vai ser adicionado
// segundo: elemento de referência
body.insertBefore(div, script)

// adicionando um elemento após outro
// truque
body.insertBefore(div, header.nextSibling)