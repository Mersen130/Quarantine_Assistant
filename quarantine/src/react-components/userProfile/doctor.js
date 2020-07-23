import React from "react";
import DoctorBrief from "./doctorBrief";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
class DoctorProfile extends React.Component {
    render() {
        return (
            <div>
                <Sidebar title={"Profile"} />
                <div className="main-content-container px-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className=" row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="Doctor Profile"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <div className="row">
                            <div className="col col-lg-12">
                                <DoctorBrief />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorProfile;
