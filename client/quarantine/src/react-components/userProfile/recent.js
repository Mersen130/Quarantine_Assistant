import React, { Component } from "react";

export class Recent extends Component {
    constructor(props){
        super(props);
        this.state = {
            RecentAct: this.props.recentAct
        }
    }

    render() {
        let recentAct = this.state.RecentAct;
        // if (this.props.view === " ") {
        //     const recentAct = this.state.selfRecentAct;
        // }
        return (
            <div>
                {recentAct.map((act, idx) => (
                    <div class="card m-lg-3" style={{ width: "100%" }}>
                        <div class="card-body">
                            {act.type === "post" ? (
                                <h6 class="card-subtitle mb-2 text-muted">
                                        <div>
                                            {this.props.username} interacted with a post:
                                        </div>
                                    {/* {this.props.username} asked a new question: */}
                                </h6>
                            ) : (
                                <h6 class="card-subtitle mb-2 text-muted">
                                    {this.props.username} started a new
                                    activity:
                                </h6>
                            )}

                            {act.type === "post" ? (
                                <div>
                                    <p class="card-text">{act.contentSketch}</p>
                                    <a href="/qa" class="card-link">
                                        View here
                                    </a>

                                    <p class="card-text">
                                        <small class="text-muted">
                                        Last updated {act.time}
                                        </small>
                                    </p>
                                </div>
                            ) : (
                                <div>
                                    <p class="card-text">{act.title}</p>
                                    <a href="/activities" class="card-link">
                                        View here
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Recent;
