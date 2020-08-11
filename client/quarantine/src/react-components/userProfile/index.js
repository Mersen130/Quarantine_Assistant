import React from "react";
import UserBrief from "./userBrief";
import UserDetails from "./userDetails";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
import profileServerCall from "./profileServerCall"

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/UserProfile");
        const loadUser = profileServerCall.loadUser.bind(this);
        const userInfo = loadUser(this.props.location.state.clicledUser);
        this.state = {
            userName: userInfo.userName,
            age: userInfo.age,
            userType: userInfo.userType,
            avatar: require("./sampleprofile.png"),
            quarantineProgress: Math.floor((new Date() - new Date(userInfo.quarantineProgress))/ (1000*60*60*24)), // get progress percentage
            gender: userInfo.region,
            bio: userInfo.selfDescription,
            region: userInfo.region,
            allowModification: !this.props.location.state.clicledUser,
        };
    }
    handleUpdate = (
        nameUpdate,
        genderUpdate,
        ageUpdate,
        cityUpdate,
        bioUpdate
    ) => {
        this.setState({
            userName: nameUpdate,
            gender: genderUpdate,
            age: ageUpdate,
            region: cityUpdate,
            bio: bioUpdate,
        });
    };
    render() {
        return (
            <div>
                <input type="file" id="FileUpload1" style={{display: "none"}} 
                onChange={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    var file = e.target.files[0];
                    console.log(file);
                    // a server call that sends file
                }}/>
                <Sidebar title={"Profile"} />
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
                                    name={this.state.userName}
                                    gender={this.state.gender}
                                    age={this.state.age}
                                    region={this.state.region}
                                    bio={this.state.bio}
                                    changePhoto={this.changePhoto}
                                />
                            </div>
                            {this.state.allowModification && <div className="col col-lg-8">
                                <UserDetails
                                    name={this.state.userName}
                                    gender={this.state.gender}
                                    age={this.state.age}
                                    region={this.state.region}
                                    bio={this.state.bio}
                                    onUpdateClick={this.handleUpdate}
                                />
                            </div>}
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
