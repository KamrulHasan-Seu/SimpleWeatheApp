import React, { Component } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Title from './components/Title'
import Weather from './components/Weather'

class App extends Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const app_id = "903457df5864842384e61a5dbea779de";
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${app_id}&units=metric`;
    axios
      .get(url)
      .then(res => {
        console.log(res)
        this.setState({
          temperature: res.data.main.temp,
          city: res.data.name,
          country: res.data.sys.country,
          humidity: res.data.main.humidity,
          description: res.data.weather[0].description,
          error: ""
        })

      })
  };
  render() {
    return (

      <div className="app wrapper">
        <div className=" left_row">
          <Title />
        </div>
        <div className=" right_row">
         <div className="full-right-row">
         <div className="searchDiv"><Search searchWeather={this.getWeather} /></div>
          <div className="getWeather">
            <Weather
              temperature={this.state.temperature}
              city
              ={this.state.city}
              country
              ={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error} />
          </div>
         </div>

        </div>
      </div>
    )
  }
}

export default App;
