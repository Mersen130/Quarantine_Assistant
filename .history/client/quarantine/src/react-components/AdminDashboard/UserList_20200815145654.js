import React, { Component } from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import {getAllNormalUsers} from "../../actions/admin"
export class UserList extends Component {
    componentDidMount() {
        getAllNormalUsers(this);
      }

    state={
        userList:[]
    };

    render() {
        const {userList} = this.state.userList;
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
                                    <th scope="col">User Id</th>
                                    <th scope="col">User Name</th>
                                    <th scope="col">User Email</th>
                                    <th scope="col">Date start quarantine</th>
                                    <th scope="col">Region</th>
                                    <th scope="col">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                            {myActs.map(myAct =>
                                <MyActivities
                                    key={uid(myAct)}
                                    myAct={myAct}
                                    queueComponent={queueComponent}
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

export default UserList;
