import React from 'react';
import {Button, Form, Image, Row, Col,FormGroup, Label, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';


class SignUp extends React.Component{

	render(){
		return(
		<div>
		<Form className = "signUpForm">
			<Image src="./../../media/calendar.png/40x40" roundedCircle/>
			<h2 calssName = "signUp">Sign Up
			</h2>
  			<Form.Row>
    			<Form.Group as={Col} controlId="formGridFirstName">
      				<Form.Control type="firstName" placeholder="First Name*" />
    			</Form.Group>
				<Form.Group as={Col} controlId="formGridLastName">
      				<Form.Control type="lastName" placeholder="Last Name*" />
    			</Form.Group>
  			</Form.Row>
			<Form.Group controlId="formGridEmail">
    			<Form.Control placeholder="Email Address*" />
  			</Form.Group>
			 <Form.Group controlId="formGridPassword">
    			<Form.Control placeholder="Password*" />
  			</Form.Group>
  			<Form.Group controlId = "formGridDocId">
  				<Form.Control placeholder = "Doctor certificate No *" />
  			</Form.Group>
  			<Form.Group controlId="formGridCheckbox">
    			<Form.Check type="checkbox" label="I want to recieve notifications via email" />
  			</Form.Group>
			<Button variant="primary" type="submit">Sign Up</Button>
        		<Button variant = "link">Already have an account? Sign In</Button>
    </Form>
		</div>
			);

	}
}
export default SignUp;
