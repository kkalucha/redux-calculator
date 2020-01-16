import * as constants from "../utils/constants";

export function clear() {
	return { type: constants.CLEAR };
}

export function enterNum( number ) {
	return { number, type: constants.ENTER_NUM };
}

export function evaluate() {
	return { type: constants.EVALUATE };
}

export function percentage() {
	return { type: constants.PERCENTAGE };
}

export function setOp( operator ) {
	return { operator, type: constants.SET_OP };
}

export function toggleNeg() {
	return { type: constants.TOGGLE_NEG };
}

export function sqrt() {
	return { type: constants.SQRT };
}

export function log() {
	return { type: constants.LOG };
}

export function mAdd( number ) {
	return { number, type: constants.M_ADD};
}

export function MR() {
	return { type: constants.MR };
}