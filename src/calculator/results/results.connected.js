import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Results from './results'
import * as Actions from '../actions'

const mapStateToProps = state => {
	return {
		...state.calculator.results
	}
}

const mapDispatchToProps = dispatch => {
	return {
		actions: bindActionCreators(Actions, dispatch)
	}
}

const ConnectedResults = connect(mapStateToProps, mapDispatchToProps)(Results)

export default ConnectedResults
