const prompt = require("prompt-sync")();

const secreto = 42;

let tentativas = 0;

while (true) {
    let numero = Number(prompt("Digite um número: "));

    tentativas++;

    if (numero === secreto) {
        console.log(`Parabéns! Você acertou em ${tentativas} tentativas.`);
        break;
    } else if (numero < secreto) {
        console.log("O número secreto é maior.");
    } else {
        console.log("O número secreto é menor.");
    }
}