import React, { Component } from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import {getAllNormalUsers} from "../../actions/admin"
import Users from "./Users"
import {uid} from 'react-uid';


export class UserList extends Component {
    constructor(props){
        super(props);
      }

    componentDidMount() {
        getAllNormalUsers(this);
        console.log("componentDidMount");
      }

    state={
        userList:[]
    };

    render() {
        const{app} = this.props;
        console.log(app.state.currentUserName);
        const {userList} = this.state.userList;
        console.log(userList);
        return (
            <table class="table">
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
        );
    }
}

export default UserList;
