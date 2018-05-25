/* @flow */
import ReactDOM from 'react-dom';
import React from 'react';
import AppContainer from './containers/appContainer.js';
import store from './store/store.js';
import { Provider } from 'react-redux';

//css
// require('./css/index.css');

// type Props = {||};
//
// class Index extends React.Component<Props> {
// 	render() {
// 		return (
// 			<div className="main">Index</div>
// 		)
// 	}
// }

ReactDOM.render(
	<Provider store = {store}>
		<AppContainer />
	</Provider>, document.getElementById('App')
);



// module.exports = Index
