import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { NavLink} from 'react-router-dom'
import './Home.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
        <div className= 'home_link'>
        <NavLink to="/products">Shop Now</NavLink>
      </div>
    )
  }
}


export default Home;
