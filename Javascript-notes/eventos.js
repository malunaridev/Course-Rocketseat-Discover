const h1 = document.querySelector("h1")

h1.addEventListener("click", print)

function print() {
    console.log("print")
}

///////////// outra forma
h1.onclick = print
// o problema é que caso repita, os anteriores são sempre desconsiderados

////////////
// argumento event
input.onkeydown = function(event) {
    console.log(event)
}
