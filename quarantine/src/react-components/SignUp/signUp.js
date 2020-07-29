import React from 'react';
import '../../App.css';
import './SignUp.css';


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });
  return valid;
};



const addUser = queue =>{
  const userList = queue.state.users;
  const user = {
    userName: queue.state.userName,
    email:queue.state.email,
    password: queue.state.password,
    userType:queue.state.userType
  }
  userList.push(user);
  queue.setState({
    users:userList
  });
};


class SignUp extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      email:"",
      userName: "",
      password: "",
      password_confirm:"",
      docNo:"",
      userType:"", //3 types:normal_user if docNo is null, otherwise doctor. admin is initialed, could not be registered
      users:[
        {email:"user@user.com", userName:"user", password:"user", userType:'normal_user'},
        {email:"admin@admin.com", lastName:"admin",userName:"admin",password:"admin", usertype:'admin'}
      ],
      formErrors:{
        email:"",
        userName:"",
        password:"",   
        password_confirm:"",
        docNo:" "
      },
      userNameInputing:false,
      passwordInputing:false,
      password_confirmInputing:false,
      emailInputing:false,
      docNoInputing:false
    };

  }

  handleSubmit = e => {
    e.preventDefault();
    addUser(this);
    console.log(formValid(this.state));
    if(formValid(this.state)){
      console.log("register successfully");
    }
    else{
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
      this.props.history.push('/dashboard');


  };

  handleChange = e => {
    e.preventDefault();
    const {name, value} = e.target;
    let formErrors = this.state.formErrors;
    const { password, password_confirm } = this.state;
    switch(name){
      case "password_confirm":     
      const matches = password ===value;
      formErrors.password_confirm=
        matches ? ""
        : "password does not match";
        break;
      case "docNo":
      this.state.userType=
      value.length > 0 ? "doctor"
      : "normal_user";
      console.log(this.state.userType);
      break;
    }
    this.setState({ formErrors, [name]: value}, () => console.log(this.state));
  };

  handleChangeLabel = e =>{
    e.preventDefault();
    const name = e.target.name;
    console.log(name);
    const labelChanging = name+"Inputing";
    console.log(labelChanging);
    console.log("test handleChangeLabel");
    this.setState({
      ...this.state,
      [labelChanging]:true
    })

  }

  render(){
    const {formErrors} = this.state;
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
          <form onSubmit={this.handleSubmit}>
            <div id="userNameInputWrapper">
             <div class = "custom-from-group" id="userNameInput">
               <label id="UsernameLable" class="signUpLabel">Username</label>  
                <input
                  type="text" 
                  name="userName" 
                  value={this.state.userName}
                  class="custom-form-control signUpInput"  
                  id ="signUpUserName" 
                  onChange={this.handleChange} 
                  required/>
              </div>
            </div>
                <div class = "custom-from-group">
                  <label class="signUpLabel" for="">Email</label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}

                    class="custom-form-control signUpInput"
                    id="singUpEmail"
                    placeholder=""
                    onChange={this.handleChange}
                    required/>
                </div>
               <div class="custom-from-group"> 
                  <label id="PswdLable" class="signUpLabel">Password</label>
                     <input
                     type="password"
                     name="password"
                     value={this.state.password}
                     class="custom-form-control signUpInput"
                     placeholder=""
                     onChange={this.handleChange}
                     required/>
              </div>
               <div class="form-group" id="docNo">
                  <label id="DocNoLable" class="signUpLabel">Doc Certificate No*</label> 
                  <input 
                    type="text" 
                    name="docNo" 
                    value={this.state.docNo}
                    class="custom-form-control signUpInput" 
                    placeholder="(optional)" 
                    onChange={this.handleChange}/>

                </div>
                <div class="custom-control custom-checkbox" id="signUpCheckbox">
                  <input 
                    type="checkbox" 
                    class="custom-control-input" 
                    id="recieveViaEmail" />
                  <label class = "custom-control-label" id="labelViaEmail"for="recieveViaEmail">I want to recieve notifications via email</label>
                </div>
              <button type="submit" id="signUpBtn"><p id="btn">Sign Up for <b>Q</b>uarantine <b>A</b>ssistant</p></button>
              <a onClick = {this.handleChangePage} href="/" id="goLogin">Already have an account?</a>
          </form>
        </div>
      </div>
    </div>
      );

  }
}

export default SignUp;
