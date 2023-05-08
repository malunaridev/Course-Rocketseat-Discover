// capturar elemento pela id --- retorna um elemento
document.getElementById("id-aqui")

// capturar elemento pela classe --- retorna uma HTMLCollection
document.getElementsByClassName(".nome-da-classe-aqui")

// capturar elemento pelo nome da tag --- retorna uma HTMLCollection
document.getElementsByTagName("h1")

// capturar elemento pelo seletor (o primeiro que ele achar) --- retorna um elemento
document.querySelector("src")

// captura uma coleção de seletores (para id = #, para classe - .) --- retorna um NodeList
document.querySelectorAll("#one")