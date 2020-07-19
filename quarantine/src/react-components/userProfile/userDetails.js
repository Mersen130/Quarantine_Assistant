import React from "react";
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button,
} from "shards-react";

class UserDetails extends React.Component {
    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Account Details</h6>
                </CardHeader>
                {/* TODO: Add servel call to retrieve user info from user DB*/}

                <ListGroup flush>
                    <ListGroupItem className="p-3">
                        <Row>
                            <Col>
                                <Form>
                                    <Row form>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feFirstName">
                                                First Name
                                            </label>
                                            <FormInput
                                                id="feFirstName"
                                                placeholder="First Name"
                                                // value="Quincy"
                                                onChange={() => {}}
                                            />
                                        </Col>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feLastName">
                                                Last Name
                                            </label>
                                            <FormInput
                                                id="feLastName"
                                                placeholder="Last Name"
                                                // value="Zhang"
                                                onChange={() => {}}
                                            />
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feEmail">
                                                Email
                                            </label>
                                            <FormInput
                                                type="email"
                                                id="feEmail"
                                                placeholder="Email Address"
                                                // value="123@gmail.com"
                                                onChange={() => {}}
                                                autoComplete="email"
                                            />
                                        </Col>
                                        <Col md="3" className="form-group">
                                            <label htmlFor="feAge">Age</label>
                                            <FormInput
                                                type="number"
                                                id="feAge"
                                                placeholder="Age"
                                                // value="24"
                                                onChange={() => {}}
                                            />
                                        </Col>
                                        <Col md="3" className="form-group">
                                            <label htmlFor="feGender">
                                                Gender
                                            </label>
                                            <FormSelect id="feInputGender">
                                                {/* <option>Choose...</option> */}
                                                <option>Male</option>
                                                <option>Female</option>
                                            </FormSelect>
                                        </Col>
                                    </Row>
                                    <FormGroup>
                                        <label htmlFor="feAddress">
                                            Address
                                        </label>
                                        <FormInput
                                            id="feAddress"
                                            placeholder="Address"
                                            // value="10 St. George"
                                            onChange={() => {}}
                                        />
                                    </FormGroup>
                                    <Row form>
                                        <Col md="6" className="form-group">
                                            <label htmlFor="feCity">City</label>
                                            <FormInput
                                                id="feCity"
                                                placeholder="City"
                                                // value="Toronto"
                                                onChange={() => {}}
                                            />
                                        </Col>
                                        <Col md="4" className="form-group">
                                            <label htmlFor="feInputState">
                                                State
                                            </label>
                                            <FormSelect id="feInputState">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </FormSelect>
                                        </Col>
                                    </Row>
                                    <Row form>
                                        <Col md="12" className="form-group">
                                            <label htmlFor="feDescription">
                                                Description
                                            </label>
                                            <FormTextarea
                                                id="feDescription"
                                                rows="5"
                                            />
                                        </Col>
                                    </Row>
                                    <Button
                                        theme="info"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const fName = document.querySelector(
                                                "#feFirstName"
                                            ).value;
                                            const lName = document.querySelector(
                                                "#feLastName"
                                            ).value;
                                            const name = fName + " " + lName;
                                            const gender = document.querySelector(
                                                "#feInputGender"
                                            ).value;
                                            const age = document.querySelector(
                                                "#feAge"
                                            ).value;
                                            const city = document.querySelector(
                                                "#feCity"
                                            ).value;
                                            const description = document.querySelector(
                                                "#feDescription"
                                            ).value;
                                            this.props.onUpdateClick(
                                                name,
                                                gender,
                                                age,
                                                city,
                                                description
                                            );
                                        }}
                                    >
                                        Update Account
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}
UserDetails.defaultProps = {
    title: "Account Details",
};

export default UserDetails;
