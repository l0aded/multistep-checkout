/* @flow */
import React from 'react';
import ReactDOM from 'react-dom';

// components
import Form1 from './components/f1'
import Form2 from './components/f2'
import Form3 from './components/f3'
import Checkout from './components/checkout'

// containers
import Form1Container from './containers/Form1Container.js'
import Form2Container from './containers/Form2Container.js'
import Form3Container from './containers/Form3Container.js'
import  CheckoutContainer from './containers/CheckoutContainer.js'

// store
import store from './store/store.js';

// type Props = {||};

export default class App extends React.Component<Props> {
	constructor(props) {
		super(props);
		this.state = {
			tab: 'F1',
		// 	name: '',
    //   email: '',
    //   password: '',
		// 	address1: '',
    //   address2: '',
    //   phone: '',
		// 	credit: '',
		// 	expire: '',
		// 	CVV: '',
		// 	billing: '',
		};
		// this.setTab = this.setTab.bind(this);
		// this.submitCart = this.submitCart.bind(this);
	}

	// setTab(tab) {
	// 	if (tab === 'F2') {
	// 		const args = [...arguments].slice(1)
	// 		this.setState({
	// 			name: args[0],
	// 			email: args[1],
	// 			password: args[2],
	// 		})
	// 	}
	// 	if (tab === 'F3') {
	// 		const args = [...arguments].slice(1)
	// 		this.setState({
	// 			address1: args[0],
	// 			address2: args[1],
	// 			phone: args[2],
	// 		})
	// 	}
	// 	if (tab === 'CHECKOUT') {
	// 		const args = [...arguments].slice(1)
	// 		this.setState({
	// 			credit: args[0],
	// 			expire: args[1],
	// 			cvv: args[2],
	// 			billing: args[2],
	// 		})
	// 	}
	// 	this.setState({
	// 		tab: tab
	// 	})
  // }

	// submitCart() {
	// 	console.log('Purchase')
	// }

	render() {
	let component = null;
	switch(this.props.tab) {
		case 'F1':
			console.log('F1 happened')
			component = <Form1Container />
			break;
		case 'F2':
			console.log('F2 happened')
			component = <Form2Container />
			break;
		case 'F3':
			console.log('F3 happened')
			component = <Form3Container />
			break;
		case 'CHECKOUT':
			console.log('CHECKOUT happened')
			component = <CheckoutContainer />
			break;
	}

	return (
		<div>
			{component}
		</div>
		);
	}
}
//
// const dom = document.getElementById('App')
// if (dom === null) {
// 	//Error
// 	console.error("dom does not exist")
// } else {
// 	<Provider store = {store}>
// 		<App API_KEY={YOUTUBE_API_KEY} searchYouTube={searchYouTube} />
// 	</Provider>,
// 	ReactDOM.render(<App />, dom);
// }
