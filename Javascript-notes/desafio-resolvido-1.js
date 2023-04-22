// Transformar notas escolares

// Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres do tipo A, B e C.

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

function Grade(nota) {
    if (nota < 60) {
        console.log("O aluno tirou nota F.")
    } else if (nota >= 60 && nota <= 69) {
        console.log("O aluno tirou nota D.")
    } else if (nota >= 70 && nota <= 79) {
        console.log("O aluno tirou nota C.")
    } else if (nota >= 80 && nota <= 89) {
        console.log("O aluno tirou nota B.")
    } else if (nota >= 90 && nota <= 100) {
        console.log("O aluno tirou nota A.")
    } else 
        console.log("Nota inválida.")
}

Grade(126)

//////////////////////////////////

function studentGrade (nota) {
    if (nota >= 101) {
        console.log("Esta nota é inválida.")
        return}
    if (nota >= 90) {
        console.log("O aluno tirou nota A.") 
        return}    
    if (nota >= 80) {
        console.log("O aluno tirou nota B.") 
        return}
    if (nota >= 70) {
        console.log("O aluno tirou nota C.")
        return}
    if (nota >= 60) {
        console.log("O aluno tirou nota D.")
        return}
    if (nota <= 59) {
        console.log("O aluno tirou nota F")
        return}
    }

    studentGrade(101)

//////////////////////////////////

let notas = 90

function getScore(notas) {
let notaA = notas >= 90 && notas <= 100
let notaB = notas >= 80 && notas <= 89
let notaC = notas >= 70 && notas <= 79
let notaD = notas >= 60 && notas <= 69
let notaF = notas < 60 && notas >= 0

let notafinal

if (notaA) {
    notafinal = "nota A"
} else if (notaB) {
    notafinal = "nota B"
} else if (notaC) {
    notafinal = "nota C"
} else if (notaD) {
    notafinal = "nota D"
} else if (notaF) {
    notafinal = "nota F"
} else {
    notafinal = "nota inválida."
}

console.log (`O aluno tirou ${notafinal}`)
}

getScore(101)
getScore(87)