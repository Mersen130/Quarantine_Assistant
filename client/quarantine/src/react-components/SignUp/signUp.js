import React from 'react';
import '../../App.css';
import './SignUp.css';
import {handleFormChange,signUp, handleUserType} from "../../actions/user";

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.props.history.push("/SignUp");
  }
  state = {
    userName:"",
    email:"",
    password:"",
    userType:"",
    docCertificate:""
  }


  render(){
    const {app} = this.props
    return(
    <div id="SignUpWrapper">
    <div id ="Intro">
      <p id="slogn">Keep track your quarantine status</p>
      <p id="explain">Quarantine Assistant is a platform help you track your quarantine progress. You can also <b>share your progress</b> and thoughts with other users, doing <b>recommended activites</b> during the quarantine. It's time to make your quarantine less boring, more <b>interesting</b>!</p> 
    </div>
      <div id="SignUpFormWrapper">
      <img src={require("../../lib/appLogo.png")}class = "mx-auto d-block" id="signUpLogo"/>
      <h4 id="SignUpTitle">Sign Up</h4>
      <div id = "signUpForm">
          <form>
            <div id="userNameInputWrapper">
             <div class = "custom-from-group" id="userNameInput">
               <label id="UsernameLable" class="signUpLabel">Username</label>  
                <input
                  type="text" 
                  name="userName" 
                  // value={this.state.userName}
                  class="custom-form-control signUpInput"  
                  id ="signUpUserName" 
                  onChange={e => handleFormChange(this, e.target)} 
                  required/>
              </div>
            </div>
                <div class = "custom-from-group">
                  <label class="signUpLabel" for="">Email</label>
                  <input
                    type="text"
                    name="email"
                    // value={this.state.email}
                    class="custom-form-control signUpInput"
                    id="singUpEmail"
                    placeholder=""
                    onChange={e => handleFormChange(this, e.target)} 
                    required/>
                </div>
               <div class="custom-from-group"> 
                  <label id="PswdLable" class="signUpLabel">Password</label>
                     <input
                     type="password"
                     name="password"
                    //  value={this.state.password}
                     class="custom-form-control signUpInput"
                     placeholder=""
                     onChange={e => handleFormChange(this, e.target)} 
                     required/>
              </div>
               <div class="form-group" id="docNo">
                  <label id="DocNoLable" class="signUpLabel">Doc Certificate No*</label> 
                  <input 
                    type="text" 
                    name="docCertificate" 
                    // value={this.state.docNo}
                    class="custom-form-control signUpInput" 
                    placeholder="(optional)" 
                    onChange={e =>handleUserType(this, e.target)} 
                    />

                </div>
                <div class="custom-control custom-checkbox" id="signUpCheckbox">
                  <input 
                    type="checkbox" 
                    class="custom-control-input" 
                    id="recieveViaEmail" />
                  <label class = "custom-control-label" id="labelViaEmail"for="recieveViaEmail">I want to recieve notifications via email</label>
                </div>
              <button
                type="submit" 
                id="signUpBtn"
                onClick={() =>signUp(this,app)}>
                <p id="btn">Sign Up for <b>Q</b>uarantine <b>A</b>ssistant</p>
              </button>
              <a onClick = {this.handleChangePage} href="/" id="goLogin">Already have an account?</a>
          </form>
        </div>
      </div>
    </div>
      );

  }
}

export default SignUp;
