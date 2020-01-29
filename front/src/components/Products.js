import React, { Component } from 'react';
import Header from './Header'
import axios from 'axios'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Cart from './cart'
import Footer from './Footer'

const items= [
  {
    src: require("../img/2.jpg"),
    caption: 'Slide 1'
  },
]

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: null,
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:5000/api/clothing`).then(res => {
      const productsData = res.data;
      this.setState({ products: productsData });
      console.log(this.state);
    });
  }


  render() {
    const { products } = this.state;
    return (

      <div>
        <Header />

        {products === null ? (
          <div className="Guests-Loader">

          </div>
        ) : (
            products.map(products => (

              <Card>
                <CardImg top width="100%" src={items.src} alt="Card image cap" />
                <CardBody>
                  <CardTitle>Card title</CardTitle>
                  <CardSubtitle>Card subtitle</CardSubtitle>
                  <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                  <Cart>Button</Cart>
                </CardBody>
              </Card>


            ))
          )}

        <Footer/>
      </div>
     

    )
  }
}


export default Products;


