import React from 'react';
import './Box.css';
import Header from './Header.js'
import WeatherBox from './WeatherBox.js'
import Results from './Results.js'

function Box() {
  return (
      <div className="Box">
          <Header/>
          <WeatherBox/>
          <Results/>
      </div>


  );
}

export default Box;
