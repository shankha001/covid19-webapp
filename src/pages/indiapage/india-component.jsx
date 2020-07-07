import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import './india.styles.scss';
import moment from 'moment';

import PieChart from '../../components/pieChart/pieChart-component';
import LineChart from '../../components/lineChart/lineChart-component';
import BarChart from '../../components/barChart/barChart-component';

import { ReactComponent as Svg2 } from '../../assets/home-world.svg';
import IndiaStatsCard from '../../components/statscard/indiastatscard-conponent';

function India() {
  const [indiaData, setindiaData] = useState([]);
  const [stateData, setstateData] = useState([]);
  const [chartData, setchartData] = useState([]);
  const [linechartData, setlinechartData] = useState([]);
  const [barchartData, setbarchartData] = useState([]);
  let liveData = [];

  //moment Date warning
  moment.suppressDeprecationWarnings = true;

  //Fetch  Data
  useEffect(() => {
    axios
      .get('https://api.covid19india.org/data.json')
      .then((res) => {
        setindiaData(res.data.cases_time_series);
        setstateData(res.data.statewise);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let stateLength = stateData.length;
  let length = indiaData.length;

  // Active confirmed deaths recovered cards
  let x = stateData[0];
  for (let i in x) {
    liveData.push(x[i]);
  }
  const active = liveData[0];
  const confirmed = liveData[1];
  const deaths = liveData[2];
  const recovered = liveData[8];

  //Pie CHART
  useEffect(() => {
    let newData = [active, recovered, deaths];
    setchartData({
      labels: ['Active', 'Recovered', 'Deaths'],
      datasets: [
        {
          label: '# Stats',
          data: newData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
      ],
    });
  }, [active, deaths, recovered]);

  //Line CHART
  useEffect(() => {
    let linechartConfirmed = [];
    let linechartDeaths = [];
    let linechartDate = [];
    let linechartRecovered = [];
    for (let i = 0; i < length; i++) {
      linechartConfirmed.push(indiaData[i].totalconfirmed);
      linechartDeaths.push(indiaData[i].totaldeceased);
      linechartRecovered.push(indiaData[i].totalrecovered);
      linechartDate.push(indiaData[i].date);
    }

    setlinechartData({
      labels: linechartDate,
      datasets: [
        {
          label: 'Total Confirmed',
          data: linechartConfirmed,
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
        {
          label: 'Total Deaths',
          data: linechartDeaths,
          fill: false,
          backgroundColor: 'red',
          borderColor: 'red',
        },
        {
          label: 'Total Recovered',
          data: linechartRecovered,
          fill: false,
          backgroundColor: 'orange',
          borderColor: 'orange',
        },
      ],
    });
  }, [indiaData, length]);

  //Bar chart
  useEffect(() => {
    let barchartActive = [];
    let barchartlabel = [];
    let barchartDeaths = [];

    for (let i = 1; i < stateLength; i++) {
      barchartActive.push(stateData[i].active);
      barchartlabel.push(stateData[i].statecode);
      barchartDeaths.push(stateData[i].deaths);
    }

    setbarchartData({
      labels: barchartlabel,
      datasets: [
        {
          label: 'Active',
          data: barchartActive,
          fill: true,
          backgroundColor: 'rgba(75,192,192,0.2)',
          borderColor: 'rgba(75,192,192,1)',
        },
        {
          label: 'Deaths',
          data: barchartDeaths,
          fill: true,
          backgroundColor: 'red',
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    });
  }, [stateData, stateLength]);

  const searchByState = (e) => {
    let input, filter, table, tr, td, i, txtValue;
    input = e.target.value;
    filter = input.toUpperCase();
    table = document.getElementById('myTable');
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
  console.log(stateData);

  return (
    <React.Fragment>
      <h1 className="page-head">
        <span className="page-head-split">Statistics</span> - India
      </h1>

      <IndiaStatsCard
        confirmed={confirmed}
        active={active}
        recovered={recovered}
        deaths={deaths}
      />

      <div className="global__stats-chart">
        <div className="global__stats-chart-1-of-2">
          <PieChart data={chartData} />
        </div>
        <div className="global__stats-chart-1-of-2">
          <LineChart data={linechartData} />
        </div>
      </div>
      <h1 className="table-title">Pandemic by States</h1>
      <div className="search-container">
        <label htmlFor="myInput">
          <i className="fas fa-search"> </i>
        </label>
        <input
          type="text"
          id="myInput"
          onChange={searchByState}
          placeholder="Search for State..."
          className="searchbox"
          autoComplete="off"
        />
      </div>
      <div className="table-container">
        <table id="myTable">
          <thead>
            <tr>
              <th className="table-countries-country-header">State</th>
              <th className="table-countries-country-header">Active</th>
              <th className="table-countries-country-header">Confirmed</th>
              <th className="table-countries-country-header">Recovered</th>
              <th className="table-countries-country-header">Deaths</th>
            </tr>
          </thead>
          {stateData.map(
            ({ statecode, state, confirmed, recovered, deaths, active }) => (
              <tbody key={statecode}>
                <tr className="table-countries">
                  <td className="table-countries-country">{state}</td>
                  <td
                    className="table-countries-deaths "
                    style={{ color: '#2091ba' }}
                  >
                    {active}
                  </td>

                  <td className="table-countries-confirmed">{confirmed}</td>
                  <td className="table-countries-recovered">{recovered}</td>
                  <td className="table-countries-deaths">{deaths}</td>
                </tr>
              </tbody>
            )
          )}
        </table>
      </div>
      <div className="india-bar">
        <BarChart data={barchartData} />
      </div>

      <section className="world-stats-container">
        <div className="world-stats-image">
          <Svg2 className="world-stats-image__img" />
        </div>
        <div className="world-stats-content">
          <h2 className="world-stats-content__text">Check World Statistics</h2>
          <Link to="/world">
            <button className="world-stats-content__btn">
              &#8618; Click Here
            </button>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}

export default India;
