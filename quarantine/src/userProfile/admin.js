import React from "react";
import { Container, Row, Col } from "shards-react";
import AdminBrief from "./adminBrief";
import PageTitle from "./../theme/PageTitle";
import Sidebar from "./../SideNavBar/sidebar";
class AdminProfile extends React.Component {
  render() {
    return (
      <div>
        <Sidebar title={"Profile"} />
        <Container fluid className="main-content-container px-4">
          <Col lg={{ size: 10, offset: 2 }} md={{ size: 9, offset: 3 }}>
            <Row noGutters className="page-header py-4 ">
              <PageTitle
                sm="4"
                title="Admin Profile"
                subtitle=""
                className="text-sm-left"
              />
            </Row>
            <Row>
              <Col lg="12">
                <AdminBrief />
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default AdminProfile;
