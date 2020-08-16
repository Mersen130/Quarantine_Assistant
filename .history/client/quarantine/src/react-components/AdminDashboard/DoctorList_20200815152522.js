import React, { Component } from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import {getAllDoctors} from "../../actions/admin"
import Doctors from "./Doctors";
import {uid} from 'react-uid';

export class DoctorList extends Component {
    componentDidMount() {
        getAllDoctors(this);
      }

    state={
        doctorList:[]
    };

    render() {
        const {doctorList}= this.state.doctorList;
        return (
            <div>
                <SidebarAdmin title={"User List"} />
                <div className="main-content-container px-4 pb-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="User list"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>
                        <table class="table table-striped table-bordered">
                            <thead class="thead-light">
                                <tr>
                                    <th scope="col">Doctor Id</th>
                                    <th scope="col">Doctor Name</th>
                                    <th scope="col">Doctor Email</th>
                                    <th scope="col">Doctor Certificate No*</th>
                                    <th scope="col">Region</th>
                                    <th scope="col">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                            {doctorList.map(doc =>
                                <Doctors
                                    key={uid(doc)}
                                    doctor={doc}
                                    component={this}
                                />
						)}	
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorList;
