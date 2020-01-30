import React from 'react';
import {Col, Row, Button, Badge} from 'react-bootstrap';
import Header from './Header'
import Footer from './Footer'
import { ListGroupItem} from 'reactstrap'
class CartItem extends React.Component {

    render() {
        return (
            
            <div className='cartItem'>
                
              
                
      
                    <ListGroupItem>
                        <h5>{this.props.cartItem.title} <Badge pullLeft>Price: $ {this.props.cartItem.price}</Badge></h5>
                    </ListGroupItem>
                    <ListGroupItem>
                       
                            <div bsStyle='success'> quantity :&nbsp;{this.props.cartItem.units} </div>
                            
                            <Button  onClick={() => this.props.onAddUnit()}>+</Button>
                            <Button  onClick={() => this.props.onDeductUnit()}>-</Button>
                        
              
                    
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                 style={{"backgroundColor" : "black"}}>DEL</Button>
                   
                    </ListGroupItem>
               
                
            </div>
        );
    }
}

export default CartItem;