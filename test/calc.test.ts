import { calc } from '../src/calc';

test("Deve calcular o valor da corrida normal", () => {
    const fare = calc([{ dist: 10, ds: new Date("2021-03-01t10:00:00") }])
    expect(fare).toBe(10);
})