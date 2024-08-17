const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para ler a entrada do usuário
function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function calcularMedia() {
    // Solicita o nome da disciplina
    const disciplina = await question('Digite o nome da disciplina: ');

    // Solicita o número de notas
    const numNotas = parseInt(await question('Quantas notas você deseja adicionar? '), 10);

    // Verifica se o número de notas é um número válido
    if (isNaN(numNotas) || numNotas <= 0) {
        console.log('Número de notas inválido.');
        rl.close();
        return;
    }

    // Coleta as notas
    let notas = [];
    for (let i = 0; i < numNotas; i++) {
        const nota = parseFloat(await question(`Digite a nota ${i + 1}: `));
        
        if (isNaN(nota) || nota < 0 || nota > 10) {
            console.log('Nota inválida. Deve ser um número entre 0 e 10.');
            i--; // Repetir a solicitação da mesma nota
        } else {
            notas.push(nota);
        }
    }

    // Calcula a média
    const soma = notas.reduce((acc, cur) => acc + cur, 0);
    const media = soma / notas.length;

    // Exibe o resultado
    console.log(`\nDisciplina: ${disciplina}`);
    console.log(`Notas: ${notas.join(', ')}`);
    console.log(`Média: ${media.toFixed(2)}`);

    // Fecha a interface de leitura
    rl.close();
}

// Inicia o cálculo
calcularMedia();
