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
        currentUserName: "",
        currentUserType:""
    }

    render() {
        const {currentUserName, currentUserType} = this.state;

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/resetPswd" component={Reset}/>
                    <Route
                        exact path={["/","/SignIn","/dashboard","/adminDashboard","/doctorDashboard"]}
                        render={({history}) =>(
                            <div className = "dashboard">
                                {console.log("app"+currentUserName)}
                                {!currentUserName ? <SignIn history={history} app={this} /> :
                                {
                                    '':<Dashboard history={history} app={this}/>,
                                    'doctor':<DoctorDashboard history={history} app={this}/>,
                                    'admin':<AdminDashboard history={history} app={this}/>

                                         }[currentUserType]
                                        }
                            
                            </div>
                        )}
                    />
                     <Route
                        exact path={["/SignUp", "/dashboard","/dashboard","/adminDashboard","/doctorDashboard"]}
                        render={({history}) =>(
                            <div className = "signUp">
                                {console.log("app"+currentUserName)}
                                {!currentUserName ? <SignUp history={history} app={this} /> : 
                                {
                                    '':<Dashboard history={history} app={this}/>,
                                    'doctor':<DoctorDashboard history={history} app={this}/>,
                                    'admin':<AdminDashboard history={history} app={this}/>

                                         }[currentUserType]
                                } 
                            
                            </div>
                        )}
                    />
                    <Route
                        exact path={["/SignIn", "/questionnaire"]}
                        render={({history}) =>(
                            <div className = "questionnaire">
                                {console.log("app"+currentUserName)}
                                {!currentUserName 
                                    ? <SignUp history={history} app={this} /> 
                                    : <Questionnaire history={history} app={this}/>
                                
                                } 
                            
                            </div>
                        )}
                    />
                    <Route
                        exact path={["/SignIn", "/Activities"]}
                        render={({history}) =>(
                            <div className = "activities">
                                {console.log("app"+currentUserName)}
                                {!currentUserName 
                                    ? <SignUp history={history} app={this} /> 
                                    : <Activities history={history} app={this}/>
                                
                                } 
                            
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
