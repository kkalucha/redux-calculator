import { calculate } from "../utils/calculate";
import * as constants from "../utils/constants";

const initialState = {
	currentValue: "0",
	operator: null,
	previousValue: 0,
	storedValue: 0
};

export default function calculator( state = initialState, action ) {
	switch ( action.type ) {
		case constants.ENTER_NUM:
            return {
                currentValue: state.currentValue === "0" ? action.number.toString() : state.currentValue + action.number.toString(),
                operator: state.operator,
				previousValue: state.previousValue,
				storedValue: state.storedValue
            };
		case constants.SET_OP:
			return {
			    currentValue: "0",
				operator: action.operator,
				previousValue: state.operator == null ? parseFloat( state.currentValue ) : state.previousValue,
				storedValue: state.storedValue
			};
		case constants.PERCENTAGE:
            return {
                currentValue: (parseFloat(state.currentValue) / 100).toString(),
                operator: state.operator,
				previousValue: state.previousValue,
				storedValue: state.storedValue
            };
		case constants.CLEAR:
			return {
				currentValue: "0",
				operator: null,
				previousValue: 0,
				storedValue: state.storedValue
			};
		case constants.EVALUATE:
			return {
				currentValue: calculate( parseFloat( state.currentValue ), state.previousValue, state.operator ).toString(),
				operator: null,
				previousValue: 0,
				storedValue: state.storedValue
			};
		case constants.TOGGLE_NEG:
            return {
                currentValue: (-1 * parseFloat(state.currentValue)).toString(),
                operator: state.operator,
				previousValue: state.previousValue,
				storedValue: state.storedValue
            };
        case constants.SQRT:
            return {
                currentValue: (parseFloat(state.currentValue) ** .5).toString(),
                operator: state.operator,
				previousValue: state.previousValue,
				storedValue: state.storedValue
			};
		case constants.LOG:
			return {
				currentValue: (Math.log(parseFloat(state.currentValue))).toString(),
				operator: state.operator,
				previousValue: state.previousValue,
				storedValue: state.storedValue
			};
		case constants.M_ADD:
			return {
				currentValue: state.currentValue,
				operator: state.operator,
				previousValue: state.previousValue,
				storedValue: parseFloat(state.currentValue)
			};
		case constants.MR:
			return {
				currentValue: state.storedValue.toString(),
				operator: state.operator,
				previousValue: state.previousValue,
				storedValue: state.storedValue
			}
		default:
			return state;
	}
}