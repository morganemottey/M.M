import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import ProductItem from "./productItem";
import Cart from './cart'
import Header from './Header';
import Footer from './Footer'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { addToCart } from '../actions/cartActions'
import { getProducts } from "../actions/productActions";
import CartButton from './CartButton'
import ReactMediumImg from 'react-medium-zoom'

import './productList.css'

class Tops extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: null,
            products: [],
            modal : false,
            isOpen : false,
            photIndex : 0,

        }

    }

  toggle = () => {
    const { modal } = this.state;
    this.setState({ modal: !modal });
  };

    componentDidMount() {
        this.props.getProducts()
    }

    dispachAddToCart(product) {
        console.log('product', product)
        this.props.addToCart(product);
    }


    // getImages = async () => {
    //     try {
    //         console.log('GG');
    //         const result = await axios.get(`http://localhost:5000/api/products`, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem("token")}`
    //             }
    //         });
    //         console.log("getImages", result.data);
    //         this.setState({ products: result.data });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };




    renderProducts = () => {
        console.log("gg", this.props.products)
        return (
            this.props.products.map((p, index) => {
                console.log('toto', p)
                return (
                    <Col className='productsList' style= {{width : "100px"}}
                        xs={12} sm={6} md={4} key={p.id}>
                        <Card style = {{ "border" : "3px solid black", "margin" : "10px"}}>
                        <ReactMediumImg
                            
                                key={`profile-${index}`}
                                src={`http://localhost:5000/${p.photo}`}
                                portfolio={p}
                                index={index}
                                onOpen={() => console.log('Image Open')}
                                onClosed={() => console.log('Image closed')}
                                alt="Card image cap" />
                                
                            <CardBody>
                                <ProductItem handleOnAdd={this.dispachAddToCart.bind(this)} product={p} />
                            </CardBody>
                        </Card>
                    </Col>
                );
            })
        );
    }

    render() {
        return (
            <div>
                <Header />
               
                <CartButton ><NavLink to="/cart">Cart</NavLink></CartButton>
                <Row style={{ margin: '15px' }}>

                    {this.renderProducts()}
                </Row>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.products.products
    }
}
function mapActionsToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProducts()),
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(Tops);