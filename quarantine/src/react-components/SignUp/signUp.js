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
    firstName: queue.state.firstName,
    lastName: queue.state.lastName,
    userName: queue.state.userName,
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
      firstName:"",
      lastName:"",
      userName: "",
      password: "",
      password_confirm:"",
      docNo:"",
      userType:"", //3 types:normal_user if docNo is null, otherwise doctor. admin is initialed, could not be registered
      users:[
        {firstName:"user", lastName:"user", userName:"user", password:"user", userType:'normal_user'},
        {firstName:"admin", lastName:"admin",userName:"admin",password:"admin", usertype:'admin'}
      ],
      formErrors:{
        firstName:"",
        lastName:"",
        email:"",
        password:"",   
        password_confirm:"",
        docNo:" "
      }
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

  render(){
    const {formErrors} = this.state;
    return(
    <div class="wrapper">
    <div id = "signUpForm">
    <form onSubmit={this.handleSubmit}>
      <img src={require("../../lib/signIn/calendar.png")}class = "mx-auto d-block" id="signUpLogo"/>
      <h2 id="h2_SignUp">Sign Up</h2>
        <div class="form-row">
          <div class="col">
              <input
                type = "text" 
                name="firstName" 
                value={this.state.firstName}
                class="custom-form-control signUpName" 
                id ="signUpFirstName" 
                placeholder="First Name*" 
                onChange={this.handleChange}
                required/>
          </div>
          <div class ="col">
              <input
                type="text"
                name="lastName"
                value={this.state.lastName}
                class="custom-form-control signUpName"
                id="signUpLastName" 
                placeholder = "Last Name*" 
                onChange={this.handleChange} 
                required/>
          </div>
        </div>
       <div class = "custom-from-group">
          <input 
            type="text" 
            name="userName" 
            value={this.state.email}
            class="custom-form-control emailDoc"  
            id ="signUpEmail" 
            placeholder="Please Set a Username*" 
            onChange={this.handleChange} 
            required/>
        </div>
       <div class="form-row">
          <div class = "col">
             <input
             type="password"
             name="password"
             value={this.state.password}
             class="custom-form-control pswd"
             placeholder="Password*"
             onChange={this.handleChange} 
             required/>
           </div>
           <div class="col">
              <input 
                type="password" 
                name="password_confirm" 
                value={this.state.password_confirm}
                class="custom-form-control pswd" 
                id="confirmPswd" 
                placeholder="Confirm Password*" 
                onChange={this.handleChange} 
                required/>
              {formErrors.password_confirm.length >0 &&(
                <span class="errorMessage">{formErrors.password_confirm}</span>
              )}
           </div>
      </div>
       <div class="form-group" id="docNo">
          <input 
            type="text" 
            name="docNo" 
            value={this.state.docNo}
            class="custom-form-control emailDoc" 
            placeholder="Doc Certificate No* (optional)" 
            onChange={this.handleChange}/>
        </div>
        <div class="custom-control custom-checkbox" id="signUpCheckbox">
          <input 
            type="checkbox" 
            class="custom-control-input" 
            id="recieveViaEmail" />
          <label class = "custom-control-label" id="labelViaEmail"for="recieveViaEmail">I want to recieve notifications via email</label>
        </div>
      <button type="submit" id="signUpBtn">Create Account</button>
      <a onClick = {this.handleChangePage} href="/SignIn" id="goLogin">Already have an account?</a>
    </form>
    </div>
    </div>
      );

  }
}

export default SignUp;
