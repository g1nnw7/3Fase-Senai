import { findIndex } from "../src/atividade";

const array = [
    21, 22, 23, 24
]
describe("Buscar índice dentro do array", () =>{
    test("Validar se no index 0 o valor é 21", ()=>{
        expect(findIndex(array, 0)).toBe(21);
    })
    test("Validar se no index 2 o valor é 22", ()=>{
        expect(findIndex(array, 1)).toBe(22);
    })
    test("Validar se no index 2 o valor é 23", ()=>{
        expect(findIndex(array, 2)).toBe(23);
    })
    test("Validar se no index 3 o valor é 24", ()=>{
        expect(findIndex(array, 3)).toBe(24);
    })
})