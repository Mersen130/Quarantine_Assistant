import React from 'react';
import '../../App.css';
import './signIn.css';
import {handleSubmit, handleChangePage} from "./signInActions.js";
import {handleFormChange, signIn} from "../../actions/user";

class SignIn extends React.Component{

  constructor(props){
    super(props);
    // this.props.history.push("/SignIn")
  }
    
  state = {
    userName:"",
    password:""

  }






	render(){
    const {app} = this.props
		return(
      <div id="SignInWrapper">
      <div id="SignInFormWrapper">
        <img src={require("../../lib/appLogo.png")}class = "mx-auto d-block" id="signInLogo"/>
        <h4 id="signInTitle">Sign in to <b>Q</b>uarantine <b>A</b>ssistant</h4>
        <div id = "signInForm">
          
            <div class = "form-group">
              <label id="SIUsernameLable" class="signInLabel">Username</label>
              <input
                type="text"
                name="userName"
                // value = {this.state.userName}
                class="custom-form-control signInEmailPswd" 
                placeholder=""
                onChange={e => handleFormChange(this,e.target)}
              />
            </div>
            <div class = "form-group">
               <label id="SIPswdLable" class="signInLabel">Password*</label>
               <input
                 type="password"
                 name="password"
                //  value= {this.state.password}
                 class="custom-form-control signInEmailPswd"
                 placeholder=""
                 onChange={e => handleFormChange(this, e.target)}
               />
            </div>
            <div class="custom-control custom-checkbox" id="signInCheckbox">
              <input 
                type="checkbox"
                class="custom-control-input"
                id="rememberMe"
              />
              <label class = "custom-control-label" id="labelRememberMe"for="rememberMe">Remeber Me</label>
            </div>
            <button
              id="signInBtn"
              onClick={(e) =>{e.preventDefault(); signIn(this,app, this.props.history)}}
              >
              Sign In
            </button>
            <div id="signInLink">
              <a onClick = {handleChangePage.bind(this, "/Reset", this.props.history)} href="/Reset" id="goReset">Forgot password?</a>
              <a onClick = {handleChangePage.bind(this, "/questionnaire", this.props.history)} href="/questionnaire" id="goQue">Don't have an account? Sign up</a>
            </div>
          
        </div>
        </div>
      </div>
  );


	}
}
export default SignIn;
