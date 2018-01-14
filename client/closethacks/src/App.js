import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Carousel from 'nuka-carousel';
import './styles/carousel.css';

const img1 = require('./img/pants_1.jpg');

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="headContainer">
        </div>
        <Carousel id="topCarousel">
          <img src={img1} />
          <img src={img1} />
          <img src={img1} />
        </Carousel>
        <Carousel id="bottomCarousel">
          <img src={img1} />
          <img src={img1} />
          <img src={img1} />
        </Carousel>
        <Carousel id="shoeCarousel">
          <img src={img1} />
          <img src={img1} />
          <img src={img1} />
        </Carousel>
      </div>
    );
  }
}

export default App;
