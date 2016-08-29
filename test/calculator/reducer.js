import {expect} from 'chai'
import {CalculatorReducer} from '../../src/calculator/reducer'

const initialState = {
    inputValue: '',
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

describe('Reducer', () => {
    describe('CALCULATOR_INPUT_UPDATE', () => {
        it('Should update the states "inputValue" property with "value" of the action', () => {
            const input = 'input'
            const newState = CalculatorReducer(initialState, {
                type: 'CALCULATOR_INPUT_UPDATE',
                value: input
            })

            expect(newState.inputValue).to.eql(input)
        })
    })

    describe('CALCULATE_SEQUENCES', () => {
        describe('when state.inputValue is 20', () => {
            it('Should update the states "hasResults" property to be true', () => {
                initialState.inputValue = 20
                const newState = CalculatorReducer(initialState, {
                    type: 'CALCULATE_SEQUENCES'
                })

                expect(newState.hasResults).to.be.true
            })

            it('Should update the states "results" property with relevant calculated results', () => {
                initialState.inputValue = 20
                const newState = CalculatorReducer(initialState, {
                    type: 'CALCULATE_SEQUENCES'
                })

                expect(newState.results).to.eql({
                    evens: '0 2 4 6 8 10 12 14 16 18 20',
                    fibonnaci: '0 1 1 2 3 5 8 13',
                    letters: 'Z 1 2 C 4 E C 7 8 C E 11 C 13 14 Z 16 17 C 19 E',
                    odds: '1 3 5 7 9 11 13 15 17 19',
                    sequencial: '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20',
                })
            })
        })

        describe('when state.inputValue is 50', () => {
            it('Should update the states "hasResults" property to be true', () => {
                initialState.inputValue = 50
                const newState = CalculatorReducer(initialState, {
                    type: 'CALCULATE_SEQUENCES'
                })

                expect(newState.hasResults).to.be.true
            })

            it('Should update the states "results" property with relevant calculated results', () => {
                initialState.inputValue = 50
                const newState = CalculatorReducer(initialState, {
                    type: 'CALCULATE_SEQUENCES'
                })

                expect(newState.results).to.eql({
                    evens: '0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50',
                    fibonnaci: '0 1 1 2 3 5 8 13 21 34',
                    letters: 'Z 1 2 C 4 E C 7 8 C E 11 C 13 14 Z 16 17 C 19 E C 22 23 C E 26 C 28 29 Z 31 32 C 34 E C 37 38 C E 41 C 43 44 Z 46 47 C 49 E',
                    odds: '1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49',
                    sequencial: '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50',
                })
            })
        })

        describe('when state.inputValue is 111', () => {
            it('Should update the states "hasResults" property to be true', () => {
                initialState.inputValue = 111
                const newState = CalculatorReducer(initialState, {
                    type: 'CALCULATE_SEQUENCES'
                })

                expect(newState.hasResults).to.be.true
            })

            it('Should update the states "results" property with relevant calculated results', () => {
                initialState.inputValue = 111
                const newState = CalculatorReducer(initialState, {
                    type: 'CALCULATE_SEQUENCES'
                })

                expect(newState.results).to.eql({
                    evens: '0 2 4 6 8 10 12 14 16 18 20 22 24 26 28 30 32 34 36 38 40 42 44 46 48 50 52 54 56 58 60 62 64 66 68 70 72 74 76 78 80 82 84 86 88 90 92 94 96 98 100 102 104 106 108 110',
                    fibonnaci: '0 1 1 2 3 5 8 13 21 34 55 89',
                    letters: 'Z 1 2 C 4 E C 7 8 C E 11 C 13 14 Z 16 17 C 19 E C 22 23 C E 26 C 28 29 Z 31 32 C 34 E C 37 38 C E 41 C 43 44 Z 46 47 C 49 E C 52 53 C E 56 C 58 59 Z 61 62 C 64 E C 67 68 C E 71 C 73 74 Z 76 77 C 79 E C 82 83 C E 86 C 88 89 Z 91 92 C 94 E C 97 98 C E 101 C 103 104 Z 106 107 C 109 E C',
                    odds: '1 3 5 7 9 11 13 15 17 19 21 23 25 27 29 31 33 35 37 39 41 43 45 47 49 51 53 55 57 59 61 63 65 67 69 71 73 75 77 79 81 83 85 87 89 91 93 95 97 99 101 103 105 107 109 111',
                    sequencial: '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111',
                })    
            })
        })
    })
})
