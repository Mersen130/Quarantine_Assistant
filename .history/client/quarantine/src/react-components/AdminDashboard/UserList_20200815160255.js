import React from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
import {getAllNormalUsers} from "../../actions/admin"
import Users from "./Users"
import {uid} from 'react-uid';


export class UserList extends Component {
    constructor(props){
        super(props);
      }


    state={
        userList:[]
    };
    componentDidMount() {
       getAllNormalUsers(this);
       console.log("componentDidMount") ;
      }


    render() {
        const{app} = this.props;
        console.log(app.state.currentUserName);
        const {userList} = this.state.userList;
        console.log(userList);
        return (
            // <div>
            //     <SidebarAdmin title={"User List"} />
            //     <div className="main-content-container px-4 pb-4 container-fluid">
            //         <div className="col-lg-10 offset-lg-2">
            //             <div className="row no-gutters page-header py-4 ">
            //                 <PageTitle
            //                     sm="4"
            //                     title="User list"
            //                     subtitle=""
            //                     className="text-sm-left"
            //                 />
            //             </div>
            //             <table class="table table-striped table-bordered">
            //                 <thead class="thead-light">
            //                     <tr>
            //                         <th scope="col">User Id</th>
            //                         <th scope="col">User Name</th>
            //                         <th scope="col">User Email</th>
            //                         <th scope="col">Date start quarantine</th>
            //                         <th scope="col">Region</th>
            //                         <th scope="col">Operation</th>
            //                     </tr>
            //                 </thead>
            //                 <tbody>
            //                 {userList.map(user =>
            //                     <Users
            //                         key={uid(user)}
            //                         user={user}
            //                         component={this}
            //                     />
			// 			)}	
            //                 </tbody>
            //             </table>
            //         </div>
            //     </div>
            // </div>
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
