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

type Props = {||};

export default class App extends React.Component<Props> {
	constructor(props) {
		super(props);
	}

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
