import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { ListGroup, ListGroupItem } from 'reactstrap';
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
                        <ul className="cssDesLiens">
                    
                            </ul>
                            <div className="flexReseauxSociaux">
                               
                                <div><img src={facebook} className="cssImgIcones"/></div>
                                <div><img src={instagram} className="cssImgIcones"/></div>
                            </div>
                           {/* <div className="input_newsletter">
                            <input
                            
                            style= {{"backgroundColor": "black" }}></input>
                           </div> */}
                            <ul className="cssDesLiens" >
                                <li style = {{color : "black"}}><Link to="/About" >About</Link></li>
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
