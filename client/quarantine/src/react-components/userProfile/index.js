import React from "react";
import UserBrief from "./userBrief";
import UserDetails from "./userDetails";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "User1",
            age: 24,
            userType: "User",
            avatar: require("./sampleprofile.png"),
            selfIsoProg: 66,
            gender: "Male",
            description: "Today is a nice day",
            region: "Toronto",
        };
    }
    handleUpdate = (
        nameUpdate,
        genderUpdate,
        ageUpdate,
        cityUpdate,
        descriptionUpdate
    ) => {
        this.setState({
            name: nameUpdate,
            gender: genderUpdate,
            age: ageUpdate,
            region: cityUpdate,
            description: descriptionUpdate,
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
                                    name={this.state.name}
                                    gender={this.state.gender}
                                    age={this.state.age}
                                    region={this.state.region}
                                    description={this.state.description}
                                    changePhoto={this.changePhoto}
                                />
                            </div>
                            <div className="col col-lg-8">
                                <UserDetails
                                    onUpdateClick={this.handleUpdate}
                                />
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
