import React, {Component} from 'react'

class Search extends Component {
  render() {
    return (
        <form onSubmit={this.props.searchWeather} className="form">
                 <div className="searchField"><input type="text" name="country" placeholder="Enter Country"></input>
                <input type="text" name="city" placeholder="Enter City"></input>
                <button>Get Weather</button></div> 
                
            </form> 
    )
  }
}
  export default Search
