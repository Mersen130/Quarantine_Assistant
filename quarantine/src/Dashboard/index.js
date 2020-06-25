import React from "react";
import { Card, Row, Button, Col, Container } from "shards-react";
import ProgressCheck from "./ProgressCheck";
import ContentCard from "./ContentCard";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className="main-content-container px-xl-5">
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
