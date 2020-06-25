import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./SideNavBar/sidebar.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
