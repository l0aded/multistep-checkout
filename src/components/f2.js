import React from 'react';

class Form2 extends React.Component<Props> {
	constructor(props) {
		super(props);
    this.state = {
      address1: '',
      address2: '',
      phone: '',
    }
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <div><label><input type="text" name="address1" placeholder="111 Spooner St." value={this.state.address1}  onChange={this._handleChange} /></label></div>
        <div><label><input type="text" name="address2" placeholder="Cerritos, CA 92657" value={this.state.address2}  onChange={this._handleChange} /></label></div>
        <div><label><input type="text" name="phone" placeholder="(555) 555-5555" value={this.state.phone}  onChange={this._handleChange} /></label></div>
        <button onClick={() => this.props.submitForm2('F3', this.state.address1, this.state.address2, this.state.phone, )}> SUBMIT </button>
      </div>
    )
  }
}





module.exports = Form2
