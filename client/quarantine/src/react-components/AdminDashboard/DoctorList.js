import React, { Component } from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import {getAllDoctors} from "../../actions/admin"
import Doctors from "./Doctors";
import {uid} from 'react-uid';
import "./users.css";

class DoctorList extends React.Component{
    componentDidMount() {
 
        getAllDoctors(this);
        
    }
    state={
        doctorList:[]
    }
	render(){
        const doctorList = this.state.doctorList;
        const {app} = this.props;
		return(
            <div>
            <SidebarAdmin title={"Doctor List"}  userName={app.state.currentUserName} app={app}/>
            <div className="main-content-container px-4 pb-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2 " id="doctorListPage">
                        <div className="row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="Admin Overview"
                                subtitle="Doctors List"
                                className="text-sm-left"
                            />
                        </div>
                        <div className="row doctorTable">
                            <div className="col-lg mb-4">
                                <div className="stats-small stats-small--1 card small" id ="userListTable">
                                    <div className="card-body p-0 d-flex">
                                        <div className="d-flex flex-column m-auto">
                                            <div className="stats-small__data text-center">
                                                 <span className="stats-small__label text-uppercase">
                                                    <table class="table table-hover">
                                                        <thead >
                                                            <tr>
                                                                <th scope="col">User Id</th>
                                                                <th scope="col">User Name</th>
                                                                <th scope="col">User Email</th>
                                                            <th scope="col">Doctor Certificate NO*</th>
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
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>

            </div>
			);

	}
}
export default DoctorList;
