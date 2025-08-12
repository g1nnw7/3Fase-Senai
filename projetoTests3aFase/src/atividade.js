// Essa função recebe um array e um indice, retornando o valor no
// indice especificado ou lançando um erro caso o indice seja inválido.

// exemplo: array = [1, 3, 5, 7, 8], indice = 3
// resultado esperado => 7
// return array[indice]

export function findIndex(array, index){
    if(!Array.isArray(array) || index < 0 || index > array.length){
        return "Erro"
    }
    else{
        return array[index]
    }
}
