import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./react-components/SignIn/signIn.js";
import SignUp from "./react-components/SignUp/signUp.js";
import Reset from "./react-components/ResetPwd/resetPwd.js";
import Activities from "./react-components/Activities/index.js";
import QA from "./react-components/QA/qa.js";
import Questionnaire from "./react-components/questionnaire/questionnaire.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import QAAdmin from "./react-components/QA/qaAdmin.js";
import UserProfile from "./react-components/userProfile/index";
import User2Profile from "./react-components/userProfile/user2";
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
        readCookie(this); // sees if a user is logged in.
    }

    // global state passed down includes the current logged in user.
    state = {
        currentUserName: null
    }

    render() {
        const { currentUserName} = this.state;

        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        exact path={["/", "/SignIn", "/Dashboard"] /* any of these URLs are accepted. */ }
                        render={({ history }) => (
                            <div className="app">
                            {!currentUserName ? <SignIn history={history} app={this} /> : <Dashboard history={history} app={this} />}
                                
                            </div>
                            
                        )}
                    />

                    { /* 404 if URL isn't expected. */}
                    <Route render={() => <div>404 Not found</div>} />

                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
