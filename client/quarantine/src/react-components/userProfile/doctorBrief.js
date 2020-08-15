import React from "react";
class DoctorBrief extends React.Component {
    render() {
        return (
            <div className="card small mb-4 pt-3">
                <div className="card-header border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        {/* TODO: Add servel call to retrieve user info from user DB*/}
                        <img
                            className="rounded-circle"
                            src={require("./sampleprofile.png")}
                            alt={this.props.name}
                            width="110"
                        />
                    </div>
                    <h4 className="mb-0">{this.props.name}</h4>{" "}
                    <i className="fas fa-mars"></i>
                    <span>, {this.props.age}</span>
                    <span className="text-muted d-block mb-2">
                        {this.props.region}
                    </span>
                    <div className="p-3">
                        <i className="material-icons mr-1">verified</i>{" "}
                        Certified Doctor
                    </div>
                </div>
                <div className="list-group-flush">
                    <div className="p-4 list-group-item">
                        <strong className="text-muted d-block mb-2">
                            Specialization
                        </strong>
                        <span>General Pathology</span>
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

export default DoctorBrief;
