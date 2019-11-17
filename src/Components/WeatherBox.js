import React from 'react';
import './WeatherBox.css';

function WeatherBox() {
  return (
      <div className="WeatherBox">
        <div>
          <input type="text" id="Country" required placeholder="Enter Country"/>
          <input type="text" id="City" required placeholder="Enter City"/>
          <button type="button" id="Button">Get Weather </button>
        </div>
      </div>


  );
}

export default WeatherBox;
