import { executarOperacao } from '../src/operacoes';

describe('funcao executar', () => {
  test(`espero que a soma de dois 
    numeros inteiros esteja correta`, () => {
    expect(executarOperacao(1, 2, "somar")).toBe(3);
  });

  test(`espero que a soma de dois 
    numeros decimais esteja correta`, () => {
    expect(executarOperacao(1.5, 2.5, "somar")).toBe(4);
  });

  test(`espero que a soma de dois 
    numeros negativos esteja correta`, () => {
    expect(executarOperacao(-2, -3, "somar")).toBe(-5);
  });

  test(`espero que ao tentar executar letras
    retorne uma mensagem de erro`, () => {
    expect(executarOperacao("a", "b", "somar")).toBe("Erro");
  });

  test(`espero que ao tentar executar dois objetos
    retorne uma mensagem de erro`, () => {
    expect(executarOperacao({}, {}, "somar")).toBe("Erro");
  });

  test(`espero que ao tentar executar dois arrays
    retorne uma mensagem de erro`, () => {
    expect(executarOperacao([], [], "somar")).toBe("Erro");
  });

  test(`espero que ao tentar executar um array e um numero
    retorne uma mensagem de erro`, () => {
    expect(executarOperacao([], 10, "somar")).toBe("Erro");
  });
});

describe('funcao divisao', () => {
    test(`espero que a divisao de dois 
      numeros inteiros esteja correta`, () => {
      expect(executarOperacao(1, 2, "divisao")).toBe(0.5);
    });
  
    test(`espero que a divisao de dois 
      numeros decimais esteja correta`, () => {
      expect(executarOperacao(1.5, 2.5, "divisao")).toBe(0.6);
    });
  
    test(`espero que a divisao de dois 
      numeros negativos esteja correta`, () => {
      expect(executarOperacao(-2, -3, "divisao")).toBe(0.6666666666666666);
    });
  
    test(`espero que ao tentar dividir letras
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao("a", "b", "divisao")).toBe("Erro");
    });
  
    test(`espero que ao tentar dividir dois objetos
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao({}, {}, "divisao")).toBe("Erro");
    });
  
    test(`espero que ao tentar dividir dois arrays
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], [], "divisao")).toBe("Erro");
    });
  
    test(`espero que ao tentar dividir um array e um numero
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], 10, "divisao")).toBe("Erro");
    });
});

describe('funcao subtracao', () => {
    test(`espero que a subtracao de dois 
      numeros inteiros esteja correta`, () => {
      expect(executarOperacao(1, 2, "subtracao")).toBe(-1);
    });
  
    test(`espero que a subtracao de dois 
      numeros decimais esteja correta`, () => {
      expect(executarOperacao(1.5, 2.5, "subtracao")).toBe(-1);
    });
  
    test(`espero que a subtracao de dois 
      numeros negativos esteja correta`, () => {
      expect(executarOperacao(-2, -3, "subtracao")).toBe(1);
    });
  
    test(`espero que ao tentar subtrair letras
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao("a", "b", "subtracao")).toBe("Erro");
    });
  
    test(`espero que ao tentar subtrair dois objetos
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao({}, {}, "subtracao")).toBe("Erro");
    });
  
    test(`espero que ao tentar subtrair dois arrays
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], [], "subtracao")).toBe("Erro");
    });
  
    test(`espero que ao tentar subtrair um array e um numero
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], 10, "subtracao")).toBe("Erro");
    });
});

describe('funcao multiplicacao', () => {
    test(`espero que a multiplicacao de dois 
      numeros inteiros esteja correta`, () => {
      expect(executarOperacao(1, 2, "multiplicacao")).toBe(2);
    });
  
    test(`espero que a multiplicacao de dois 
      numeros decimais esteja correta`, () => {
      expect(executarOperacao(1.5, 2.5, "multiplicacao")).toBe(3.75);
    });
  
    test(`espero que a multiplicacao de dois 
      numeros negativos esteja correta`, () => {
      expect(executarOperacao(-2, -3, "multiplicacao")).toBe(6);
    });
  
    test(`espero que ao tentar multiplicar letras
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao("a", "b", "multiplicacao")).toBe("Erro");
    });
  
    test(`espero que ao tentar multiplicar dois objetos
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao({}, {}, "multiplicacao")).toBe("Erro");
    });
  
    test(`espero que ao tentar multiplicar dois arrays
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], [], "multiplicacao")).toBe("Erro");
    });
  
    test(`espero que ao tentar multiplicar um array e um numero
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], 10, "multiplicacao")).toBe("Erro");
    });
});

describe('funcao somar', () => {
    test(`espero que a soma de dois 
      numeros inteiros esteja correta`, () => {
      expect(executarOperacao(1, 2, "somar")).toBe(3);
    });
  
    test(`espero que a soma de dois 
      numeros decimais esteja correta`, () => {
      expect(executarOperacao(1.5, 2.5, "somar")).toBe(4);
    });
  
    test(`espero que a soma de dois 
      numeros negativos esteja correta`, () => {
      expect(executarOperacao(-2, -3, "somar")).toBe(-5);
    });
  
    test(`espero que ao tentar somar letras
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao("a", "b", "somar")).toBe("Erro");
    });
  
    test(`espero que ao tentar somar dois objetos
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao({}, {}, "somar")).toBe("Erro");
    });
  
    test(`espero que ao tentar somar dois arrays
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], [], "somar")).toBe("Erro");
    });
  
    test(`espero que ao tentar somar um array e um numero
      retorne uma mensagem de erro`, () => {
      expect(executarOperacao([], 10, "somar")).toBe("Erro");
    });
});