import React from 'react';
import './resetPwd.css';


class Reset extends React.Component{
	constructor(props){
		super(props);
		this.state={
			resetUser:"",
			newPswd:""
		};
	}
	handleChange = e =>{
		const{name, value} = e.target;
		this.setState({[name]: value}, () => console.log(this.state));
	}
	handleSubmit = e =>{
		e.preventDefault();
		this.props.history.push('/SignIn');
	}
	render(){
		return(
			<div class="wrapper">
			<div id="resetForm">
				<form onSubmit={this.handleSubmit}>
					<img src={require("../../lib/signIn/calendar.png")}class = "mx-auto d-block" id="resetLogo"/>
					<h3 class="resetHeader">Forgot your password?
					</h3>
		  			<div class="form-group">
			  			<span id="labelReset">Please Enter Your Username Below:</span>
	    				<input
				          type="text"
				          name="resetUser"
				          value={this.state.userName}
				          placeholder="Enter your username*"
				          class="custom-form-control resetInput"
				          id="resetUsernameInput"
				          onChange={this.handleChange}
				          required
				          />
				          <input
				          type="text"
				          name="newPswd"
				          value={this.state.userName}
				          placeholder="Enter your new password*"
				          class="custom-form-control resetInput"
				          id="resetPswdInput"
				          onChange={this.handleChange}
				          required
				          />
		  			</div>
		  			<button type="submit" id="resetBtn">Submit</button>
		  			<div id="resetLink">
		              <a onClick = {this.handleChangePage} href="/SignIn" id="goSignIn">Goback sign in</a>
	              </div>
		  		</form>
			</div>
		</div>
			);

	}
}
export default Reset;
