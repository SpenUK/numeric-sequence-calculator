import {expect} from 'chai'
import {shallow} from 'enzyme';
import App from '../src/app'

import React, { Component } from 'react'

describe('App' , () => {
  	it('Should render "App Component"', () => {
	    const component = shallow(<App />)
	    expect(component.text()).to.contain('App Component')
	});
});