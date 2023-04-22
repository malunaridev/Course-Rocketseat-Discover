// type conversion (typecasting) vs type coersion
// alteração de um tipo de dado para outro

console.log('9' + 5)
// o 5 vira string = type coersion

console.log(Number('9') + 5)
// manualmente faz a alteração = type conversion


// transforma string em número
let string = "123"
console.log(Number(string))
// transforma número em string
let number = 321
console.log(String(number))


// conta quantos caracteres ou dígitos
let word = "Paralelepipedo"
console.log(word.length)
// conta quantos dígitos (transforma em string)
let number2 = 1234
console.log(String(number2).length)


// transforma número quebrado em 2 casas decimais
let number3 = 2343243432.2423443
console.log(number.toFixed(2))
// trocar o ponto por vírgula
console.log(number.toFixed(2).replace(".", ","))


// transforma letras minúsculas e maiúsculas
let word2 = "Programar é Muito Legal!"
console.log(word2.toUpperCase())
console.log(word2.toLowerCase())


// extrair um segmento de uma array
let phrase = "Eu adoro leitura!"
let myArray = phrase.split(" ")
console.log(myArray)
// juntar os segmentos com alguma coisa
let phrase2 = myArray.join("_")
console.log(phrase2)
console.log(phrase2.toLowerCase())


// verificar se o texto tem alguma palavra
let frase = "Eu quero viver!"
console.log(frase.includes("Amor"))
let frase2 = "Eu quero viver o amor!"
console.log(frase2.includes("Amor")) //case sensitive
console.log(frase2.includes("amor")) 


// criar array com construtor
let array1 = new Array('a', 'b', 'c')
console.log(array1)
let array2 = new Array(10)
console.log(array2)


// contar elementos de uma array
console.log([
    'a', 
    {type: "array"}, 
    function() { return "Alo"},
].length)


// transformar caracteres em elementos de uma array
let palavra = "manipulação"
console.log(Array.from(palavra))


//manipulando arrays
let techs = ['html', 'css', 'js']
// adicionar um item no final da array
techs.push("nodejs")
// adicionar um item no começo da array
techs.unshift("sql")
// remover um item do fim
techs.pop()
// remover um item do começo
techs.shift()
// remover 1 ou mais itens de qualquer posição
techs.splice(1, 1)
// pegar alguns elementos da array
console.log(techs.slice(1, 2))


console.log(techs)

// descobrir a posição de um elemento
console.log(techs.indexOf("js"))


// 1: onde começa o corte
// 2: onde termina o corte






