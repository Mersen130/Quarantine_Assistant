import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Progress,
} from "shards-react";
class AdminBrief extends React.Component {
  render() {
    return (
      <Card small className="mb-4 pt-3">
        <CardHeader className="border-bottom text-center">
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
          <span className="text-muted d-block mb-2">{this.props.region}</span>
          <div className="p-3">
            <i className="material-icons mr-1">admin_panel_settings</i> Admin
          </div>
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">Description</strong>
            <span>{this.props.description}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
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
  description:
    "I went forward in time to view alternate futures. To see all the possible outcomes of the coming conflict. Only one time did we win.",
  region: "Toronto",
};

export default AdminBrief;
