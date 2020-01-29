import React from 'react';
import {Col, Row, Button, Badge} from 'react-bootstrap';

class CartItem extends React.Component {

    render() {
        return (
            <div className='cartItem'>
                <Row>
                    <Col xs={12} sm={6}>
                        <h5>{this.props.cartItem.title} <Badge pullRight>Price: INR {this.props.cartItem.price}</Badge></h5>
                    </Col>
                    <Col xs={6} sm={4}>
                        <p>units :&nbsp;
                            <div bsStyle='success'> {this.props.cartItem.units} </div>
                            &nbsp;
                            <Button bsSize='small' onClick={() => this.props.onAddUnit()}>+</Button>
                            <Button bsSize='small' onClick={() => this.props.onDeductUnit()}>-</Button>
                        </p>
                    </Col>
                    <Col xs={6} sm={2}>
                        <Button onClick={() => this.props.handleDeleteFromCart()}
                                bsSize='small' bsStyle='danger'>DEL</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CartItem;