import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Header/>
        <div className>
        About
        </div>
        <img src={require("../img/2.jpg")}></img>
        <div className ="about_text">
          <p>
          Frankie is set to inspire the girl who enjoys affordable luxe-looking basics that connect 
          with her city lifestyle; whether by taxi, subway, bike or cobblestone. Think classic shapes and timeless 
          touches. Your everyday, effortless wardrobe with the occasional twist for flair.
          The Frankie Shop Online will provide exclusive pieces from on-the-pulse designers such as Rachel Comey, 
          Caron Callahan, LOQ, Karen Walker as well as hard-to-find international selections from Australia, Korea, 
          Russia, Ukraine, Spain and many more. All the things you love about our brick and mortar store from the comfort 
          of your Pinterest-perfect studio.
          </p>
          
        </div>
        <Footer/>
      </div>
    )
  }
}


export default About;
