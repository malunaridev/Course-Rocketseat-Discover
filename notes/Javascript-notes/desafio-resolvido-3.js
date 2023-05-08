// Crie uma função que receba uma string em Celsius ou fahrenheit e faça a transformação de uma unidade para outra.

// C = (F - 32) * 5/9
// F = C * 9/5 + 32

function conversionCelsius(temperature) {
  const temperatureCelsius = Number(temperature);
  const convertCelsius = (temperatureCelsius * 9) / 5 + 32;
  return console.log(
    `O grau ${temperature} informado em Celsius corresponde a ${convertCelsius} Fahrenheit.`
  );
}
conversionCelsius("53");

function conversionFahrenheit(temperature) {
  const temperatureFahrenheit = Number(temperature);
  const convertFahrenheit = ((temperatureFahrenheit - 32) * 5) / 9;
  return console.log(
    `O grau ${temperature} informado em Fahrenheit corresponde a ${convertFahrenheit.toFixed(
      2
    )} Celsius.`
  );
}
conversionFahrenheit("153");

///////////////////////////////

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  // fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado.");
  }

  // fluxo ideal, F => C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  let degreeSign = "C";

  if (celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = (celsius) => (celsius * 9) / 5 + 32;
    degreeSign = "F";
  }

  return formula(updatedDegree) + degreeSign;
}

try {
  console.log(transformDegree("10C"));
  console.log(transformDegree("50F"));
} catch (error) {
  console.log(error.message);
}
