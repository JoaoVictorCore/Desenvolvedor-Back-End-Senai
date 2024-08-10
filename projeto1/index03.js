const readline = require("readline-sync");

const somar = require("./somar");
const subtrair = require("./subtrair");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");

let continuar;

do {
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
      result = somar(numOne, numTwo);
      break;
    case "-":
      result = subtrair(numOne, numTwo);
      break;
    case "/":
      result = dividir(numOne, numTwo);
      break;
    case "*":
      result = multiplicar(numOne, numTwo);
      break;

    default:
      console.log("OPERAÇÃO INVALIDA!!");
      break;
  }

  console.log(`RESULTADO: ${result}`);

  let respostaUser = readline.question("Para continuar digite algo: \n");

  if (respostaUser == "") {
    continuar = false;
  } else {
    continuar = true;
  }
} while (continuar);
