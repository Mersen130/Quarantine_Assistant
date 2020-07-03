import React, { Component } from "react";
import { Container, Col, Row } from "shards-react";
import Sidebar from "../SideNavBar/sidebar.js";
import PageTitle from "../theme/PageTitle";
import StatCard from "./StatCard";
import UserByGender from "./DivisionChart.js";
export class AdminDashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar title={"Dashboard"} />

        <Container fluid className="main-content-container px-4 pb-4">
          <Col lg={{ size: 10, offset: 2 }} md={{ size: 9, offset: 3 }}>
            <Row noGutters className="page-header py-4 ">
              <PageTitle
                sm="4"
                title="Admin Overview"
                subtitle="Dashboard"
                className="text-sm-left"
              />
            </Row>

            {/* overview cards*/}
            <Row>
              {this.props.cardsData.map((stats, idx) => (
                <Col className="col-lg mb-4" key={idx}>
                  <StatCard
                    label={stats.label}
                    value={stats.value}
                    percentage={stats.percentage}
                    increase={stats.increase}
                  />
                </Col>
              ))}
            </Row>
            <Row>
              <Col lg="6" className="mb-4">
                <UserByGender />
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

AdminDashboard.defaultProps = {
  cardsData: [
    {
      label: "Users",
      value: "1234",
      percentage: "4.7%",
      increase: "true",
    },
    {
      label: "Doctors",
      value: "56",
      percentage: "6%",
      increase: "true",
    },
    {
      label: "Questions",
      value: "4321",
      percentage: "3.6%",
      increase: "true",
    },
  ],
};
export default AdminDashboard;
