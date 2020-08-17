import React from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import {getAllNormalUsers} from "../../actions/admin"
import Users from "./Users"
import {uid} from 'react-uid';
import "./users.css";


class UserList extends React.Component{
    componentDidMount() {
  
        getAllNormalUsers(this);
        
    }
    state={
        userList:[]
    }
	render(){
        const userList = this.state.userList;

        const {app} = this.props;
		return(
            
            <div>
            <SidebarAdmin title={"User List"}  userName={app.state.currentUserName} app={app}/>
             <div className="main-content-container px-4 pb-4 container-fluid" >
                    <div className="col-lg-10 offset-lg-2" id="userListPage">
                        <div className="row no-gutters page-header py-4 ">
                            <PageTitle
                                sm="4"
                                title="Admin Overview"
                                subtitle="Normal Users List"
                                className="text-sm-left"
                            />
                        </div>
                        <div className="row">
                            <div className="col-lg mb-4">
                                <div className="stats-small stats-small--1 card small">
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
export default UserList;
