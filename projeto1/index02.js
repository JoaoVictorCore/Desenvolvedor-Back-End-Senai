const readline = require("readline-sync");

let numOne = readline.questionFloat("Digite um número 1: \n");
let numTwo = readline.questionFloat("Digite um número 2: \n");

let operacao = readline.question(
  "Digite uma das seguintes opereções: + para somar; - para subtrair; * para multiplicar ; / para dividir: \n"
);

while (
  operacao !== "+" &&
  operacao !== "-" &&
  operacao !== "/" &&
  operacao !== "*"
) {
  operacao = readline.question(
    "OPERAÇÃO INVALIDA\n Digite uma das seguintes opereções: + para somar; - para subtrair; * para multiplicar ; / para dividir: \n"
  );
}

let result = 0;

switch (operacao) {
  case "+":
    result = numOne + numTwo;
    break;
  case "-":
    result = numOne - numTwo;
    break;
  case "/":
    result = numOne / numTwo;
    break;
  case "*":
    result = numOne * numTwo;
    break;

  default:
    console.log("OPERAÇÃO INVALIDA!!");
    break;
}

result = parseFloat(result.toFixed(2));
// apresenta apenas duas casas decimais

console.log(`RESULTADO: ${result}`);
