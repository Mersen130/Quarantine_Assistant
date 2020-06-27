import React from "react";
import "./App.css";
import QA from "./QA/qa.js";
import Questionnaire from "./questionnaire/questionnaire.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/index";
import UserProfile from "./userProfile/index";
import SignIn from "./react-components/SignIn/signIn.js";
import SignUp from "./react-components/SignUp/signUp.js";
import Reset from "./react-components/ResetPwd/resetPwd.js";

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
            </Switch>
          </Router>
        </React.Fragment>

        <Router>
          <Switch>
            <Route path="/questionnaire/" component={Questionnaire} />
            <Route path="/qa/" component={QA} />
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/userprofile/" component={UserProfile} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
