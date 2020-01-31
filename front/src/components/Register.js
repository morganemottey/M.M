
import React from 'react';
import { Col, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Header from './Header'
import Footer from './Footer'


const Register = (props) => {
  return (
    <>
    <Header/>
    
    <Form style={{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                flexFlow: "column nowrap "
            }}>
               <img src={require("../img/bfb37ccfcca4632dbbe5cf86a80414bd.jpg")} style={{ "width": "205px" }} id="icon" alt="User Icon" />
    
      <Container style={{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                flexFlow: "column nowrap "
            }}>
        <Col md={6}>
        <FormGroup style={{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                flexFlow: "column nowrap "
            }}>
            <Label for="exampleEmail">Email</Label>
            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
          </FormGroup>
        </Col>
        <Col md={6}>
        <FormGroup style={{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                flexFlow: "column nowrap "
            }}>
            <Label for="examplePassword">Password</Label>
            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
          </FormGroup>
        </Col>
      </Container>
      <Container style={{
                display : "flex",
                justifyContent : "left",
                alignItems : "left",
                flexFlow: "column nowrap "
            }}>
      <FormGroup>
        <Label for="exampleAddress">Address</Label>
        <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
      </FormGroup>
      <FormGroup>
        <Label for="exampleAddress2">Address 2</Label>
        <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
      </FormGroup>
      </Container>
      <Container style={{
                display : "flex",
                justifyContent : "center",
                alignItems : "center",
                flexFlow: "column nowrap "
            }}>
        <Col md={6}>
          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input type="text" name="city" id="exampleCity"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleState">State</Label>
            <Input type="text" name="state" id="exampleState"/>
          </FormGroup>
        </Col>
        
        <Col md={2}>
          <FormGroup>
            <Label for="exampleZip">Zip</Label>
            <Input type="text" name="zip" id="exampleZip"/>
          </FormGroup>  
        </Col>
      </Container>
      
      <Button>Sign in</Button>
    </Form>
    <img src={require("../img/bfb37ccfcca4632dbbe5cf86a80414bd.jpg")} style={{ "width": "205px" }} id="icon" alt="User Icon" />
    <Footer/>
    </>
  );
}

export default Register;