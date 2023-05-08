// criar um aplicativo com frases motivacionais

// declaração da função
function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}

// execução da função
// execute, run, call, invoke function
createPhrases()


// função anônima ou function expression
const sum1 = function(number1, number2){
    console.log(number1 + number2)
}
sum1(2, 3)  // number1 e number2: parâmetros
            // 2 e 3: argumentos


const sum3 = function(number1, number2){
    total = number1 + number2
    return total
}

let number1 = 34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum3(number1, number2)}`)


