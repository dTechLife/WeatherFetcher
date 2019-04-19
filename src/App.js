import React from "react";


import Titles from "./components/Titles";
import  Form from "./components/Form";
import Weather from "./components/Weather"
//Awesome, javascript is OOP and has classes, just like java, this should be easy!

const API_KEY = "a5cce548f40b27a2aea443f58d5bcab0";

class App extends React.Component{
//Method
/*We can add html if needed, but now we are using components*/
  state={
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    if (city && country){
    console.log(data);
    this.setState({
      temperature: Math.round(data.main.temp - 273.15),
      
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error: data.message,
    });
  }

  
  else{
    this.setState({
      temperature:undefined,
      city:undefined,
      country:undefined,
      humidity:undefined,
      description:undefined,
      error:"Please enter the value."
    });
  }
}

  render() {
    return (
      <div className="wrapper">

        <div className="title-container">
          <Titles />
        </div>

        <div className="main">
          <div className="container">
            <div className="row">
              <div className="form-container">
                <Form getWeather={this.getWeather}/>
              </div>
            </div>

            <div className="row" className="queryText">
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  country ={this.state.country}
                  humidity ={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;



//we are exporting the class for other components to import
