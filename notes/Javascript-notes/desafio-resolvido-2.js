// Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
//     * receitas: [] 
//     * despesas: []

// Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.

let renda = {
    receitas: [
        4000, 
        1000, 
        500,
    ],
    despesas: [
        7000, 
        400, 
        20, 
        411,
    ]
}
const receita = (renda.receitas[0] + renda.receitas[1] + renda.receitas[2])
const despesa = (renda.despesas[0] + renda.despesas[1] + renda.despesas[2] + renda.despesas[3])
const total = receita - despesa

function sistemaMonetario() {
 if (despesa < receita) {
    console.log(`Parabéns, sua família está em saldo positivo, com R$${total}.`) 
    return}
 if (despesa > receita) {
    console.log(`Infelizmente, sua família está em saldo negativo, com R$${total}.`) 
    return }
}

sistemaMonetario()


///////////////////////////

let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450]
}

function sum(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }
    return total
}

function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negativo"

    if(itsOk) {
        balanceText = "positivo"
    }

console.log(`Seu saldo é ${balanceText}: R$${total}`)
}

calculateBalance()