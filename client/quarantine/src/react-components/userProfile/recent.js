import React, { Component } from "react";

export class Recent extends Component {
    state = {
        otherRecentAct: [
            {
                type: "post",
                title: "Any suggestions for safe quarantine?",
                contentSketch:
                    "Hi all, I am wondering how to safely self-isolate myself. blahblahblah",
                time: "1 day ago",
            },
            {
                type: "activity",
                title: "Learn Java in 5 days",
                time: "2 days ago",
            },
        ],
        selfRecentAct: [
            {
                type: "activity",
                title: "Any suggestions for safe quarantine?",
                contentSketch:
                    "Hi all, I am wondering how to safely self-isolate myself. blahblahblah",
                time: "5 minutes ago",
            },
            {
                type: "activity",
                title: "Learn Java in 5 days",
                time: "10 hours ago",
            },
        ],
    };
    render() {
        let recentAct = this.state.otherRecentAct;
        // if (this.props.view === " ") {
        //     const recentAct = this.state.selfRecentAct;
        // }
        console.log(this.props.view);
        return (
            <div>
                {recentAct.map((act, idx) => (
                    <div class="card m-lg-3" style={{ width: "100%" }}>
                        <div class="card-body">
                            {act.type === "post" ? (
                                <h6 class="card-subtitle mb-2 text-muted">
                                    {this.props.view === "other" ? (
                                        <div>
                                            {this.props.username} asked a new
                                            question:
                                        </div>
                                    ) : (
                                        <div>
                                            {this.props.username} answered the
                                            question:
                                        </div>
                                    )}
                                    {/* {this.props.username} asked a new question: */}
                                </h6>
                            ) : (
                                <h6 class="card-subtitle mb-2 text-muted">
                                    {this.props.username} started a new
                                    activity:
                                </h6>
                            )}

                            <p class="card-text">{act.title}</p>
                            {act.type === "post" ? (
                                <a href="/qa" class="card-link">
                                    View here
                                </a>
                            ) : (
                                <a href="/activities" class="card-link">
                                    View here
                                </a>
                            )}
                            <p class="card-text">
                                <small class="text-muted">
                                    Last updated {act.time}
                                </small>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Recent;
