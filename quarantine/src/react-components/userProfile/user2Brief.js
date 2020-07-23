import React from "react";
class User2Brief extends React.Component {
    render() {
        return (
            <div className="card small mb-4 pt-3">
                <div className="card-header border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        <img
                            className="rounded-circle"
                            src={this.props.avatar}
                            alt={this.props.name}
                            width="110"
                        />
                    </div>
                    <h4 className="mb-0">{this.props.name}</h4>{" "}
                    <i className="fas fa-venus"></i>
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
                                    style={{ width: "20%" }}
                                    aria-valuenow="20"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    role="progressbar"
                                >
                                    <span className="progress-value">
                                        {this.props.selfIsoProg}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 list-group-item">
                        <strong className="text-muted d-block mb-2">
                            Description
                        </strong>
                        <span>{this.props.description}</span>
                    </div>
                </div>
            </div>
        );
    }
}
User2Brief.defaultProps = {
    name: "User2",
    age: 18,
    userType: "User",
    avatar: require("../../lib/profilephotos/user2.png"),
    selfIsoProg: 20,
    gender: "Female",
    description: "I love bubble tea!",
    region: "Toronto",
};

export default User2Brief;
