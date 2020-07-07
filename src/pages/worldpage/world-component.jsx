import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './world.styles.scss';
import Global from '../../components/Global-data/global-data.component';
import { Link } from 'react-router-dom';
import { ReactComponent as Svg3 } from '../../assets/home-india.svg';
import WorldStatsCard from '../../components/statscard/worldstatscard-component';

function World() {
  const [globalData, setglobalData] = useState([]);
  const [countriesData, setcountriesData] = useState([]);

  //Fetch Data
  useEffect(() => {
    axios
      .get('https://api.covid19api.com/summary')
      .then((res) => {
        setglobalData(res.data.Global);
        setcountriesData(res.data.Countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchByCountry = (e) => {
    let input, filter, table, tr, td, i, txtValue;
    input = e.target.value;
    filter = input.toUpperCase();
    table = document.getElementById('myTable1');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName('td')[0];

      if (td) {
        txtValue = td.textContent || td.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = '';
        } else {
          tr[i].style.display = 'none';
        }
      }
    }
  };

  return (
    <React.Fragment>
      <h1 className="page-head">
        <span className="page-head-split">Statistics</span> - World
      </h1>
      <WorldStatsCard
        confirmed={globalData.TotalConfirmed}
        recovered={globalData.TotalRecovered}
        deaths={globalData.TotalDeaths}
        newconfirmed={globalData.NewConfirmed}
        newrecovered={globalData.NewRecovered}
        newdeaths={globalData.NewDeaths}
      />

      <Global {...globalData} />
      <div>
        <h1 className="table-title">Pandemic by Country</h1>
        <div className="search-container">
          <label htmlFor="myInput">
            <i className="fas fa-search"> </i>
          </label>
          <input
            type="text"
            id="myInput"
            onChange={searchByCountry}
            placeholder="Search for Country..."
            className="searchbox"
            autoComplete="off"
          />
        </div>

        <div className="table-container">
          <table id="myTable1">
            <thead>
              <tr>
                <th className="table-countries-country-header">Country</th>
                <th className="table-countries-confirmed-header">
                  Total Confirmed
                </th>
                <th className="table-countries-recovered-header">
                  Total Recovered
                </th>
                <th className="table-countries-deaths-header">Total Deaths</th>

                <th className="table-countries-confirmed-header">
                  New Confirmed
                </th>
                <th className="table-countries-recovered-header">
                  New Recovered
                </th>
                <th className="table-countries-deaths-header">New Deaths</th>
              </tr>
            </thead>

            {countriesData.map(
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
                      {TotalConfirmed}
                    </td>
                    <td className="table-countries-recovered">
                      {TotalRecovered}
                    </td>
                    <td className="table-countries-deaths">{TotalDeaths}</td>

                    <td className="table-countries-confirmed">
                      + {NewConfirmed}
                    </td>
                    <td className="table-countries-recovered">
                      + {NewRecovered}
                    </td>
                    <td className="table-countries-deaths">+ {NewDeaths}</td>
                  </tr>
                </tbody>
              )
            )}
          </table>
        </div>

        <section className="world-stats-container">
          <div className="world-stats-content">
            <h2 className="world-stats-content__text">
              Check India Statistics
            </h2>
            <Link to="/india">
              <button className="world-stats-content__btn">
                &#8618; Click Here
              </button>
            </Link>
          </div>
          <div className="world-stats-image">
            <Svg3 className="world-stats-image__img" />
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default World;
