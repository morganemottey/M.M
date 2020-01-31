import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import './about.css'
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
        <h4>About</h4>
        <p>Over the past years, MM Shop NYC and now Paris have been touted as the go-to place for unfussy, minimal, wallet-conscious styles. 
          After all, every woman should be able to wear the garments that they inspire designers to make – no matter how high the rent gets!</p>
        </div>
        <img className= "img_about" src={require("../img/982632b1a25edd23db6b3ce7f31b062f.jpg")}></img>
        <img className= "img_about"src={require("../img/3.jpg")}></img>
        <div className ="about_text">
          <p>
          MM is set to inspire the girl who enjoys affordable luxe-looking basics that connect 
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
