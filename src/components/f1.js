import React from 'react';

class Form1 extends React.Component<Props> {
	constructor(props) {
		super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <div>
        <div><label><input type="text" name="name" placeholder="Full Name" value={this.state.name}  onChange={this._handleChange} /></label></div>
        <div><label><input type="text" name="email" placeholder="E-mail" value={this.state.email}  onChange={this._handleChange} /></label></div>
        <div><label><input type="text" name="password" placeholder="Password" value={this.state.password}  onChange={this._handleChange} /></label></div>
				{/* <button onClick={() => console.log('F2', this.state.name, this.state.email, this.state.password)}> SUBMIT </button>
				<button onClick={() => console.log(this.props.submitForm1)}> SUBMIT </button> */}
        <button onClick={() => this.props.submitForm1('F2', this.state.name, this.state.email, this.state.password)}> SUBMIT </button>
      </div>
    )
  }
}





module.exports = Form1
