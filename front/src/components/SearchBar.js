import React, { Component } from 'react';

// import './searchbar.scss'
// import ParallaxHome from './ParallaxHome'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div>
      
      <input type="text" value="" placeholder="Enter your search here..." id="searchBar"></input>
	<button><i className="fas fa-search"></i></button>
  </div>
    )
  }
}


export default SearchBar;
