import React from "react";
import AdminBrief from "./adminBrief";
import PageTitle from "./../theme/PageTitle";
import Sidebaradmin from "./../SideNavBar/sidebarAdmin";
import Recent from "./recent";
// TODO: More realistic profile view and Unify user type interface
class AdminProfile extends React.Component {
    render() {
        return (
            <div>
                <Sidebaradmin title={"Profile"} />
                <div className="main-content-container px-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4">
                            <PageTitle
                                sm="4"
                                title="Admin Profile"
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
                                <AdminBrief />
                            </div>
                            <div className="col col-lg-8">
                                <Recent view="other" username="admin" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminProfile;
