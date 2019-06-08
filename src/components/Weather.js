import  React, { Component } from 'react'

 class Weather extends Component {
  render() {
    return (
      <div className="weather">
        <p>Coutry : <span>{this.props.country}</span></p>
        <p>City : <span>{this.props.city}</span></p> 
        <p>Temerature : <span>{this.props.temperature}</span></p> 
        <p>Humidity : <span>{this.props.humidity}</span></p>   
        <p>Description : <span>{this.props.description}</span></p> 
      </div>
    )
  }
}
export default Weather