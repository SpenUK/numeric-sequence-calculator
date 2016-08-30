import React, { Component } from 'react'
import Calculator from './calculator/calculator.connected'

export default class App extends Component {
  	render() {
    	return (
      		<div>
      			<h4>Numeric Sequence Calculator</h4>
      			<Calculator />
      		</div>
    	)
  	}
}