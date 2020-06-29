import React, { Component } from 'react'

class Weather extends Component {
  render() {
    return (
      <div className="weather">

<div className="result-field">
              <div className="single-field">
                    <div className="row"> 
                    <p className="title-bar">Country </p><span>:</span>
                    <p className="result-bar">{this.props.country}</p>
                    </div>
              </div>
              <div className="single-field">
                    <div className="row"> 
                    <p className="title-bar">Temperature </p><span>:</span>
                    <p className="result-bar">{this.props.temperature}</p>
                    </div>
              </div>
              <div className="single-field">
                    <div className="row"> 
                    <p className="title-bar">Humidity </p><span>:</span>
                    <p className="result-bar">{this.props.humidity}</p>
                    </div>
              </div>
              <div className="single-field">
                    <div className="row"> 
                    <p className="title-bar">Description </p><span>:</span>
                    <p className="result-bar">{this.props.description}</p>
                    </div>
              </div>
          </div>

      </div>
    )
  }
}
export default Weather