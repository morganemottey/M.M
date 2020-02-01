import React, { Component } from 'react';
import './Register.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHome } from '@fortawesome/free-solid-svg-icons';
import { NavItem, NavLink } from 'reactstrap';
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
        const {register} = this.state;
        register[e.target.name]=e.target.value
        this.setState({ register })
    }

    handleSubmitFormRegister = (event) => {
        console.log('Le formregisters a été soumis : ', this.state);
        let { register} = this.state;
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
              <Header/>
                {this.state.showConfirmation === false ? (
                <form className="FlexFormContainerRegister" onSubmit={this.handleSubmitFormRegister} method="POST" action='/api/register'>
                    <h1 className="h1formGuest">Register</h1>

                    <input className="inputForm" name="firstname" type="text" onChange={this.handleChangeInputRegister} value={this.state.firstname} placeholder="firstname :" required></input>

                    <input className="inputForm" name="lastname" type="text" onChange={this.handleChangeInputRegister} value={this.state.lastname} placeholder="lastname" required></input>

                    <input className="inputForm" name="pseudo" type="text" onChange={this.handleChangeInputRegister} value={this.state.birthday} placeholder="birthday :" ></input>
                    
                    <input className="inputForm" name="compte" type="text" onChange={this.handleChangeInputRegister} value={this.state.adress} placeholder="adress"></input>

                    <input className="inputForm" name="phoneG" type="tel" onChange={this.handleChangeInputRegister} value={this.state.phone} size={10} minLength={1} maxLength={10} 
                    placeholder="Votre numéro de téléphone :" required></input>
                    
                    <input className="inputForm" name="email" type="email" onChange={this.handleChangeInputRegister} 
                    value={this.state.email} placeholder="mail :" required></input>
                    
                    <button className="buttonForm" type="submit">
                        Register
                    </button>
                    <Footer/>
                </form>
                ) : (
                <div>
                    <p>Your request has been sent !</p>
                    <p>We will respond as soon as possible</p>
                    <p>Thank you</p>
                    <NavItem>
                        <NavLink href="/" className="styleLink"></NavLink>
                    </NavItem>
                </div>
                )}
            </div>
        );
    }
}

export default Register;
