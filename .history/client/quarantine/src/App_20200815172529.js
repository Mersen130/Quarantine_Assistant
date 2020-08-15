import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SignIn from "./react-components/SignIn/signIn.js";
import SignUp from "./react-components/SignUp/signUp.js";
import Reset from "./react-components/ResetPwd/resetPwd.js";
import UserActivities from "./react-components/Activities/index.js";
import QA from "./react-components/QA/qa.js";
import Questionnaire from "./react-components/questionnaire/questionnaire.js";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
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
                    {/* <Route path="/resetPswd" component={Reset}/>
                    <Route
                        exact path={["/","/SignIn","/dashboard","/adminDashboard","/doctorDashboard"]}
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
                    />
                     <Route
                        exact path={["/SignUp", "/dashboard","/dashboard","/adminDashboard","/doctorDashboard"]}
                        render={({history}) =>(
                            <div className = "signUp">
                                {console.log("signUpapp:"+currentUserName)}
                                {console.log("signUp app userType:"+currentUserType)}
                                {!currentUserName ? <SignUp history={history} app={this} /> : 
                                {
                                    'normal_user':<Dashboard history={history} app={this}/>,
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
                    <Route
                        exact path={["/SignIn", "/QA"]}
                        render={({history}) =>(
                            <div className = "QA">
                                {console.log("app"+currentUserName)}
                                {!currentUserName 
                                    ? <SignUp history={history} app={this} /> 
                                    : <QA history={history} app={this}/>
                                
                                } 
                            
                            </div>
                        )}
                    />
                    <Route
                        exact path={["/SignIn", "/QAAdmin"]}
                        render={({history}) =>(
                            <div className = "QAAdmin">
                                {console.log("app"+currentUserName)}
                                {!currentUserName 
                                    ? <SignUp history={history} app={this} /> 
                                    : <QAAdmin history={history} app={this}/>
                                
                                } 
                            
                            </div>
                        )}
                    />
                    <Route
                        exact path={["/SignIn", "/UserProfile"]}
                        render={({history}) =>(
                            <div className = "UserProfile">
                                {console.log("app"+currentUserName)}
                                {!currentUserName 
                                    ? <SignUp history={history} app={this} /> 
                                    : <UserProfile history={history} app={this}/>
                                
                                } 
                            
                            </div>
                        )}
                    />
                    <Route
                        exact path={["/SignIn", "/User2Profile"]}
                        render={({history}) =>(
                            <div className = "User2Profile">
                                {console.log("app"+currentUserName)}
                                {!currentUserName 
                                    ? <SignUp history={history} app={this} /> 
                                    : <User2Profile history={history} app={this}/>
                                
                                } 
                            
                            </div>
                        )}
                    />
                    <Route
                        exact path={["/SignIn", "/DoctorProfile"]}
                        render={({history}) =>(
                            <div className = "DoctorProfile">
                                {console.log("app"+currentUserName)}
                                {!currentUserName 
                                    ? <SignUp history={history} app={this} /> 
                                    : <DoctorProfile history={history} app={this}/>
                                
                                } 
                            
                            </div>
                        )}
                    />
                    <Route
                        exact path={["/SignIn", "/AdminProfile"]}
                        render={({history}) =>(
                            <div className = "AdminProfile">
                                {console.log("app"+currentUserName)}
                                {!currentUserName 
                                    ? <SignUp history={history} app={this} /> 
                                    : <AdminProfile history={history} app={this}/>
                                
                                } 
                            
                            </div>
                        )}
                    />
                     */}
                    
                {/* <Route exact path="/SignIn">
                    <SignIn app={this} />
                </Route>
                <Route 
                    exact path="/SignUp"
                    render={({history})=>(
                    <div className="signUp">
                            {!currentUserName
                                ? <SignUp app={this} />
                                : <Redirect to="/dashboard" app={this} />
                            }
                        </div>
                    )}
                />

                <Route exact path='/dashboard'>
                {!currentUserName
                         ? <Redirect to="/SignIn" />
                         :  {
                                "normal_user": <Dashboard app={this} />,
                                "doctor": <DoctorDashboard app={this} />,
                                "admin":<AdminDashboard  app={this} />
                            }[currentUserType]
                }
                </Route>
                <Route exact path='/Activities'>
                    {console.log(currentUserName)}
                    {!currentUserName
                     ? <Redirect to="/SignIn" />
                     : <Activities app={this}/>
                    }
                    
                </Route> */}
                

                    { /* 404 if URL isn't expected. */}
                    <Route 
                    exact path="/SignIn"
                    render={({history})=>(
                        <SignIn app={this} history={history} />
                    )}
                />
                 <Route
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
                <Route exact path="/Useractivities">
                    <UserActivities app={this}/>
                </Route>
                <Route exact path="/UserList">
                    <DoctorList app={this}/>
                </Route>
                <Route exact path="/DoctorList">
                    <UserList app={this}/>
                </Route>

                <Route render={() => <div>404 Not found</div>} />

                </Switch>
                
            </BrowserRouter>

        );
    }
}

export default App;
