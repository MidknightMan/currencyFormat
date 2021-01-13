import { currencyFormat } from "../currencyFormat";

describe("Currency Format Util Function", () => {
  it("returns a string", () => {
    const result = currencyFormat("");
    expect(typeof result === "string").toBe(true);
  });
  it("will return NaN for non-numeric character inputs", () => {
    const result = currencyFormat("ffs");
    expect(result).toBe("NaN");
  });
  it("will format numeric inputs to amounts with £ sign", () => {
    const result = currencyFormat("120");
    expect(result).toBe("£120.00");
  });
  it("will handle decimal place for numeric input", () => {
    const result = currencyFormat("69.69");
    expect(result).toBe("£69.69");
  });
  it("will handle comma decimal places", () => {
    const result = currencyFormat("1,08");
    expect(result).toBe("£1.08");
  });
  it("will handle large numbers and add the necessary separators", () => {
    const result = currencyFormat("12345.67");
    expect(result).toBe("£12,345.67");
  });
  it("will round up extra decimals", () => {
    const result = currencyFormat("1.0199");
    expect(result).toBe("£1.02");
  });
});