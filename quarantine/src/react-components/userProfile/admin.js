import React from "react";
import { Container, Row, Col } from "shards-react";
import AdminBrief from "./adminBrief";
import PageTitle from "./../theme/PageTitle";
import Sidebaradmin from "./../SideNavBar/sidebarAdmin";

// TODO: More realistic profile view and Unify user type interface
class AdminProfile extends React.Component {
    render() {
        return (
            <div>
                <Sidebaradmin title={"Profile"} />
                <Container fluid className="main-content-container px-4">
                    <Col
                        lg={{ size: 10, offset: 2 }}
                        md={{ size: 9, offset: 3 }}
                    >
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
