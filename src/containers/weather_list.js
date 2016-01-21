import React, { Component } from 'react';
import  { connect } from 'react-redux';



class WatherList extends Component {

renderWeather ( cityData ){
  return(
    <tr>
    <td> {cityData.city.name }</td>
    </tr>

  );
  }

render ( ){

  console.log ( this.props.weather );
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Presure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
     {this.props.weather.map(this.renderWeather)}
      </tbody>
    </table>

  );
}

 }


 function mapStateToProps( weather ) {

   return { weather }; // same as { weather:  weather }

 }

 export default connect ( mapStateToProps ) ( WatherList );
