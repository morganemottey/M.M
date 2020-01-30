import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import ModalPayment from './ModalPayment'
import Cart from './cart'
import './about.css'

class Payment extends Component {
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
        <h4>Cart</h4>
        
        <Cart/>
        <p>Over the past years, MM Shop NYC and now Paris have been touted as the go-to place for unfussy, minimal, wallet-conscious styles. 
          After all, every woman should be able to wear the garments that they inspire designers to make – no matter how high the rent gets!</p>
        </div>
        <ModalPayment>button</ModalPayment>
        
        <Footer/>
      </div>
    )
  }
}


export default Payment;
