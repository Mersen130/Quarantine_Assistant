import React from "react";
import "./App.css";
import QA from "./QA/qa.js";
import Questionnaire from "./questionnaire/questionnaire.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard/index";
import UserProfile from "./userProfile/index";
import SignIn from './react-components/SignIn/signIn.js'
import SignUp from './react-components/SignUp/signUp.js'
import Reset from './react-components/ResetPwd/resetPwd.js'
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
      	<Router>
      		<Switch>
      			<Route exact path="/" component={SignIn} />
      			<Route path="/SignUp" component={SignUp} />
      			<Route path="/Reset" component={Reset} />
            <Route path="/questionnaire/" component={Questionnaire} />
            <Route path="/qa/" component={QA} />
      		</Switch>
      	</Router>
      </React.Fragment>
    );
  }
}

export default App;
 