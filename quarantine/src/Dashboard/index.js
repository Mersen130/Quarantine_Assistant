import React from "react";
import { Row, Col, Container } from "shards-react";
import ProgressCheck from "./ProgressCheck";
import ContentCard from "./ContentCard";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className="main-content-container px-4 pb-4">
          <h2>Your quarantine progress:</h2>
          <Row>
            <Col lg="12">
              <ProgressCheck />
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <ContentCard category="Tips" />
            </Col>
            <Col lg="6">
              <ContentCard category="News" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
