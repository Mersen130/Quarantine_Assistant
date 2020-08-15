import React from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import {getAllNormalUsers} from "../../actions/admin"
import Users from "./Users"
import {uid} from 'react-uid';


class DoctorList extends React.Component{
    componentDidMount() {
        console.log("componentDidMount") ;
        getAllNormalUsers(this);
        
    }
    state={
        userList:[]
    }
	render(){
        const userList = this.state.userList;
		return(
            <div>
            <SidebarAdmin title={"User List"} />
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
