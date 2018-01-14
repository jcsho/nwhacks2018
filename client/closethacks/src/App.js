import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const img1 = require('./img/pants_1.jpg');

class App extends Component {
  render() {
    var settings = {
      centerMode: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="App">
        <Slider {...settings}>
          <div><img src={img1} /></div>
          <div><img src={img1} /></div>
          <div><img src={img1} /></div>
        </Slider>
        <Slider {...settings}>
          <div><img src={img1} /></div>
          <div><img src={img1} /></div>
          <div><img src={img1} /></div>
        </Slider>
        <Slider {...settings}>
          <div><img src={img1} /></div>
          <div><img src={img1} /></div>
          <div><img src={img1} /></div>
        </Slider>
      </div>
    );
  }
}

export default App;
