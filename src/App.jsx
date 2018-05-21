import React, { Component } from 'react';
import './App.css';
import Title from './components/Title'
import Form from './components/Form';
import Weather from './components/Weather';
const API_KEY = "1ac2a9ad789f1cdd93957ef6c6c4db0b";

class App extends Component {
  // define the state
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined

  }
  // self Inner function 
  getWeather = async (e) =>{
    // to prevent the full page refresh
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    // chek the value in console
    // console.log(city);
    // console.log(country);
    
    // fetch the api call
    const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/weather?q=${city},${country}&appid= ${API_KEY}`);
    // const api_call = await fetch('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22');
    // convert the api_call data into the json format
    const data = await api_call.json();
    // check the json data into the console
    console.log(data);
    // now set the state value
    this.setState({
      temperature: data.main.temp,
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: ""
    });
  }// end of getWeather function
  render() {
    console.log(this.getWeather);
    return (
      <div>
        
        <Title />
        {/* to call the getWeather function we need to set props so props is nothing like properties in html which gives to use in another component */}
        <Form getWeather = {this.getWeather} />
        {/* now this getWeather method is able to use in form component using the props concept */}
        <Weather 
          temperature= {this.state.temperature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;