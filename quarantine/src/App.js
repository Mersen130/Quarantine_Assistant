import React from "react";
import "./App.css";
import QA from "./QA/qa.js";
import Questionnaire from "./questionnaire/questionnaire.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./react-components/SignIn/signIn.js";
import SignUp from "./react-components/SignUp/signUp.js";
import Reset from "./react-components/ResetPwd/resetPwd.js";
import QAAdmin from "./QA/qaAdmin.js";
import UserProfile from "./userProfile/index";
import User2Profile from "./userProfile/user2";
import DoctorProfile from "./userProfile/doctor";
import AdminProfile from "./userProfile/admin";
import Dashboard from "./Dashboard/index";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Router>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route path="/SignUp" component={SignUp} />
              <Route path="/Reset" component={Reset} />
              <Route path="/questionnaire/" component={Questionnaire} />
              <Route path="/qaAdmin/" component={QAAdmin} />
              <Route path="/qa/" component={QA} />
              <Route path="/dashboard/" component={Dashboard} />
              <Route path="/userprofile/" component={UserProfile} />
              <Route path="/user2/" component={User2Profile} />
              <Route path="/doctorprofile/" component={DoctorProfile} />
              <Route path="/adminprofile/" component={AdminProfile} />
            </Switch>
          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
