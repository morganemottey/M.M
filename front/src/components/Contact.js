import React, { Component } from 'react';
import './Register.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Header from './Header'
import Footer from './Footer'
const axios = require('axios');


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      register: this.getInitialState(),
      showConfirmation: false,
    }
  }

  getInitialState = () => ({
    firstname: "",
    lastname: "",
    birthday: "",
    adress: "",
    phone: "",
    email: "",


  })


  handleChangeInputRegister = (e) => {
    const { register } = this.state;
    register[e.target.name] = e.target.value
    this.setState({ register })
  }

  handleSubmitFormRegister = (event) => {
    console.log('Le formregisters a été soumis : ', this.state);
    let { register } = this.state;
    axios
      .post("http://localhost:5000/api/register", register)
    this.setState({
      register: this.getInitialState(),
      showConfirmation: true
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.showConfirmation === false ? (
          <form className="FlexFormContainerRegister" onSubmit={this.handleSubmitFormRegister} method="POST" action='/api/register'>
            <h1 className="h1formGuest">Register</h1>
            <FormGroup>
              <Label for="exampleEmail">Firstname</Label>
              <Input type="firstname"
                type="text" onChange={this.handleChangeInputRegister} value={this.state.firstname}
                name="firstname" id="exampleEmail" placeholder="Firstname" required />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Lastname</Label>
              <Input type="lastname"
                type="text" onChange={this.handleChangeInputRegister} value={this.state.lastname}
                name="lastname" id="exampleEmail" placeholder="Lastname" required />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Birthday</Label>
              <Input type="email"
                type="text" onChange={this.handleChangeInputRegister} value={this.state.birthday}
                name="birthday" id="exampleEmail" placeholder="birthday" required />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Adress</Label>
              <Input type="email"
                type="text" onChange={this.handleChangeInputRegister} value={this.state.adress}
                name="adress" id="exampleEmail" placeholder="adress" required />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Phone Number</Label>
              <Input type="email"
                type="text" onChange={this.handleChangeInputRegister} value={this.state.phone}
                name="phone" id="exampleEmail" placeholder="phone" required />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Comment</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
        </FormText>
            </FormGroup>
            <Button type="submit">Register</Button>
            <Footer />
          </form>
        ) : (
            <div>
              <p>Your request has been sent !</p>
              <p>We will respond as soon as possible</p>
              <p>Thank you</p>
              <NavItem>
                <Button><NavLink href="/">Return</NavLink></Button>
              </NavItem>
            </div>
          )}
      </div>
    );
  }
}

export default Register;
