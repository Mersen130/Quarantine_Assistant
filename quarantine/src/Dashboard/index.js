import React from "react";
import {
  Row,
  Col,
  Container,
  Alert,
  Card,
  CardHeader,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Button,
} from "shards-react";
import ProgressCheck from "./ProgressCheck";
import ContentCard from "./ContentCard";
import Sidebar from "../SideNavBar/sidebar.js";
import PageTitle from "../theme/PageTitle";
import "shards-ui/dist/css/shards.min.css";
import "./../theme/theme.css";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  render() {
    return (
      <div>
        <Sidebar title={"Dashboard"} />

        <Container fluid className="main-content-container px-4 pb-4">
          <Col lg={{ size: 10, offset: 2 }} md={{ size: 9, offset: 3 }}>
            <Row noGutters className="page-header py-4 ">
              <PageTitle
                sm="4"
                title="Quarantine Progress"
                subtitle="Dashboard"
                className="text-sm-left"
              />
            </Row>
            <Alert theme="dark">
              Your self-isolation started at July 2nd, 2020.
            </Alert>
            <Row>
              <Col lg="8">
                <ProgressCheck />
              </Col>
              <Col lg="4" className="mb-4">
                <Card small className="mb-4">
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Check-in Today!</h6>
                  </CardHeader>
                  <InputGroup seamless className="mb-3">
                    <FormInput placeholder="Today's Temprature" id="temp" />
                    <InputGroupAddon type="append">
                      <Button
                        theme="info"
                        id="checkin"
                        onClick={this.updateCal}
                      >
                        Checkin
                      </Button>
                    </InputGroupAddon>
                  </InputGroup>
                </Card>
                <Alert theme="success" open={this.state.visible}>
                  You've successfully checked in today!
                </Alert>
              </Col>
            </Row>
            <hr></hr>
            <Row>
              <PageTitle
                sm="4"
                title="COVID-19 related:"
                subtitle=""
                className="text-sm-left"
              />
            </Row>
            <Row>
              <Col lg="6">
                <ContentCard category="Tips" />
              </Col>
              <Col lg="6">
                <ContentCard category="News" />
              </Col>
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
  updateCal = (e) => {
    e.preventDefault();
    const today = new Date();
    this.setState({
      visible: true,
    });
  };
}

export default Dashboard;
