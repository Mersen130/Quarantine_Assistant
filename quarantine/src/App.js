import React from "react";
import "./App.css";
import Sidebar from "./SideNavBar/sidebar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QA from './QA/qa.js';
import Questionnaire from './questionnaire/questionnaire.js';
import Dashboard from "./Dashboard/index";
import UserProfile from "./userProfile/index";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Router>
          <Switch>
            <Route path="/dashboard/" component={Dashboard} />
            <Route path="/userprofile/" component={UserProfile} />
            <Route path="/QA/" component={QA} />
            <Route path="/questionnaire/" component={Questionnaire} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
