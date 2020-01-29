import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

import instagram from '../img/instagram.png';
import facebook from '../img/facebook.png';
import { Link } from "react-router-dom";
import './Footer.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
        <div>
        <Jumbotron fluid>
          <Container fluid>
            
          
                        <div className="pourFlex">
                            <div className="flexReseauxSociaux">
                               
                                <div><img src={facebook} className="cssImgIcones"/></div>
                                <div><img src={instagram} className="cssImgIcones"/></div>
                            </div>
                            <ul className="cssDesLiens">
                                <li><Link to="/About" >About</Link></li>
                                <li><Link >Newsleter</Link></li>
                                <li><Link >CONTACT</Link></li>
                                <li><Link >MENTIONS LEGALES</Link></li>
                            </ul>
                        </div>
                    
          </Container>
        </Jumbotron>
      </div>
    
    )
  }
}


export default Login;
