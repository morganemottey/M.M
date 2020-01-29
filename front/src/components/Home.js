import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
        <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">¨¨</h1>
            <p className="lead">Shop Now.</p>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}


export default Home;
