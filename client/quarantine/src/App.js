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
import User2Profile from "./react-components/userProfile/user2";
import DoctorProfile from "./react-components/userProfile/doctor";
import AdminProfile from "./react-components/userProfile/admin";
import Dashboard from "./react-components/Dashboard/index";
import { AdminDashboard } from "./react-components/AdminDashboard/index";
import DoctorDashboard from "./react-components/DoctorDashboard/index";
import UserList from "./react-components/AdminDashboard/UserList";
import "bootstrap/dist/css/bootstrap.css";
import "./react-components/theme/theme.css";
import {readCookie} from "./actions/user.js";
class App extends React.Component {
    constructor(props){
        super(props);
        readCookie(this);
    }
    state = {
        currentUserName:null,
        currentUserType:null
    }
    render() {
        return (
            
                <React.Fragment>
                    <Router>
                        <Switch>
                            <Route
                                exact path = {["/SignIn", "/SignUp","/Reset","/questionnaire/","/qaAdmin/","/qa/","/dashboard/","/user1/","/user2/","/userlist/","/doctorprofile/","/doctordashboard/","/adminprofile/","/Activities","/admindashboard/"]}
                                render={({history}) =>{
                                    <div classname = "App">
                                        {!currentUserName 
                                        ? <SingIn history = {history} app={this}/>
                                        : {
                                            'normal_user':<Dashboard history={history} app={this}/>,
                                            'doctor':<DoctorDashboard history={history} app={this}/>,
                                            'admin':<AdminDashboard history={history} app={this}/>

                                        }[currentUserType]
                                    }
                                    </div>
                                }}
                            />
                            
                            {/* <Route exact path="/" component={SignIn} />
                            <Route path="/SignUp" component={SignUp} />
                            <Route path="/Reset" component={Reset} />
                            <Route
                                path="/questionnaire/"
                                component={Questionnaire}
                            />
                            <Route path="/qaAdmin/" component={QAAdmin} />
                            <Route path="/qa/" component={QA} />
                            <Route path="/dashboard/" component={Dashboard} />
                            <Route path="/user1/" component={UserProfile} />
                            <Route path="/user2/" component={User2Profile} />
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
                            /> */}
                        </Switch>
                    </Router>
                </React.Fragment>
        );
    }
}

export default App;
