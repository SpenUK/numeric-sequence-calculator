import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Calculator from './calculator'
import * as Actions from './actions'

const mapStateToProps = state => {
	return {
		...state.calculator
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

const ConnectedCalculator = connect(mapStateToProps, mapDispatchToProps)(Calculator)

export default ConnectedCalculator
