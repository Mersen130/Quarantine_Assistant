import React from "react";
import {deleteDoctor} from "./adminDashboardActions";



class Users extends React.Component{

	constructor(props){
		super(props);
	}
		render(){
		const {user, component}=this.props;
		return(
			<tr>
                <td>{user._id}</td>
                <td>{user.userName}</td>
                <td>{user.email}</td>
                <td>{user.quarantineStartDate}</td>
                <td>{user.region}</td>
                <td>
                    <button class = "userDelete"
                        onClick={()=>{
                            removeUser(user, component);
                        }}
                    >
                        Delete the User
                    </button>
                </td>
            </tr>
			
			);

	}

}
export default Users;