import React from "react";

class UserBrief extends React.Component {
    render() {
        return (
            <div className="card small mb-4 pt-3">
                <div className="card-header border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img
                            className="rounded-circle"
                            src={this.props.type == "admin"? require("../../lib/profilephotos/strange.png") : require("./sampleprofile.png")}
                            alt={this.props.name}
                            width="110"
                            alt="alternative text" 
                            title="Click to change profile photo."
                            onClick={this.props.changePhoto}
                        />
                    </div>
                    <h4 className="mb-0">{this.props.name}</h4>{" "}
                    {this.props.gender === "Male" ? (
                        <i className="fas fa-mars"></i>
                    ) : (
                        <i className="fas fa-venus"></i>
                    )}
                    <span>, {this.props.age}</span>
                    <span className="text-muted d-block mb-2">
                        {this.props.region}
                    </span>
                    {/* <Button pill outline size="sm" className="mb-2">
            <i className="material-icons mr-1">person_add</i> Follow
          </Button> */}
                </div>
                <div className="list-group-flush">
                    <div className="px-4 list-group-item">
                        <div className="progress-wrapper">
                            <strong className="text-muted d-block mb-2">
                                Quarantine Progress
                            </strong>
                            <div className="progress">
                                <div
                                    className={"progress-sm progress-bar"}
                                    style={{ width: `${this.props.quarantineStartDate}%` }}
                                    aria-valuenow="66"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    role="progressbar"
                                >
                                    <span className="progress-value">
                                        {this.props.quarantineStartDate}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 list-group-item">
                        <strong className="text-muted d-block mb-2">
                            Bio
                        </strong>
                        <span>{this.props.bio}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserBrief;
