import React from "react";
import UserBrief from "./userBrief";
import UserDetails from "./userDetails";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
import SidebarAdmin from "./../SideNavBar/sidebarAdmin"
import profileServerCall from "./profileServerCall";
import Recent from "./recent"
import Sidebaradmin from "./../SideNavBar/sidebarAdmin";

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/UserProfile");
        const loadUser = profileServerCall.loadUser.bind(this);
        // console.log(this);
        this.state = {
            allowModification: !this.props.location.state,
        };
        // console.log(this.props.location);
        // console.log(this.props.location.state);
        
        if (!this.props.location.state){
            loadUser(undefined);
        } else{
            loadUser(this.props.location.state.clickedUser);
        }
    }
    handleUpdate = (
        nameUpdate,
        genderUpdate,
        ageUpdate,
        cityUpdate,
        bioUpdate
    ) => {
        const updateProfile = profileServerCall.updateProfile.bind(this)
        updateProfile(nameUpdate, genderUpdate, ageUpdate, cityUpdate, bioUpdate);
    };
    render() {
        if (!this.state.userName){
            return <div></div>;
        }
        return (
            <div>
                <input type="file" id="FileUpload1" style={{display: "none"}} 
                onChange={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    var file = e.target.files[0];
                    // a server call that sends file, seems like we dont have time for this
                }}/>
                {this.state.loggedinUser.userType == "admin"? <SidebarAdmin userName={this.state.loggedinUser.userName} title={"Profile"} /> : <Sidebar userName={this.state.loggedinUser.userName} title={"Profile"} />}
                <div className=" container-fluid main-content-container px-4">
                    <div className="col-lg-10 offset-lg-2">
                        <div
                            noGutters
                            className="row no-gutters page-header py-4 "
                        >
                            <PageTitle
                                sm="4"
                                title="User Profile"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <div className="row">
                            <div className="col col-lg-4">
                                <UserBrief
                                    type={this.state.userType}
                                    name={this.state.userName}
                                    gender={this.state.gender}
                                    age={this.state.age}
                                    region={this.state.region}
                                    bio={this.state.bio}
                                    changePhoto={this.changePhoto}
                                    quarantineStartDate={this.state.quarantineStartDate}
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

    changePhoto = () => {
        const uploader = document.getElementById("FileUpload1");
        uploader.click();
    }
}

export default UserProfile;
