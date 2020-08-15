import React from 'react';
import './resetPwd.css';
import { handleFormChange, resetPswd } from '../../actions/user';


class Reset extends React.Component{
	constructor(props){
		super(props);
		this.state={
			resetUser:"",
			newPswd:""
		};
	}
	render(){
		const{app, history} = this.props
		return(
			<div id="wrapper">
			<img src={require("../../lib/appLogo.png")}class = "mx-auto d-block" id="resetLogo"/>
			<h4 class="resetHeader">Forgot your password?</h4>
			<div id="resetForm">
				<form>
		  			<div class="form-group">
		  				<div>
		  				<label class="RSLabel">Username*</label>
	    				<input
				          type="text"
				          name="resetUser"
				        //   value={this.state.userName}
				          placeholder=""
				          class="custom-form-control resetInput"
				          id="resetUsernameInput"
				          onChange={e=>handleFormChange(this, e.target)}
				          required
				          />
				          </div>
				          <div id="newPswdDiv">
				          <label class="RSLabel">New Password*</label>
				          <input
				          type="text"
				          name="newPswd"
				        //   value={this.state.userName}
				          placeholder=""
				          class="custom-form-control resetInput"
				          id="resetPswdInput"
				          onChange={e=>handleFormChange(this, e.target)}
				          required
				          />
				          </div>
		  			</div>
					  <button 
						  type="submit"
						  id="resetBtn"
						  onClick={()=>resetPswd(this,this.props.history)}
						  >
						Submit
						</button>
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
