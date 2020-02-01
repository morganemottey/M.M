import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

import './Home.css'
// import ParallaxHome from './ParallaxHome'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
      {/* <ParallaxHome/> */}
     
      <img className= "img_home" src={require("../img/3a8893d55f53cb950a5e5e4ce7e8d2cd.jpg")}></img>
      <button className="button_home"> Shop Now </button>
      {/* <div className="carre2"></div>
      <img className= "img_home" src={require("../img/bf97e9794511b52b26f0838854dfdfb5.jpg")}></img>
      <div className="carre3"></div>
      <div className= 'home_link'> */}
        {/* <NavLink to="/products">Shop Now</NavLink> */}
      {/* </div> */}
      </div>
    )
  }
}


export default Home;
