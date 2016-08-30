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
	hasResults: false,
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
	    	const inputValue = parseFloat(state.inputValue)
	    	let sequencial
			let evens
			let odds
			let letters
			let fibonnaci

			if (parseInt(inputValue) !== inputValue) {
				return Object.assign({}, state, {
					error: 'Input must be a whole number',
					hasResults: false,
					results: {
						evens: null,
				        fibonnaci: null,
				        letters: null,
				        odds: null,
				        sequencial: null,
					}
				})
			}

	    	sequencial = getSequence(inputValue).join(' ')
	    	evens = getEvens(inputValue).join(' ')
	    	odds = getOdds(inputValue).join(' ')
	    	letters = getLetters(inputValue).join(' ')
	    	fibonnaci = getFibonnaci(inputValue).join(' ')
	    		
			return Object.assign({}, state, {
				hasResults: true,
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
