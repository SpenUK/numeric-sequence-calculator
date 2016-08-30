import React, { Component } from 'react'

function handleInputChange (event) {
	this.props.actions.inputUpdate(event.target.value)
}

export default class extends Component {
	render () {
		return (
			<div className="results">
				<div className="results__result results__result--sequencial">
					<h4>Sequencial</h4>
					<p>{this.props.sequencial}</p>
				</div>

				<div className="results__result results__result--odds">
					<h4>Odds</h4>
					<p>{this.props.odds}</p>
				</div>

				<div className="results__result results__result--evens">
					<h4>Evens</h4>
					<p>{this.props.evens}</p>
				</div>

				<div className="results__result results__result--letters">
					<h4>Letters</h4>
					<p>{this.props.letters}</p>
				</div>

				<div className="results__result results__result--fibonnaci">
					<h4>Fibonnaci</h4>
					<p>{this.props.fibonnaci}</p>
				</div>
				
			</div>
		)
	}
}


