import {expect} from 'chai'
import {
	calculateSequences,
	inputUpdate
} from '../../src/calculator/actions'

describe('.calculateSequences', () => {
	it('returns an object with the type of CALCULATE_SEQUENCES', () => {
		expect(calculateSequences().type).to.eql('CALCULATE_SEQUENCES')
	})
})

describe('.inputUpdate', () => {
	it('returns an object with the type of CALCULATOR_INPUT_UPDATE', () => {
		expect(inputUpdate().type).to.eql('CALCULATOR_INPUT_UPDATE')
	})

	it('returns an object with a "value" property equal to the input argument', () => {
		const argument = 'argument'
		expect(inputUpdate(argument).value).to.eql(argument)
	})
})