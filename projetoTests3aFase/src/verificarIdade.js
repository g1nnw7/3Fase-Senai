export function verificarIdade(idade){
    if(typeof idade !== "number" || idade < 0){
        return "Erro"
    }
    if(idade >= 18) return "Maior"
    if(idade < 18) return "Menor"
}