function desafio(numeros) {
    const resultado = []
    for (let i = 0; i < numeros.length; i++) {
        let numero = 1;
        for (let j = 0; j < numeros.length; j++) {
            if (i !== j) {
                numero *= numeros[j];
            }
        }
        resultado.push(numero)
    }
    return resultado;
}
console.log(desafio([5,6,7,8,9]))