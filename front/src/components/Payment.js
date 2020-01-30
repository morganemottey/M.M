import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import ModalPayment from './ModalPayment'
import { Button} from 'reactstrap'
import { NavLink} from 'react-router-dom'
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
        </div>
        <ModalPayment>button</ModalPayment>
        <NavLink to="/products"><Button color="secondary">Return</Button></NavLink>
        
        <Footer/>
      </div>
    )
  }
}


export default Payment;
