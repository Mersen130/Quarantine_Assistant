import React, { Component } from "react";
class StatCard extends Component {
    render() {
        return (
            <div>
                <div className="stats-small stats-small--1 card small">
                    <div className="card-body p-0 d-flex">
                        <div className="d-flex flex-column m-auto">
                            <div className="stats-small__data text-center">
                                <span className="stats-small__label text-uppercase">
                                    
                                        <a href="/UserList">
                                            Users
                                        </a>
                                    
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default StatCard;
