// expressão: qualquer linha de código que resolve alguma coisa no JavaScript
let number = 1;
// pode ou não terminar com ponto e vírgula
// precisa colocar apenas quando vier em seguida uma função autoexecutável
(function() {
    console.log('Alo')
})()


/////////////////////////
// operadores: fazem cálculos

// unário
// incremento de número
console.log(++number)
// decremento de número
console.log(--number)
// saber o tipo
console.log(typeof number)

// binário
console.log(number + 1)

// ternário
console.log(true ? "Alo" : "nada")


/////////////////////////
// new: left-hand-side expression
// serve pra criar um objeto
let name = new String("Malu")
name.surName = "Pinto"

let age = new Number (23)
console.log(name.surName, age)

let data = new Date('2023-10-31')
console.log(data)


/////////////////////////
// delete: deleta uma propriedade dentro de um objeto
const person = {
    name: "Malu",
    age: 25
}
console.log(person)
delete person.age
console.log(person)


/////////////////////////
// operadores aritméticos
// multiplicação
console.log(3.3 * 5)
// divisão
console.log(12 / 2)
// soma
console.log(43 + 12)
// subtração
console.log(30 - 15)
// resto da divisão
    let remainder
    remainder = 11 % 9
    console.log(remainder)
// incremento ++: adiciona mais um valor
let increment = 3
increment++ // incrementado depois
console.log(increment)
// decrement --: reduz um valor
let decrement = 0
decrement--
console.log(decrement)
// exponencial **
console.log (3 ** 3)


/////////////////////////
// grouping operator
let total = 2 + 3 * 5
console.log(total)
total = (2 + 3) * 5
console.log(total)


/////////////////////////
// operadores de comparação
let one = 1
let two = 2

// igual a
console.log(two == 1)
console.log(one == "1")
// diferente de
console.log(one != two)
console.log(one != 1)
console.log(one != "1")
// estritamente igual a (valor e tipo)
console.log(one === "1")
console.log(one === 1)
// estritamente diferente a 
console.log(two !== "2")
console.log(two !== 2)
// maior que
console.log(one > two)
// maior igual a
console.log(one >= 1)
console.log(two >= 1)
// menor que
console.log(one < two)
// menor igual a
console.log(one <= two)
console.log(two <= 1)
console.log(one <= 0)


/////////////////////////
// operadores de atribuição
x = 1
// addition assigment
x += 2
// x = x + 2
console.log(x)
// subtraction assigment
x -= 1
console.log(x)
// multiplication assigment
x *= 2
console.log(x)
// division assigment
x /= 2
console.log(x)
// remainder, exponentiation
x **= 2
console.log(x)


/////////////////////////
// operadores lógicos
// 2 valores booleanos, quando verificados, retorna true ou false
let pao = true
let queijo = true
// and && = os dois são verdadeiros
console.log(pao && queijo)
// OR || = pelo menos 1 verdadeiro
console.log(pao || queijo)
// NOT ! = nenhum é verdadeiro
console.log(!pao)


/////////////////////////
// operadores condicionais ternários
// dependendo da condição, recebemos valores diferentes
// ? = se sim
// : = se não

let mortadela = true
let requeijao = true

const niceBreakfast = mortadela && requeijao ? "Café top" : "Café ruim"
console.log(niceBreakfast)

let idade = 16
const canDrive = age >= 18 ? "Can drive" : "Cannot drive"
console.log(canDrive)


/////////////////////////
// operador de string
// comparação
console.log('a' == 'b')
// concatenação
console.log('a' + 'a')
let alpha = "alpha"
alpha += "bet"
console.log(alpha)


/////////////////////////
// falsy e truthy
// falsy = quando um valor é considerado false onde booleano é obrigatório (condicionais e loops)
// 0
// -0
// ""
// null
//undefined
// NaN
console.log (0 ? "verdadeiro" : "falso")

//truthy = quando um valor é considerado true onde um boleano é obrigatório (condicionais e loops)
// true
// {}
// []
// 1
// 3.23
// "0"
// "false"
// -1
// Infinity
// -Infinity
console.log (1 ? "verdadeiro" : "falso")


/////////////////////////
// precedência de operador
// grouping = ()
console.log((2 + 5) * 10)
// negação e incremento
// multiplicação e divisão
// adição e subtração            
// relacional                   
// igualdade                    
// AND                           
// OR                           
// condicional                   
// assignment (atribuição)