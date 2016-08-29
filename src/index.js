import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './app/app';
import reducers from './reducers';

function configuredStore(reducers, initialState) {
	const store = createStore(reducers, initialState)

	return store;
}

ReactDOM.render(
	<Provider store = {configuredStore(reducers, {})}>
		<App />
	</Provider>
  	, document.querySelector('.container')
);
