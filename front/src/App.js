import React, { Component } from 'react';
import Header from './components/Header'
import SlideHome from './components/SlideHome'
import Footer from './components/Footer'
import Home from './components/Home'
import { randomOf } from "./helpers";
import './App.css';
import Point from "./components/Point";


class App extends Component {
  constructor(props) {
    super(props);
  //   const points = [];
  //   for (let i = 0; i < 1000; i++)
  //     points.push({ x: randomOf(100), y: randomOf(10) });

  //   this.state = {
  //     points
  //   };
  // }

  // componentDidMount() {
  //   this.updatePoints();
  // }

  // updatePoints = () => {
  //   this.rmPoint();
  //   this.addPoint();
  //   setTimeout(this.updatePoints, randomOf(100));
  // };

  // addPoint = () => {
  //   const { points } = this.state;
  //   points.push({ x: randomOf(10), y: randomOf(20) });
  //   this.setState({ points });
  // };

  // rmPoint = () => {
  //   const { points } = this.state;
  //   points.splice(randomOf(points.length), 10);
  //   this.setState({ points });
  // };
  }

  render() {
    // const { points } = this.state;
    return (
      <div>
        {/* {points.map((p, i) => (
          <Point key={`${p.x}-${p.y}`} x={p.x} y={p.y} />
        ))} */}
        <Header/>
        {/* <SlideHome/> */}
        <Home/>
        <Footer/>

      </div>
    )
  }
}


export default App;
