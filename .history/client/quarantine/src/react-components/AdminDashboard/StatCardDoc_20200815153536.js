import React, { Component } from "react";
class StatCardDoc extends Component {
    render() {
        const{label} = this.props;
        return (
            <div>
                <div className="stats-small stats-small--1 card small">
                    <div className="card-body p-0 d-flex">
                        <div className="d-flex flex-column m-auto">
                            <div className="stats-small__data text-center">
                                <span className="stats-small__label text-uppercase">
                                    
                                        <a href="/DoctorList">
                                            Doctors
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

export default StatCardDoc;
