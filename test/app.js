import React, { Component } from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import App from '../src/app'
import Calculator from '../src/calculator/calculator.connected'

describe('App' , () => {
	it('Should contain a "Calculator" component', () => {
	    const wrapper = shallow(<App />)
	    expect(wrapper.find(Calculator)).to.have.length(1)
	})
})