import React, { useState, useEffect } from 'react';
import './global-data.styles.scss';
import PieChart from '../../components/pieChart/pieChart-component';
import LineChart from '../lineChart/lineChart-component';

function Global(props) {
  const [chartData, setchartData] = useState({});

  useEffect(() => {
    let newData = [
      props.TotalConfirmed,
      props.TotalDeaths,
      props.TotalRecovered,
    ];
    setchartData({
      labels: ['Confirmed', 'Deaths', 'Recovered'],
      datasets: [
        {
          label: 'Stats',
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
  }, [props]);

  return (
    <div>
      <div className="global__stats">
        <div className="global__stats-div">
          <p className="global__stats-A1">{props.TotalConfirmed}</p>
          <p className="global__stats-B">Confirmed</p>
          <p className="global__stats-C1">+{props.NewConfirmed} new Cases</p>
        </div>

        <div className="global__stats-div">
          <p className="global__stats-A2">{props.TotalRecovered}</p>
          <p className="global__stats-B">Recovered</p>
          <p className="global__stats-C2">
            +{props.NewRecovered} new Recovered
          </p>
        </div>
        <div className="global__stats-div">
          <p className="global__stats-A3">{props.TotalDeaths}</p>
          <p className="global__stats-B">Deaths</p>
          <p className="global__stats-C3">+{props.NewDeaths} new Deaths</p>
        </div>
      </div>
      <div className="global__stats-pie">
        <div className="global__stats-pie-chart">
          <PieChart data={chartData} width={50} height={50} />
        </div>
        <div className="global__stats-pie-chart">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
export default Global;
