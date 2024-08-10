var nome = "Joao";
// variavel que vai armarzenar nome do usuario

let sobrenome = "Victor";
// variavel que vai armarzenar sobrenome do usuario

const nomeCompleto = nome + " " + sobrenome;
// variavel que vai juntar o nome e o sobrenome para dar o nome completo do usuario

console.log("Olá, seu nome é " + nomeCompleto);
// vai escrever na tela o nome completo do usuario

nome = "Yuri";

sobrenome = "Feio";

console.log(`Olá você é o ${nome} e é ${sobrenome}`);
//forma diferente de concatenação

let numeroUm = 7;
let numeroDois = 9;

function somar(numeroUm, numeroDois) {
  return numeroUm + numeroDois;
}

console.log(somar(numeroUm, numeroDois));
