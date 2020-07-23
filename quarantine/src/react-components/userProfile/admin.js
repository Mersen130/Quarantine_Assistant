import React from "react";
import AdminBrief from "./adminBrief";
import PageTitle from "./../theme/PageTitle";
import Sidebaradmin from "./../SideNavBar/sidebarAdmin";

// TODO: More realistic profile view and Unify user type interface
class AdminProfile extends React.Component {
    render() {
        return (
            <div>
                <Sidebaradmin title={"Profile"} />
                <div className="main-content-container px-4 container-fluid">
                    <div
                        className="col"
                        lg={{ size: 10, offset: 2 }}
                        md={{ size: 9, offset: 3 }}
                    >
                        <div className="row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="Admin Profile"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <AdminBrief />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminProfile;
