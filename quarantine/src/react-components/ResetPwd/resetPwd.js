import React from 'react';
import {Button, Form, FormGroup, Label, Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './resetPwd.css';


class Reset extends React.Component{

	render(){
		return(
		<div>
		<Form className= "resetForm">
			<Image id= "img" src='./../../media/calendar.png/40x40'roundedCircle/>
			<h3 >Forgot your password?
			</h3>
  			<Form.Group controlId="registedEmail">
          <Form.Label className = "label">Please Enter Your Registed Email Address</Form.Label>
    			<Form.Control type="email" placeholder=" Email Address*"/>
          <Form.Text className="text-muted">You will recieve a verification email, please check your mail box</Form.Text>
  			</Form.Group>
  			<Button variant="primary" type="submit">Submit</Button>
		</Form>
		</div>
			);

	}
}
export default Reset;