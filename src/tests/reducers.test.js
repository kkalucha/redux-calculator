import calculator from "../store/reducers"
import * as constants from "../utils/constants"

test("reduce addition", () => {
    const initialState = {
        currentValue: "1",
        previousValue: 1,
        operator: constants.operators.ADD,
        storedValue: 56
    };
    const action = {type: constants.EVALUATE};
    const finalState = {
        currentValue: "2",
        previousValue: 0,
        operator: null,
        storedValue: 56
    };
    expect(calculator(initialState, action)).toEqual(finalState);
});

test("reduce storage", () => {
    const initialState = {
        currentValue: "15",
        previousValue: 1,
        operator: constants.operators.ADD,
        storedValue: 56
    };
    const action = {type: constants.M_ADD};
    const finalState = {
        currentValue: "15",
        previousValue: 1,
        operator: constants.operators.ADD,
        storedValue: 15
    };
    expect(calculator(initialState, action)).toEqual(finalState);
});

test("reduce recall", () => {
    const initialState = {
        currentValue: "15",
        previousValue: 1,
        operator: constants.operators.ADD,
        storedValue: 56
    };
    const action = {type: constants.MR};
    const finalState = {
        currentValue: "56",
        previousValue: 1,
        operator: constants.operators.ADD,
        storedValue: 56
    };
    expect(calculator(initialState, action)).toEqual(finalState);
});

test("reduce sqrt", () => {
    const initialState = {
        currentValue: "9",
        previousValue: 23,
        operator: constants.operators.DIVIDE,
        storedValue: 73
    };
    const action = {type: constants.SQRT};
    const finalState = {
        currentValue: "3",
        previousValue: 23,
        operator: constants.operators.DIVIDE,
        storedValue: 73
    };
    expect(calculator(initialState, action)).toEqual(finalState);
});

test("reduce clear", () => {
    const initialState = {
        currentValue: "15",
        previousValue: 1,
        operator: constants.operators.ADD,
        storedValue: 56
    };
    const action = {type: constants.CLEAR};
    const finalState = {
        currentValue: "0",
        previousValue: 0,
        operator: null,
        storedValue: 56
    };
    expect(calculator(initialState, action)).toEqual(finalState);
});
