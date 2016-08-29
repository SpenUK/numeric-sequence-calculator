import {
	CALCULATOR_INPUT_UPDATE,
	CALCULATE_SEQUENCES,
} from './actiontypes'

export function calculateSequences () {
	return {
		type: CALCULATE_SEQUENCES
	}
}

export function inputUpdate (value) {
	return {
		type: CALCULATOR_INPUT_UPDATE,
		value
	}
}