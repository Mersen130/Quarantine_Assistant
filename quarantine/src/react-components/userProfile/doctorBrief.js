import React from "react";
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Progress,
} from "shards-react";
class DoctorBrief extends React.Component {
    render() {
        return (
            <Card small className="mb-4 pt-3">
                <CardHeader className="border-bottom text-center">
                    <div className="mb-3 mx-auto">
                        {/* TODO: Add servel call to retrieve user info from user DB*/}
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
                        <i className="material-icons mr-1">verified</i>{" "}
                        Certified Doctor
                    </div>
                </CardHeader>
                <ListGroup flush>
                    <ListGroupItem className="p-4">
                        <strong className="text-muted d-block mb-2">
                            Specialization
                        </strong>
                        <span>General Pathology</span>
                    </ListGroupItem>
                    <ListGroupItem className="p-4">
                        <strong className="text-muted d-block mb-2">
                            Description
                        </strong>
                        <span>{this.props.description}</span>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}
DoctorBrief.defaultProps = {
    name: "Yuqiu Zhang",
    age: 42,
    userType: "Doctor",
    avatar: require("../../lib/profilephotos/user3.png"),
    //   selfIsoProg: 20,
    gender: "Male",
    description: "Feel free to ask me questions!",
    region: "Toronto",
};

export default DoctorBrief;
