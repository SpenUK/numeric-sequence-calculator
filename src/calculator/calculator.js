import React, { Component } from 'react'
import Results from './results/results.connected'
import ResultsEmpty from './results/results.empty'

function handleInputChange (event) {
	this.props.actions.inputUpdate(event.target.value)
}

export default class extends Component {
	render () {
		return (
			<div >
				<h1 onClick={this.props.actions.calculateSequences}>Calculator</h1>
				<input type="text" value={this.props.inputValue} onChange={handleInputChange.bind(this)} />
				{this.props.hasResults ? <Results /> : <ResultsEmpty />}
			</div>
		)
	}
}

