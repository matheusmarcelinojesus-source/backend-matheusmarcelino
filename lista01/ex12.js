function calcular(a, b, operacao) {
    return operacao(a, b);
}

let soma = calcular(10, 5, (a, b) => a + b);
let subtracao = calcular(10, 5, (a, b) => a - b);
let multiplicacao = calcular(10, 5, (a, b) => a * b);

console.log(`Soma: ${soma}`);
console.log(`Subtração: ${subtracao}`);
console.log(`Multiplicação: ${multiplicacao}`);