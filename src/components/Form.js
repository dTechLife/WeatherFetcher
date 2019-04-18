import React from "react";
//another stateless component

const Form = props => (
  <div>
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City..."/>
    <input type="text" name="country" placeholder="Country..."/>
    <button className="button"> Get Weather</button>

  </form>
  </div>
);


export default Form;
