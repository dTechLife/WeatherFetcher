import React from "react";
//this could be stateless, but lets leave it so we can see the difference.

class Titles extends React.Component  {
  render(){
    return(
      <div>
        <h1>Weather finder</h1>
        <p> Find out temperature, conditions, and more...</p>
      </div>

    );

  }

}
export default Titles;
