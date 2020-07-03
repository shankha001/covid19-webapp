import React, { useState, useEffect } from 'react';
import PieChart from '../../components/pieChart/pieChart-component';
import axios from 'axios';

function India() {
  const [indiaData, setindiaData] = useState([]);
  const [chartData, setchartData] = useState([]);

  let liveData = [];

  //Fetch Data
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

  let length = indiaData.length;
  let latestData = indiaData[length - 1];
  for (let i in latestData) {
    liveData.push(latestData[i]);
  }
  const confirmed = liveData[7];
  const deaths = liveData[8];
  const recovered = liveData[9];
  const active = liveData[10];

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
      <div className="global__stats-div">
        <div className="">
          <PieChart data={chartData} width={50} height={50} />
        </div>
      </div>
    </div>
  );
}

export default India;
