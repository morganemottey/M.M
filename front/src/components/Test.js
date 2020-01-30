import React, { Component } from "react";
// import axios from "axios";
// import ButtonOpenPortfolio from "./ButtonOpenPortfolio";
// import { Container, Row, Col, Spinner } from "reactstrap";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
// import "./PortfolioSection.css";
// import "aos/dist/aos.css";
import Cart from './cart'
import Header from './Header'
import Footer from './Footer'

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      portfolios: [],
      img: null
    };
  }

  // componentDidMount() {
  //   axios.get(`http://localhost:5000/api/portfolio`).then(res => {
  //     const portfoliosData = res.data;
  //     this.setState({ portfolios: portfoliosData });
  //   });
  // }

//   renderProducts() {
//     return (
//         this.props.products.map((p) => {
//             return (
//                 <Col className='productsList' xs={12} sm={6} md={4} key={p.id}>
//                     <button> + </button>
//                 </Col>
//             );
//         })
//     );
// }
  render() {
    const { portfolios } = this.state;
    return (
   
        <div>
          <Header/>

          {portfolios.map((p, index) => (
            <Card>
            <CardImg key={p.id}top width="100%" src alt="Card image cap" />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
              <Cart>Button</Cart>
            </CardBody>
          </Card>
          ))}
          
          
          <Footer/>
       </div>
      
    );
  }
}

export default Test;
