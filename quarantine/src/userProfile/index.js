import React from "react";
import { Container, Row, Col } from "shards-react";
import UserBrief from "./userBrief";
import UserDetails from "./userDetails";

class UserProfile extends React.Component {
  render() {
    return (
      <Container fluid className="main-content-container px-4">
        <Row>
          <Col lg="4">
            <UserBrief />
          </Col>
          <Col lg="8">
            <UserDetails />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserProfile;
