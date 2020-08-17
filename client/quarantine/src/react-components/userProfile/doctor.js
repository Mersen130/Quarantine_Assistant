import React from "react";
import DoctorBrief from "./doctorBrief";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
import Recent from "./recent";
import profileServerCall from "./profileServerCall"
import UserDetails from "./userDetails"

class DoctorProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/DoctorProfile");
        const loadUser = profileServerCall.loadUser.bind(this);
        // console.log(this);
        this.state = {
        };
        // console.log(this.props.location);
        // console.log(this.props.location.state);
        
        if (!this.props.location.state){
            loadUser(undefined);
        } else{
            loadUser(this.props.location.state.clickedUser);
        }
    }
    render() {
        if (!this.state.userName){
            return <div></div>;
        }
        if (this.state.userType !== "doctor") this.props.history.push("UserProfile");  // only exists when doctor access himself through sidebar
        return (
            <div>
                <Sidebar userName={this.state.loggedinUser.userName} title={"Profile"} />
                <div className="main-content-container px-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className=" row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="Doctor Profile"
                                subtitle=""
                                className="text-sm-left"
                            />
                            <PageTitle
                                title="Recent activities"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <div className="row">
                            <div className="col col-lg-4">
                                <DoctorBrief 
                                    name={this.state.userName}
                                    gender={this.state.gender}
                                    age={this.state.age}
                                    region={this.state.region}
                                    bio={this.state.bio}
                                    changePhoto={this.changePhoto}
                                />
                            </div>
                            <div className="col col-lg-8">
                            {this.state.allowModification && <UserDetails
                                    name={this.state.userName}
                                    gender={this.state.gender}
                                    age={this.state.age}
                                    region={this.state.region}
                                    bio={this.state.bio}
                                    onUpdateClick={this.handleUpdate}
                                />}
                                <Recent recentAct={this.state.actInfo} username={this.state.userName} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorProfile;
