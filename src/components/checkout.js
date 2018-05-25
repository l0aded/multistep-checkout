import React from 'react';

class Checkout extends React.Component<Props> {
	constructor(props) {
		super(props);
  }
  render() {
		const states = this.props
    return (
      <div>
        {console.log('this.props', this.props)}
        <div>Name: {states.name}</div>
        <div>Email: {states.email}</div>
        <div>Password: {states.password}</div>
        <div>Address1: {states.address1}</div>
        <div>Address2: {states.address2}</div>
        <div>Phone: {states.phone}</div>
        <div>Credit: {states.credit}</div>
        <div>Expire: {states.expire}</div>
        <div>CVV: {states.cvv}</div>
        <div>Billing: {states.billing}</div>
				<button > PURCHASE </button>
        <button onClick={() => this.props.submitCart('F1')}> PURCHASE </button>
      </div>
    )
  }
}


//
// const Checkout = () => {
//   return (
//     <div>
//       {console.log('this.props', this.props)}
//       <div>Name: {states.name}</div>
//       <div>Email: {states.email}</div>
//       <div>Password: {states.password}</div>
//       <div>Address1: {states.address1}</div>
//       <div>Address2: {states.address2}</div>
//       <div>Phone: {states.phone}</div>
//       <div>Credit: {states.credit}</div>
//       <div>Expire: {states.expire}</div>
//       <div>CVV: {states.cvv}</div>
//       <div>Billing: {states.billing}</div>
//       <button onClick={() => submitCart()}> PURCHASE </button>
//     </div>
//   )
//
// }

module.exports = Checkout
