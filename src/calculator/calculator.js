import React, { Component } from 'react'
import Results from './results/results.connected'
import ResultsEmpty from './results/results.empty'

import styles from './styles'

function handleInputChange (event) {
	this.props.actions.inputUpdate(event.target.value)
	this.props.actions.calculateSequences()
}

export default class extends Component {
	render () {
		const inputStyle = this.props.error ? styles.inputError : styles.input 
		
		return (
			<div >
				<input type="text" style={inputStyle} value={this.props.inputValue} onChange={handleInputChange.bind(this)} />
				{this.props.hasResults ? <Results /> : <ResultsEmpty />}
			</div>
		)
	}
}

