import { sum } from "../src/main";

test("Deve somar 2 + 2", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
})