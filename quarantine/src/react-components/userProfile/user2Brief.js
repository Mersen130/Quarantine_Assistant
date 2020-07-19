import React from "react";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Progress,
} from "shards-react";
class User2Brief extends React.Component {
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
          <i className="fas fa-venus"></i>
          <span>, {this.props.age}</span>
          <span className="text-muted d-block mb-2">{this.props.region}</span>
          {/* <Button pill outline size="sm" className="mb-2">
            <i className="material-icons mr-1">person_add</i> Follow
          </Button> */}
        </CardHeader>
        <ListGroup flush>
          <ListGroupItem className="px-4">
            <div className="progress-wrapper">
              <strong className="text-muted d-block mb-2">
                Quarantine Progress
              </strong>
              <Progress className="progress-sm" value={this.props.selfIsoProg}>
                <span className="progress-value">
                  {this.props.selfIsoProg}%
                </span>
              </Progress>
            </div>
          </ListGroupItem>
          <ListGroupItem className="p-4">
            <strong className="text-muted d-block mb-2">Description</strong>
            <span>{this.props.description}</span>
          </ListGroupItem>
        </ListGroup>
      </Card>
    );
  }
}
User2Brief.defaultProps = {
  name: "User2",
  age: 18,
  userType: "User",
  avatar: require("./../lib/profilephotos/user2.png"),
  selfIsoProg: 20,
  gender: "Female",
  description: "I love bubble tea!",
  region: "Toronto",
};

export default User2Brief;
