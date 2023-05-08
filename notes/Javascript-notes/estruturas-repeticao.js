/////////////////////////
// for

// primeiro valor: uma variável inicial
// segundo valor: uma condição de continuação para ele
// terceiro valor: expressão ao final do loop

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }

// encerrando em determinado ponto:
// if (i === 5) {
//     break;
// }

// pulando uma execução do momento:
// if (i === 5) {
//     continue;
// }



/////////////////////////
// while
let a = 1;
while (a < 10) {
    console.log(a)

    a++;
}
// }


/////////////////////////
// for... of
// cria um loop a partir de uma variável

let name = "Malu"
let names = ["Mario", "Massari"]

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}


///////////////////////////
// for... in
let person = {
    name: 'Malu',
    age: 27,
    weight: 67.5
}
for (let propriedade in person) {
    console.log(propriedade)
    console.log(person[propriedade])
}