import { converterString } from "../src/converterString";

describe("converter string para numero", () => {
  test("converter um numero com aspas", () => {
    expect(converterString("55")).toBe(55);
  });

  test("converter um string qualquer gere erro", () => {
    expect(converterString("alex")).toBe("Erro");
  });

  test("converter um objeto qualquer gere erro", () => {
    expect(converterString({})).toBe("Erro");
  });

  test("converter um array qualquer gere erro", () => {
    expect(converterString([])).toBe("Erro");
  });

  test("converter um array qualquer gere erro", () => {
    expect(converterString(undefined)).toBe("Erro");
  });

  test("converter um array qualquer gere erro", () => {
    expect(converterString(null)).toBe("Erro");
  });
});
