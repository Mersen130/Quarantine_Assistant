import React from "react";
import User2Brief from "./user2Brief";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
import Recent from "./recent";
class User2Profile extends React.Component {
    constructor(props) {
        super(props);
        this.props.history.push("/User2Profile");

        this.state = {
            name: "User1",
            age: 24,
            userType: "User",
            avatar: require("./sampleprofile.png"),
            selfIsoProg: 66,
            gender: "Male",
            bio: "Today is a nice day",
            region: "Toronto, CA",
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
                                <User2Brief />
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
