// if = se
// else = se não

// if (condição) {
//   apenas será executado o bloco de código caso condição seja true
// } else {
//   apenas será executado o bloco de código caso condição do if seja false
// }

let temperature = 36.5;
if (temperature >= 37.5) {
  console.log("Febre alta");
} else if (temperature < 37.5 && temperature >= 37) {
  console.log("Febre moderada");
} else {
  console.log("Saudável");
}

// outra resolução:

// let temperature = 36.9
// let highTemperature = temperature >= 37.5
// let mediumTemperature = temperature < 37.5 && temperature >= 37

// if(highTemperature) {
//     console.log('Febre alta')
// } else if(mediumTemperature) {
//     console.log('Febre moderada')
// } else {
//     console.log('Saudável')
// }

/////////////////////////
// switch
// break encerra a execução
let expression = "a";

switch (expression) {
  case "a":
    console.log("a");
    break;
  case "b":
    console.log("b");
    break;
  default:
    console.log("default");
    break;
}

//////////////////////////
// throw
function sayMyName(name = "") {
  if (name === "") {
    throw new Error("Nome é necessário");
  }
  console.log("depois do erro");
}
// try tenta executar um bloco de código
// catch: se não conseguir
// sem isso, o erro dado é capaz de parar toda a execução do resto da função.
try {
  sayMyName("");
} catch (e) {
  console.log(e);
}
// O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch.
