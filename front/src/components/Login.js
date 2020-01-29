import React, { Component } from 'react';
import Header from './Header'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {


    }
  }

  
  render() {
    return (
      <div>
        <Header />
        
        <Form >
      <FormGroup>
        <Label for="exampleEmail" hidden>Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
      </FormGroup>
      {' '}
      <FormGroup>
        <Label for="examplePassword" hidden>Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
      </FormGroup>
      {' '}
      <Button>Submit</Button>
    </Form>

      </div>
    )
  }
}


export default Login;
