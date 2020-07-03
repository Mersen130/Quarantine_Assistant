import React from 'react';
import '../../App.css';
import './signIn.css';


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  return valid;
};


class SignIn extends React.Component{

  constructor(props){
    super(props);
    
    this.state={
      userName:"",
      password:"",
      users:[
        {userName:'user', password:'user'}
      ],
      formErrors:{
        userName:"",
        password:""
      }
    }
  }



  handleChange = e =>{
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;

    switch(name){
      case 'userName':
      formErrors.userName=
      value === 'user' ? ""
      : "invalid user name";
      break;
      case 'password':
      formErrors.password=
      value === 'user' ? ""
      : "invalid password";
      break;

    }
  }

	render(){
		return(
      <div class="wrapper">
        <div id = "signInForm">
          <form onSubmit={this.handleSubmit}>
            <img src={require("../../lib/signIn/calendar.png")}class = "mx-auto d-block" id="signInLogo"/>
            <h2 calssName = "signUp">Sign In</h2>
            <div class = "form-group">
              <input
                type="text"
                name="userName"
                value = {this.state.userName}
                class="custom-form-control signInEmailPswd" 
                placeholder="Username*"
                onChange={this.handleChange}
                required
              />
            </div>
            <div class = "form-group">
               <input
                 type="password"
                 name="password"
                 value= {this.state.password}
                 class="custom-form-control signInEmailPswd"
                 placeholder="Password*"
                 onChange={this.handleChange}
                 required
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
            <button type="submit" id="signInBtn">Sign In</button>
            <div id="signInLink">
              <a onClick = {this.handleChangePage} href="/Reset" id="goReset">Forgot your password?</a>
              <a onClick = {this.handleChangePage} href="/Questionnair" id="goQue">Don't have an account? Sign up</a>
            </div>
          </form>
        </div>
      </div>
  );


	}
}
export default SignIn;
