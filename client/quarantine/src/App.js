import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./react-components/SignIn/signIn.js";
import SignUp from "./react-components/SignUp/signUp.js";
import Reset from "./react-components/ResetPwd/resetPwd.js";
import UserActivities from "./react-components/Activities/index.js";
import QA from "./react-components/QA/qa.js";
import Questionnaire from "./react-components/questionnaire/questionnaire.js";
import { BrowserRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import QAAdmin from "./react-components/QA/qaAdmin.js";
import UserProfile from "./react-components/userProfile/index";
// import User2Profile from "./react-components/userProfile/user2";
import DoctorProfile from "./react-components/userProfile/doctor";
import AdminProfile from "./react-components/userProfile/admin";
import Dashboard from "./react-components/Dashboard/index";
import { AdminDashboard } from "./react-components/AdminDashboard/index";
import DoctorDashboard from "./react-components/DoctorDashboard/index";
import UserList from "./react-components/AdminDashboard/UserList";
import DoctorList from "./react-components/AdminDashboard/DoctorList"
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
        currentUserName: "",
        currentUserType:"",
        quarantineStartDate:""
    }

    render() {
        const {currentUserName, currentUserType} = this.state;

        return (
            <BrowserRouter>
                <Switch>

                    <Route 
                    exact path="/SignIn"
                    render={({history})=>(
                        <SignIn app={this} history={history} />
                    )}
                />
                 {/* <Route
                        exact path="/"
                        render={({history}) =>(
                            <div className = "dashboard">
                                {console.log("app"+currentUserName)}
                                {!currentUserName ? <SignIn history={history} app={this} /> :
                                {
                                    'normal_user':<Dashboard history={history} app={this}/>,
                                    'doctor':<DoctorDashboard history={history} app={this}/>,
                                    'admin':<AdminDashboard history={history} app={this}/>

                                         }[currentUserType]
                                        }
                            
                            </div>
                        )}
                    /> */}
                   <Route 
                    exact path="/"
                    render={({history})=>(
                        <SignIn app={this} history={history} />
                    )}
                    />

                <Route 
                    exact path="/SignUp"
                    render={({history})=>(
                        <SignUp app={this} history={history} />
                    )}
                />
                <Route exact path="/dashboard">
                   { 
                        {
                            "normal_user": <Dashboard app={this} />,
                            "doctor": <DoctorDashboard app={this} />,
                            "admin":<AdminDashboard  app={this} />
                        }[currentUserType]
                    }
                </Route> 
                <Route exact path="/userActivities">
                    <UserActivities app={this}/>
                </Route>
                <Route exact path="/UserList">
                    <UserList app={this}/>
                </Route>
                <Route exact path="/DoctorList">
                    <DoctorList app={this}/>
                </Route>
                <Route 
                    exact path="/Reset"
                    render={({history})=>(
                        <Reset app={this} history={history} />
                    )}
                />
                 <Route
                        path="/questionnaire/"
                        component={Questionnaire}
                    />
                    <Route path="/qaAdmin/" component={QAAdmin} />
                    <Route path="/qa/" component={QA}>
                       
                    </Route>
                    <Route
                        path="/AdminProfile"
                        component={AdminProfile}
                    />
                    
                    <Route path="/UserProfile/" component={UserProfile} />
                   
                    <Route
                        path="/DoctorProfile/"
                        component={DoctorProfile}
                    />
                    

                <Route render={() => <div>404 Not found</div>} />

                </Switch>
                
            </BrowserRouter>
          

        );
    }
}

export default App;
