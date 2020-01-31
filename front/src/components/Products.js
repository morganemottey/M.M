import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Cart from './cart'
import Footer from './Footer'

// const items= [
//   {
//     src: require("../img/2.jpg"),
//     caption: 'Slide 1'
//   },
// ]

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    }
  }



  render() {
    const { products } = this.state;
    return (

      <div>
        <Header />
    <div>Toto</div>

        <Footer/>
      </div>
     

    )
  }
}


export default Products;


