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
		if(this.state.resetUser ==="user" ){
			this.props.history.push('/dashboard');
		}
		if(this.state.resetUser == "admin"){
			this.props.history.push('/admindashboard');
		}
		
	}
	render(){
		return(
			<div id="wrapper">
			<img src={require("../../lib/appLogo.png")}class = "mx-auto d-block" id="resetLogo"/>
			<h4 class="resetHeader">Forgot your password?</h4>
			<div id="resetForm">
				<form onSubmit={this.handleSubmit}>
		  			<div class="form-group">
		  				<div>
		  				<label class="RSLabel">Username*</label>
	    				<input
				          type="text"
				          name="resetUser"
				          value={this.state.userName}
				          placeholder=""
				          class="custom-form-control resetInput"
				          id="resetUsernameInput"
				          onChange={this.handleChange}
				          required
				          />
				          </div>
				          <div id="newPswdDiv">
				          <label class="RSLabel">New Password*</label>
				          <input
				          type="text"
				          name="newPswd"
				          value={this.state.userName}
				          placeholder=""
				          class="custom-form-control resetInput"
				          id="resetPswdInput"
				          onChange={this.handleChange}
				          required
				          />
				          </div>
		  			</div>
		  			<button type="submit" id="resetBtn">Submit</button>
		  			<div id="resetLink">
		              <a onClick = {this.handleChangePage} href="/" id="goSignIn">Goback sign in</a>
	              </div>
		  		</form>
			</div>
		</div>
			);

	}
}
export default Reset;
