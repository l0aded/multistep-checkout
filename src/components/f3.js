import React from 'react';

class Form3 extends React.Component<Props> {
	constructor(props) {
		super(props);
    this.state = {
      credit: '',
      expire: '',
      cvv: '',
      billing: '',
    }
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <div><label><input type="text" name="credit" placeholder="Credit Card #" value={this.state.credit}  onChange={this._handleChange} /></label></div>
        <div><label><input type="text" name="expire" placeholder="Expiration Date" value={this.state.expire}  onChange={this._handleChange} /></label></div>
        <div><label><input type="text" name="cvv" placeholder="CVV CODE" value={this.state.cvv}  onChange={this._handleChange} /></label></div>
        <div><label><input type="text" name="billing" placeholder="Billing Zip Code" value={this.state.billing}  onChange={this._handleChange} /></label></div>
        <button onClick={() => this.props.submitForm3('CHECKOUT', this.state.credit, this.state.expire, this.state.cvv, this.state.billing)}> CHECKOUT </button>
      </div>
    )
  }
}





module.exports = Form3
