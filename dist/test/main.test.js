"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("../src/main");
test("Deve somar 2 + 2", () => {
    const result = (0, main_1.sum)(2, 2);
    expect(result).toBe(4);
});
