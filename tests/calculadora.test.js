const calculadora = require("../Model/calculadora.js");

test("2 + 2 deveria ser 4", () => {
  const resultado = calculadora.somar(2, 2);
  console.log(resultado);
});
