import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./react-components/SignIn/signIn.js";
import SignUp from "./react-components/SignUp/signUp.js";
import Reset from "./react-components/ResetPwd/resetPwd.js";
import Activities from "./react-components/Activities/index.js";
import QA from "./react-components/QA/qa.js";
import Questionnaire from "./react-components/questionnaire/questionnaire.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QAAdmin from "./react-components/QA/qaAdmin.js";
import UserProfile from "./react-components/userProfile/index";
import DoctorProfile from "./react-components/userProfile/doctor";
import AdminProfile from "./react-components/userProfile/admin";
import Dashboard from "./react-components/Dashboard/index";
import { AdminDashboard } from "./react-components/AdminDashboard/index";
import DoctorDashboard from "./react-components/DoctorDashboard/index";
import UserList from "./react-components/AdminDashboard/UserList";
import "bootstrap/dist/css/bootstrap.css";
import "./react-components/theme/theme.css";
import {readCookie} from "./actions/user"
class App extends React.Component {
    constructor(props) {
        super(props);
        // readCookie(this); // sees if a user is logged in.
        console.log("reread", this.state)
    }

    // global state passed down includes the current logged in user.
    state = {
        currentUserName: "",
        currentUserType:""
    }

    render() {
        const {currentUserName, currentUserType} = this.state;

        return (                
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path="/" component={SignIn} />
                    <Route exact path="/SignIn" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Reset" component={Reset} />
                    <Route
                        path="/questionnaire/"
                        component={Questionnaire}
                    />
                    <Route path="/qaAdmin/" component={QAAdmin} />
                    <Route path="/qa/" component={QA} />
                    <Route path="/dashboard/" component={Dashboard} />
                    <Route path="/UserProfile/" component={UserProfile} />
                    <Route path="/userlist/" component={UserList} />
                    <Route
                        path="/doctorprofile/"
                        component={DoctorProfile}
                    />
                    <Route
                        path="/doctordashboard/"
                        component={DoctorDashboard}
                    />
                    <Route
                        path="/adminprofile/"
                        component={AdminProfile}
                    />
                    <Route path="/Activities" component={Activities} />
                    <Route
                        path="/admindashboard/"
                        component={AdminDashboard}
                    />
                </Switch>
            </Router>
        </React.Fragment>
        );
    }
}

export default App;
