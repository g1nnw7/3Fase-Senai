import { verificarIdade } from "../src/verificarIdade";

describe("Testar verificação de idade", ()=>{
    test("testar maior de idade", ()=>{
        expect(verificarIdade(18)).toBe("Maior")
    })

    test("testar menor de idade", ()=>{
        expect(verificarIdade(17)).toBe("Menor")
    })

    test("testar erro com array", ()=>{
        expect(verificarIdade([])).toBe("Erro")
    })

    test("testar erro com objeto", ()=>{
        expect(verificarIdade({})).toBe("Erro")
    })

    test("testar erro com objeto", ()=>{
        expect(verificarIdade(null)).toBe("Erro")
    })

    test("testar erro com objeto", ()=>{
        expect(verificarIdade(undefined)).toBe("Erro")
    })

    test("testar erro com objeto", ()=>{
        expect(verificarIdade(-2)).toBe("Erro")
    })
})