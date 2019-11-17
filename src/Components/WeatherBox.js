import React from 'react';
import './WeatherBox.css';
import Results from './Results.js'
import WeatherResults from './WeatherResults.js'

class WeatherBox extends React.Component {
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    cityInput: undefined,
    countryInput: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  handleCity = (event) => {
    this.setState({cityInput: event.target.value})
  }

  handleCountry = (event) => {
    this.setState({countryInput: event.target.value})
  }

  getWeather = async e => {
    e.preventDefault();
    const city = this.state.cityInput;
    const country = this.state.countryInput;
    if (city && country){
      try{
        const apiCall = await fetch(
          `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=89c65e71b4f01cd5eb3be1701bb085b7&units=metric`
       );
        const json = await apiCall.json();

        if (json.cod == 200){
          this.setState({
          temperature: json.main.temp,
          city: json.name,
          country: json.sys.country,
          humidity: json.main.humidity,
          description: json.weather[0].description,
          error: ""
        });
        }
        else
        {
          this.setState({error: "Sorry, check spelling"})
        }}
      catch (ex){
        console.log(ex.message);
      }
    }

    else{
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "please enter a valid values."
        });
      }
  }

  render(){
  return (
      <div className="WeatherBox">
        <div>
          <input type="text" onChange={this.handleCountry} id="Country" required placeholder="Enter Country"/>
          <input type="text" onChange={this.handleCity} id="City" required placeholder="Enter City"/>
          <button type="button" onClick={this.getWeather} id="Button">Get Weather </button>
        </div>
        <WeatherResults city={this.state.city} country={this.state.country} temperature={this.state.temperature} humidity={this.state.humidity} description={this.state.description} error={this.state.error}/>
      </div>
  );
}
}

export default WeatherBox;
