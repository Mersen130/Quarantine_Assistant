import React, { Component } from "react";
import SidebarAdmin from "../SideNavBar/sidebarAdmin.js";
import PageTitle from "../theme/PageTitle";
export class UserList extends Component {
    // Also need to delete user from db
    deleteUser = (e) => {
        e.preventDefault();
        const row = e.target.parentNode.parentNode;
        row.remove();
    };
    render() {
        return (
            <div>
                <SidebarAdmin title={"Dashboard"} />
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
                                    <th scope="col">id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Region</th>
                                    <th scope="col">Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.userList.map((entry, idx) => (
                                    <tr>
                                        <th scope="row">{entry.uid}</th>
                                        <td>{entry.name}</td>
                                        <td>{entry.gender}</td>
                                        <td>{entry.age}</td>
                                        <td>{entry.region}</td>
                                        <td>
                                            {/* Change to unique uid url later */}
                                            <a href={"/" + entry.name}>
                                                View profile
                                            </a>
                                            <button
                                                type="button"
                                                class="btn btn-link ml-3 mb-1"
                                                onClick={this.deleteUser}
                                            >
                                                Delete user
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
UserList.defaultProps = {
    userList: [
        {
            uid: 1,
            name: "user1",
            gender: "male",
            age: 18,
            region: "Toronto",
        },
        {
            uid: 2,
            name: "user2",
            gender: "female",
            age: 19,
            region: "Toronto",
        },
        {
            uid: 3,
            name: "user3",
            gender: "male",
            age: 20,
            region: "Toronto",
        },
        {
            uid: 4,
            name: "user4",
            gender: "female",
            age: 22,
            region: "Toronto",
        },
        {
            uid: 5,
            name: "user5",
            gender: "male",
            age: 21,
            region: "Toronto",
        },
    ],
};
export default UserList;
