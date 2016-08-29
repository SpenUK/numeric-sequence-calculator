import { combineReducers } from 'redux'
import {CalculatorReducer} from './calculator/reducer'

const RootReducer = combineReducers({
	calculator: CalculatorReducer
})

export default RootReducer