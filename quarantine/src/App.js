import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './SideNavBar/sidebar.js'
import SignIn from './react-components/SignIn/signIn.js'
import SignUp from './react-components/SignUp/signUp.js'
import Reset from './react-components/ResetPwd/resetPwd.js'
import Activities from './react-components/Activities/index.js'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
      	<Router>
      		<Switch>
      			<Route path="/SignIn" component={SignIn} />
      			<Route path="/SignUp" component={SignUp} />
      			<Route path="/Reset" component={Reset} />
            <Route path="/Activities" component ={Activities}/>
      		</Switch>
      	</Router>
      </React.Fragment>
    );
  }
}

export default App;
 