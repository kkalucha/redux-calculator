import { calculate } from "../utils/calculate";
import { operators } from "../utils/constants";

test("addition", () => {
	expect(calculate(1, 1, operators.ADD)).toBe(2);
	expect(calculate(57, 152, operators.ADD)).toBe(209);
});

test("subtraction", () => {
	expect(calculate(1, 2, operators.SUBTRACT)).toBe(1);
	expect(calculate(152, 57, operators.SUBTRACT)).toBe(-95);
});

test("multiplication", () => {
	expect(calculate(3, 2, operators.MULTIPLY)).toBe(6);
	expect(calculate(152, 57, operators.MULTIPLY)).toBe(8664);
});

test("division", () => {
	expect(calculate(1, 2, operators.DIVIDE)).toBe(2);
	expect(calculate(3, 1551, operators.DIVIDE)).toBe(517);
});

test("exponentiation", () => {
	expect(calculate(2, 2, operators.EXP)).toBe(4);
	expect(calculate(4, 57, operators.EXP)).toBe(10556001);
});