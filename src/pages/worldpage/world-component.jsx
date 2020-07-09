import React, { useState, useEffect } from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import axios from 'axios';

import './world.styles.scss';
import Global from '../../components/Global-data/global-data.component';
import { Link } from 'react-router-dom';
import { ReactComponent as Svg3 } from '../../assets/home-india.svg';
import WorldStatsCard from '../../components/statscard/worldstatscard-component';

function World() {
  const [globalData, setglobalData] = useState([]);
  const [countriesData, setcountriesData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  //Fetch Data
  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/countries?sort=cases')
      .then((res) => {
        setglobalData(res.data);
        setisLoading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://disease.sh/v3/covid-19/all')
      .then((res) => {
        setcountriesData(res.data);
        setisLoading(true);
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
  var confirmed = [];
  for (let i = 0; i < globalData.length; i++) {
    confirmed.push(globalData[i].active);
  }

  return (
    <React.Fragment>
      <h1 className="page-head">
        <span className="page-head-split">Statistics</span> - World
        <div className="progressbar">
          {!isLoading ? <LinearProgress color="secondary" /> : null}
        </div>
      </h1>

      <WorldStatsCard
        confirmed={countriesData.cases}
        recovered={countriesData.recovered}
        deaths={countriesData.deaths}
        newconfirmed={countriesData.todayCases}
        newrecovered={countriesData.todayRecovered}
        newdeaths={countriesData.todayDeaths}
      />
      <Global {...countriesData} />

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
            {globalData.map(
              ({
                country,
                deaths,
                recovered,
                cases,
                todayCases,
                todayDeaths,
                todayRecovered,
              }) => (
                <tbody key={country}>
                  <tr className="table-countries">
                    <td className="table-countries-country">{country}</td>
                    <td className="table-countries-confirmed">{cases}</td>
                    <td className="table-countries-recovered">{recovered}</td>
                    <td className="table-countries-deaths">{deaths}</td>

                    <td className="table-countries-confirmed">
                      + {todayCases}
                    </td>
                    <td className="table-countries-recovered">
                      + {todayRecovered}
                    </td>
                    <td className="table-countries-deaths">+ {todayDeaths}</td>
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
