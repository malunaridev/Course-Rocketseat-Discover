// 1) declare uma variável de nome weight.
let weight


// 2) que tipo de dado é a variável acima?
console.log(typeof weight)
// undefined, porque nada foi declarado.


// 3) declare uma variável e atribua valores para cada um dos dados.
let name = "Malu"
let age = 27
let stars = 4.8
let isSubscribed = true


// 4) a variável student abaixo é de que tipo de dado?
// let student {}
let student = {}
console.log(typeof student)

// 4.1) atribua a ela as mesmas propriedades e valores do exercício 3.
let aStudent = {
    name:"Malu",
    age: 27,
    weight: 67.5,
    isSubscribed: true,
}
console.log(aStudent)

// 4.2) mostre no console a mensagem.
console.log(`A ${aStudent.name}, de ${aStudent.age} de idade, pesa ${aStudent.weight} quilos.`)


// 5) declare uma variável do tipo array, de nome students, e atribua a ela nenhum valor.
let students = []


// 6) reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4.
students = [
    aStudent
]
console.log(students)


// 7) coloque no console o valor da posição zero do array acima.
console.log(students[0])


// 8) crie um novo student e coloque na posição 1 do array students
let aStudent2 = {
    name:"Mario",
    age: 23,
    weight: 67.5,
    isSubscribed: true,
}

students[1] = aStudent2
console.log(students)


// 9) sem rodar o código, responda: qual é a resposta do código abaixo e por que? 
// console.log(a)
// var a = 1

// undefined, porque a variável só foi declarada na linha de código seguinte, mas o hoisting vai avisar ao código que ela existe antes de ter sido declarada, por ser uma variável do tipo var. No caso de let, isso não aconteceria, e um erro seria impresso no console.
console.log(a)
var a = 1