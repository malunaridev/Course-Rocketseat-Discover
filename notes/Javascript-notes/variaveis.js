//  variáveis são nomes simbólicos para receber um valor
//  também funcionam como atalhos de códigos
//  são 3 palavras reservadas: const, let e var

var clima = "Quente"  // atribui um valor
clima = "Frio" // atribui um novo valor

console.log(typeof clima)



// scope: determina a visibilidade de uma variável
{
    let x = 0
    console.log(x)
}

// global: pode ser acessado por todo o código
// local: só dentro do escopo

// var: é global e local
// hoisting: o JS entra no escopo, diz que existe a variável, mas retorna undefined.

// const e let: local


// declarar:
var name
// declarar e atribuir valor
var name = "Malu"
// descobrir o tipo de dado
console.log(typeof name)
// agrupamento de declarações
let age, isHuman
age = 27
isHuman = true
console.log(name, age, isHuman)
// concatenação
console.log('A ' + name + ' tem ' + age + ' anos.')
// interpolação com template literals
console.log(`A ${name} tem ${age} anos.`)


// objeto
const person = {
    name: 'Malu',
    age: 27,
    weight: 65.7,
    isStudent: true
}
console.log(`${person.name} tem ${person.age} anos.`)


// array
const animals = [
    'Lion',
    'Monkey',
    'Cat',
    {
        name: 'Horse',
        age: 2
    }
]
// começa do 0
console.log(animals[0])
// mostra a quantidade
console.log(animals.length)
// acessa o objeto
console.log(animals[3])
// acessa propriedade do objeto
console.log(animals[3].name)
