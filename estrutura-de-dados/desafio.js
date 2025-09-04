function desafio(numeros){
    const resultado = []
    for(let i = 0; i < numeros.length; i++){
    let numero = 1;
    for(let j = 0; j < numeros.length; j++){
        if(i !== j){
        numero *= numeros[j];
        }
    }
resultado.push(numero)
 }
return resultado;
}
console.log(desafio([2,1,3,4]))