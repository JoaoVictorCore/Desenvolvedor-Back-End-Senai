const readline = require('readline');

// Cria uma interface para ler as entradas do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler entrada do usuário
function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function calcularSalario() {
    // Solicita ao usuário o salário bruto
    const salarioBruto = parseFloat(await question('Digite o salário bruto: '));

    // Verifica se o número digitado pelo usuário é válido
    if (isNaN(salarioBruto) || salarioBruto <= 0) {
        console.log('Salário bruto inválido.');
        rl.close();
        return;
    }

    // Calcula o desconto do INSS
    let descontoINSS = 0;
    if (salarioBruto <= 1412.00) {
        descontoINSS = salarioBruto * 0.075;
    } else if (salarioBruto <= 2666.68) {
        descontoINSS = salarioBruto * 0.09 - 130.04; // Calculado conforme a tabela
    } else if (salarioBruto <= 4000.03) {
        descontoINSS = salarioBruto * 0.12 - 272.14; // Calculado conforme a tabela
    } else {
        descontoINSS = salarioBruto * 0.14 - 613.36; // Calculado conforme a tabela
    }

    // Calcula o desconto do IR
    let descontoIR = 0;
    if (salarioBruto <= 2259.20) {
        descontoIR = 0; // Até esse limite é isento
    } else if (salarioBruto <= 2826.65) {
        descontoIR = salarioBruto * 0.075 - 142.80;
    } else if (salarioBruto <= 3751.05) {
        descontoIR = salarioBruto * 0.15 - 354.80;
    } else if (salarioBruto <= 4664.68) {
        descontoIR = salarioBruto * 0.225 - 636.13;
    } else {
        descontoIR = salarioBruto * 0.275 - 869.36;
    }

    // Calcula o salário líquido
    const salarioLiquido = salarioBruto - descontoINSS - descontoIR;

    // Exibe os resultados
    console.log(`\nSalário Bruto: R$ ${salarioBruto.toFixed(2)}`);
    console.log(`Desconto INSS: R$ ${descontoINSS.toFixed(2)}`);
    console.log(`Desconto IR: R$ ${descontoIR.toFixed(2)}`);
    console.log(`Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`);

    rl.close();
}

// Inicia o cálculo
calcularSalario();
