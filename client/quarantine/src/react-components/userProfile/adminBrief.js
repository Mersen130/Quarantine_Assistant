import React from "react";
class AdminBrief extends React.Component {
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
                    <i className="fas fa-mars"></i>
                    <span>, {this.props.age}</span>
                    <span className="text-muted d-block mb-2">
                        {this.props.region}
                    </span>
                    <div className="p-3">
                        <i className="material-icons mr-1">
                            admin_panel_settings
                        </i>{" "}
                        Admin
                    </div>
                </div>
                <div className="list-group-flush">
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
AdminBrief.defaultProps = {
    name: "Dr. Strange",
    age: 35,
    userType: "Admin",
    avatar: require("../../lib/profilephotos/strange.png"),
    //   selfIsoProg: 20,
    gender: "Male",
    bio:
        "I went forward in time to view alternate futures. To see all the possible outcomes of the coming conflict. Only one time did we win.",
    region: "Toronto",
};

export default AdminBrief;
