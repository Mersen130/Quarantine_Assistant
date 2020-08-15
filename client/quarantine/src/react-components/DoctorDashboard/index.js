import React, { Component } from "react";
import Sidebar from "../SideNavBar/sidebar.js";
import PageTitle from "../theme/PageTitle";

export class DoctorDashboard extends Component {
    state = {
        notifiLists: [
            {
                username: "user1",
                uid: "1",
                type: "request",
            },
            {
                username: "user2",
                uid: "2",
                type: "reply",
            },
            {
                username: "user3",
                uid: "3",
                type: "reply",
            },
            {
                username: "user4",
                uid: "4",
                type: "request",
            },
            {
                username: "user5",
                uid: "5",
                type: "reply",
            },
        ],
    };
    render() {
        const requests = this.state.notifiLists.filter(
            (note) => note.type === "request"
        );
        const replies = this.state.notifiLists.filter(
            (note) => note.type === "reply"
        );
        return (
            <div>
                <Sidebar userName="user" title={"Dashboard"} />
                <div className=" main-content-container px-4 pb-4 container-fluid">
                    <div className="col-lg-10 offset-lg-2">
                        <div className="row no-gutters page-header py-4">
                            <PageTitle
                                sm="4"
                                title="Requests for my answer"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>

                        {requests.map((post, idx) => (
                            <div class="alert alert-warning" role="alert">
                                User{" "}
                                <a
                                    href={"/" + post.username}
                                    class="alert-link"
                                >
                                    {post.username}
                                </a>{" "}
                                asked you a question. Take a look{" "}
                                {/* Add corresponding post link here */}
                                <a href="/qa" class="alert-link">
                                    here
                                </a>
                                .
                            </div>
                        ))}

                        <div className="row no-gutters page-header py-4">
                            <PageTitle
                                sm="4"
                                title="Replies to my answer"
                                subtitle=""
                                className="text-sm-left"
                            />
                        </div>

                        {replies.map((post, idx) => (
                            <div class="alert alert-info" role="alert">
                                User{" "}
                                <a
                                    href={"/" + post.username}
                                    class="alert-link"
                                >
                                    {post.username}
                                </a>{" "}
                                has replied to your answer. Take a look{" "}
                                {/* Add corresponding post link here */}
                                <a href="/qa" class="alert-link">
                                    here
                                </a>
                                .
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default DoctorDashboard;
