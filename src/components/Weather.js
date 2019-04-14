import React from "react";
//Stateless finction component, looks nicer

const Weather = (props) => {

  return (
    <div>
      {/*magic if statement thing && in react, learn more about it*/}
      {props.city && props.country && <p>Location: {props.city} {props.country}</p> }
      {props.temperature && <p>Temp: {props.temperature}</p>}
      {props.humidity 	&&	<p>Humidity: {props.humidity}</p>}
      {props.description && <p>Conditions: {props.description}</p>}
      <p>{props.error}</p>
     </div>

  );
}

export default Weather;
