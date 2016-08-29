import {expect} from 'chai'
import {actions} from '../../src/calculator/actions'

describe('.calculateSequences', () => {
	it('returns an object with the type of CALCULATE_SEQUENCES', () => {
		expect(actions.calculateSequences().type).toEqual('CALCULATE_SEQUENCES')
	})
})

describe('.inputUpdate', () => {
	it('returns an object with the type of CALCULATOR_INPUT_UPDATE', () => {
		expect(actions.calculateSequences().type).toEqual('CALCULATOR_INPUT_UPDATE')
	})

	it('returns an object with a "value" property equal to an input argument', () => {
		const argument = 'argument'
		expect(actions.calculateSequences(argument).type).toEqual(argument)
	})
})