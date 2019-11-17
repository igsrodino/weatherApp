import React from 'react';
import Results from './Results.js'
import './WeatherResults.css';



function WeatherResults({city, country, temperature, humidity, description, error}) {
  return (
      <div>
        {city && (
          <Results title="City: " value={city}>
          </Results>
        )}
        {country && (
          <Results title="Country: " value={country}>
          </Results>
        )}
        {temperature && (
          <Results title="Temperature: " value={`${temperature}°C`}>
          </Results>
        )}
        {humidity && (
          <Results title="Humidity: " value={`${humidity}%`}>
          </Results>
        )}
        {description && (
          <Results title="Description: " value={description}>
          </Results>
        )}
        {error && (
          <Results title="Error: " value={error}>
          </Results>
        )}

      </div>


  );
}

export default WeatherResults;
