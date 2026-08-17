function contarLetra(texto, letra) {
    let quantidade = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === letra) {
            quantidade++;
        }
    }

    return quantidade;
}

console.log(contarLetra("banana", "a"));