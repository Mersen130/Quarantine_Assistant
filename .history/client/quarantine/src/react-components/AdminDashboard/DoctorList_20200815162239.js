import React, { Component } from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import {getAllDoctors} from "../../actions/admin"
import Doctors from "./Doctors";
import {uid} from 'react-uid';

class DcotorList extends React.Component{
    componentDidMount() {
        console.log("componentDidMount") ;
        getAllDoctors(this);
        
    }
    state={
        doctorList:[]
    }
	render(){
        const userList = this.state.doctorList;
		return(
            <div>
            <SidebarAdmin title={"Doctor List"} />
			<table class="table">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">User Id</th>
                        <th scope="col">User Name</th>
                        <th scope="col">User Email</th>
                       <th scope="col">Date start quarantine</th>
                        <th scope="col">Region</th>
                        <th scope="col">Operation</th>
                    </tr>
            </thead>
				<tbody>
					{userList.map(user =>
						<Users
							key={uid(user)}
							user={user}
							component={this}
						/>
						)}	
				</tbody>
			</table>
            </div>
			);

	}
}
export default DoctorList;
