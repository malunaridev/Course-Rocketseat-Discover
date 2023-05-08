// function hoisting

sayMyName()

function sayMyName () {
    console.log('Malu')
}

// usar const ou var não garante o hoisting.


// arrow function
const sayYourName = (name) => {
    console.log(name)
}

sayYourName('Malu')


// callback function
function sayNam(name) {
    console.log('Antes de executar')
    name()
    console.log('Depois de executar')
}

sayNam(
    () => {
        console.log('Estou em uma callback')
    }
)


// function constructor
// new: automaticamente cria um objeto
// this: se refere ao new.

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const Malu = new Person("Malu")
const Mario = new Person("Mario")
console.log(Malu)
console.log(Mario)
console.log(Malu.walk())
console.log(Mario.walk())

// Pode usar Date, Number, String
let date = new Date("2023-04-03")
console.log(date)

let numberExample = new String("Mario")
console.log(numberExample)