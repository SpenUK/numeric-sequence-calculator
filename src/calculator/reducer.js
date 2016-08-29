import {
	CALCULATOR_INPUT_UPDATE,
	CALCULATE_SEQUENCES
} from './actiontypes'

import {
	getSequence,
	getEvens,
	getOdds,
	getLetters,
	getFibonnaci,
} from './patterncalculations'

const initialState = {
	inputValue: 6,
	error: null,
	results: {
		evens: null,
        fibonnaci: null,
        letters: null,
        odds: null,
        sequencial: null,
	}
}

export function CalculatorReducer (state = initialState, action) {

  	switch (action.type) {

	    case CALCULATOR_INPUT_UPDATE: {
	    	const inputValue = action.value
	    	
			return Object.assign({}, state, {
				inputValue
			})
		}

		case CALCULATE_SEQUENCES: {
	    	const inputValue = state.inputValue
	    	const sequencial = getSequence(inputValue).join(' ')
	    	const evens = getEvens(inputValue).join(' ')
	    	const odds = getOdds(inputValue).join(' ')
	    	const letters = getLetters(inputValue).join(' ')
	    	const fibonnaci = getFibonnaci(inputValue).join(' ')
	    		
			return Object.assign({}, state, {
				results: {
					sequencial,
					evens,
					odds,
					letters,
					fibonnaci,
				}
			})
		}

	    default:
	     	return state
  	}
}
