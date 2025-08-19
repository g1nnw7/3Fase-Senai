export function somar(a, b){
    if(typeof a !== "number" || typeof b !== "number"){
        return "erro"
    }
    return a+b;
}
console.log(somar(10, 4))