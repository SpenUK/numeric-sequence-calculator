import React, { Component } from 'react'

import styles from '../styles'

function handleInputChange (event) {
	this.props.actions.inputUpdate(event.target.value)
}

export default class extends Component {
	render () {
		return (
			<div>
				<div style={styles.resultContainer}>
					<h4 style={styles.resultLabel}>Sequencial</h4>
					<p style={styles.sequence}>{this.props.sequencial}</p>
				</div>

				<div style={styles.resultContainer}>
					<h4 style={styles.resultLabel}>Odds</h4>
					<p style={styles.sequence}>{this.props.odds}</p>
				</div>

				<div style={styles.resultContainer}>
					<h4 style={styles.resultLabel}>Evens</h4>
					<p style={styles.sequence}>{this.props.evens}</p>
				</div>

				<div style={styles.resultContainer}>
					<h4 style={styles.resultLabel}>Letters</h4>
					<p style={styles.sequence}>{this.props.letters}</p>
				</div>

				<div style={styles.resultContainer}>
					<h4 style={styles.resultLabel}>Fibonnaci</h4>
					<p style={styles.sequence}>{this.props.fibonnaci}</p>
				</div>
				
			</div>
		)
	}
}


