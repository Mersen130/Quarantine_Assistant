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
}

export default UserProfile;
