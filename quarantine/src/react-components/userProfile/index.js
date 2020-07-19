import React from "react";
import { Container, Row, Col } from "shards-react";
import UserBrief from "./userBrief";
import UserDetails from "./userDetails";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "User1",
      age: 24,
      userType: "User",
      avatar: require("./sampleprofile.png"),
      selfIsoProg: 66,
      gender: "Male",
      description: "Today is a nice day",
      region: "Toronto",
    };
  }
  handleUpdate = (
    nameUpdate,
    genderUpdate,
    ageUpdate,
    cityUpdate,
    descriptionUpdate
  ) => {
    this.setState({
      name: nameUpdate,
      gender: genderUpdate,
      age: ageUpdate,
      region: cityUpdate,
      description: descriptionUpdate,
    });
  };
  render() {
    return (
      <div>
        <Sidebar title={"Profile"} />
        <Container fluid className="main-content-container px-4">
          <Col lg={{ size: 10, offset: 2 }} md={{ size: 9, offset: 3 }}>
            <Row noGutters className="page-header py-4 ">
              <PageTitle
                sm="4"
                title="User Profile"
                subtitle=""
                className="text-sm-left"
              />
            </Row>
            <Row>
              <Col lg="4">
                <UserBrief
                  name={this.state.name}
                  gender={this.state.gender}
                  age={this.state.age}
                  region={this.state.region}
                  description={this.state.description}
                />
              </Col>
              <Col lg="8">
                <UserDetails onUpdateClick={this.handleUpdate} />
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default UserProfile;
