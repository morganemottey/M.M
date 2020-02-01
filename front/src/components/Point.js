import React, { Component } from "react";
import { randomOf } from "../helpers";

class Point extends Component {
  constructor(props) {
    super(props);
    this.r = randomOf(10);
    this.c = `rgb(${randomOf(60)},${randomOf(26)},${randomOf(56)})`;
    this.state = {};
  }

  
  componentWillReceiveProps(nextProps) {

  }
  render() {
    const { x, y } = this.props;
    const { r, c } = this;

    return (
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          left: `${x}vw`,
          top: `${y}vh`,
          width: `${r}px`,
          height: `${r}px`,
          background: c
        }}
      />
    );
  }
}

export default Point;
