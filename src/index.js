
import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './containers/appContainer.js';
import store from './store/store.js';
import { Provider } from 'react-redux';

//css
require('./css/index.css');

ReactDOM.render(
	<Provider store = {store}>
		<AppContainer />
	</Provider>, document.getElementById('App')
);
