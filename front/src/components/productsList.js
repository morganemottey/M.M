import React from 'react';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import {addToCart} from '../actions/cartActions'
import {Row, Col} from 'react-bootstrap';
import ProductItem from "./productItem";
import Cart from './cart'
import Header from './Header';
import Footer from './Footer'
import axios from 'axios'




class ProductsList extends React.Component {
    dispachAddToCart(product) {
        this.props.addToCart(product);
    }


    renderProducts() {
        return (
            this.props.products.map((p) => {
                return (
                    <Col className='productsList' xs={12} sm={6} md={4} key={p.id}>
                        <ProductItem handleOnAdd={this.dispachAddToCart.bind(this)} product={p} />
                    </Col>
                );
            })
        );
    }

    render() {
        return (
            <div>
                <Header/>
                <Row><Cart /></Row>
                <Row style={{margin:'15px'}}>
                    {this.renderProducts()}
                </Row>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}
function mapActionsToProps(dispatch) {
    return bindActionCreators({
        addToCart
    }, dispatch);
}

export default connect(mapStateToProps, mapActionsToProps)(ProductsList);