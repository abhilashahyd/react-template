import React from 'react';

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Philadelphia'];

class SelectCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: ''
    };
  }

  handleCityChange = (event) => {
    this.setState({ selectedCity: event.target.value });
  }

  render() {
    return (
      <div>
        <label htmlFor="city">Select City:</label>
        <select id="city" value={this.state.selectedCity} onChange={this.handleCityChange}>
          <option value="">--Select a city--</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default SelectCity;