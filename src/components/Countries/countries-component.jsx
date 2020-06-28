import React from 'react';

class Countries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      countryData: [
        {
          Country: 'Country',
          NewConfirmed: 'New Confirmed',
          NewDeaths: ' New Deaths',
          NewRecovered: ' New Recovered',
          TotalConfirmed: 'Total Confirmed',
          TotalDeaths: 'Total Death',
          TotalRecovered: 'Total Recovered',
          CountryCode: 'table',
        },
      ],
    };
  }
  render() {
    for (let i in this.props) {
      this.state.countryData.push(this.props[i]);
    }

    return (
      <div>
        {this.state.countryData.map(
          ({
            CountryCode,
            Country,
            NewConfirmed,
            NewDeaths,
            NewRecovered,
            TotalConfirmed,
            TotalDeaths,
            TotalRecovered,
          }) => (
            <table id="customers" key={CountryCode}>
              <tbody>
                <tr>
                  <td>{Country}</td>
                  <td>{NewConfirmed}</td>
                  <td>{NewDeaths}</td>
                  <td>{NewRecovered}</td>
                  <td>{TotalConfirmed}</td>
                  <td>{TotalDeaths}</td>
                  <td>{TotalRecovered}</td>
                </tr>
              </tbody>
            </table>
          )
        )}
      </div>
    );
  }
}
export default Countries;
