import React, { useState, useEffect } from 'react';
import './india.styles.scss';
import axios from 'axios';
import PieChart from '../../components/pieChart/pieChart-component';
import LineChart from '../../components/lineChart/lineChart-component';
import BarChart from '../../components/barChart/barChart-component';

function India() {
  const [indiaData, setindiaData] = useState([]);
  const [stateData, setstateData] = useState([]);
  const [chartData, setchartData] = useState([]);
  const [linechartData, setlinechartData] = useState([]);
  const [barchartData, setbarchartData] = useState([]);

  let liveData = [];

  //Fetch Countries Data
  useEffect(() => {
    axios
      .get('https://api.covid19api.com/country/india')
      .then((res) => {
        setindiaData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  //Fetch State Data
  useEffect(() => {
    axios
      .get('https://api.covid19india.org/data.json')
      .then((res) => {
        setstateData(res.data.statewise);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let stateLength = stateData.length;

  let length = indiaData.length;
  let latestData = indiaData[length - 1];
  for (let i in latestData) {
    liveData.push(latestData[i]);
  }
  const confirmed = liveData[7];
  const deaths = liveData[8];
  const recovered = liveData[9];
  const active = liveData[10];

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
    let linechartDate = [];
    for (let i = 0; i < length; i++) {
      linechartConfirmed.push(indiaData[i].Confirmed);
      linechartDate.push(indiaData[i].Date);
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

  return (
    <div>
      <div className="global__stats">
        <div className="global__stats-div">
          <p className="global__stats-A3">{active}</p>
          <p className="global__stats-B">Active</p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A1">{confirmed}</p>
          <p className="global__stats-B">Confirmed</p>
        </div>

        <div className="global__stats-div">
          <p className="global__stats-A2">{recovered}</p>
          <p className="global__stats-B">Recovered</p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A3">{deaths}</p>
          <p className="global__stats-B">Deaths</p>
        </div>
      </div>
      <div className="global__stats-div-pie">
        <div className="global__stats-div">
          <PieChart data={chartData} width={50} height={50} />
        </div>
        <div className="global__stats-div">
          <LineChart data={linechartData} width={50} height={50} />
        </div>
      </div>
      <div className="global__stats-div">
        <BarChart data={barchartData} />
      </div>
    </div>
  );
}

export default India;
