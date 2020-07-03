import React from "react";
import { Button, Form, FormGroup, Label, Image } from "react-bootstrap";
import "./signIn.css";

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <Form className="signInForm">
          <Image src="./../../media/calendar.png40x40" roundedCircle />
          <h2 calssName="text-center">Sign In</h2>
          <Form.Group controlId="formEmail">
            <Form.Control type="email" placeholder=" Email Address*" />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Control type="password" placeholder=" Password*" />
          </Form.Group>
          <Form.Group controlId="formCheckbox">
            <Form.Check type="checkbox" label="Remeber me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          <Button variant="link" bsPrefix="reset">
            Forgot password?
          </Button>
          <Button variant="link" bsPrefix="signUp">
            Don't have an account? Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}
export default SignIn;
