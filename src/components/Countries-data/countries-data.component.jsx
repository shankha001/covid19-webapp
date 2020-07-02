import React from 'react';
import './countries-data.styles.scss';

import Grid from '@material-ui/core/Grid';

class Countries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headerData: [
        {
          country: 'Country',
          newConfirmed: 'New Confirmed',
          newDeaths: ' New Deaths',
          newRecovered: ' New Recovered',
          totalConfirmed: 'Total Confirmed',
          totalDeaths: 'Total Death',
          totalRecovered: 'Total Recovered',
          countryCode: 'table',
        },
      ],
      countryData: [],
      globalData: [],
      searchInput: '',
    };
  }

  render() {
    for (let i in this.props) {
      this.state.countryData.push(this.props[i]);
    }

    return (
      <Grid container justify="center">
        <div className="table-container">
          <table id="myTable">
            {this.state.headerData.map(
              ({
                countryCode,
                country,
                newConfirmed,
                newDeaths,
                newRecovered,
                totalConfirmed,
                totalDeaths,
                totalRecovered,
              }) => (
                <thead key={countryCode}>
                  <tr>
                    <th className="table-countries-country-header">
                      {country}
                    </th>
                    <th className="table-countries-confirmed-header">
                      {newConfirmed}
                    </th>
                    <th className="table-countries-deaths-header">
                      {newDeaths}
                    </th>
                    <th className="table-countries-recovered-header">
                      {newRecovered}
                    </th>
                    <th className="table-countries-confirmed-header">
                      {totalConfirmed}
                    </th>
                    <th className="table-countries-deaths-header">
                      {totalDeaths}
                    </th>
                    <th className="table-countries-recovered-header">
                      {totalRecovered}
                    </th>
                  </tr>
                </thead>
              )
            )}
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
                <tbody key={CountryCode}>
                  <tr className="table-countries">
                    <td className="table-countries-country">{Country}</td>
                    <td className="table-countries-confirmed">
                      {NewConfirmed}
                    </td>
                    <td className="table-countries-deaths">{NewDeaths}</td>
                    <td className="table-countries-recovered">
                      {NewRecovered}
                    </td>
                    <td className="table-countries-confirmed">
                      {TotalConfirmed}
                    </td>
                    <td className="table-countries-deaths">{TotalDeaths}</td>
                    <td className="table-countries-recovered">
                      {TotalRecovered}
                    </td>
                  </tr>
                </tbody>
              )
            )}
          </table>
        </div>
      </Grid>
    );
  }
}
export default Countries;
