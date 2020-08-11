import React from "react";
import User2Brief from "./user2Brief";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
import Recent from "./recent";
class User2Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/UserProfile");
        const loadUser = profileServerCall.loadUser.bind(this);
        const userInfo = loadUser();
        this.state = {
            userName: userInfo.userName,
            age: userInfo.age,
            userType: userInfo.userType,
            avatar: require("./sampleprofile.png"),
            quarantineProgress: Math.floor((new Date() - new Date(userInfo.quarantineProgress))/ (1000*60*60*24)), // get progress percentage
            gender: userInfo.region,
            bio: userInfo.selfDescription,
            region: userInfo.region,
        };
    }

    render() {
        return (
            <div>
                <Sidebar title={"Profile"} />
                <div className="main-content-container px-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="User Profile"
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
                                <User2Brief 
                                    name={this.state.userName}
                                    gender={this.state.gender}
                                    age={this.state.age}
                                    region={this.state.region}
                                    bio={this.state.bio}
                                    changePhoto={this.changePhoto}/>
                            </div>
                            <div className="col col-lg-8">
                                <Recent view="other" username="user2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User2Profile;
