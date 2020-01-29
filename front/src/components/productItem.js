import React from 'react';
import {Well, Col, Row, Button} from 'react-bootstrap';

class ProductItem extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} className='productItem'>
                        <h4>{this.props.product.title}</h4>
                        <p>{this.props.product.description}</p>
                        <p>Price: $ {this.props.product.price}</p>
                        <Button 
                        onClick={() => this.props.handleOnAdd(this.props.product)} 
                        style={{"backgroundColor" : "black"}}>ADD
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductItem;