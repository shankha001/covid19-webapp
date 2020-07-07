import React, { useState, useEffect } from 'react';
import './global-data.styles.scss';
import PieChart from '../../components/pieChart/pieChart-component';
import BarChart from '../barChart/barChart-component';

function Global(props) {
  const [chartData, setchartData] = useState({});
  const [barchartData, setbarchartData] = useState([]);

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

  useEffect(() => {
    let newData = [props.NewConfirmed, props.NewRecovered, props.NewDeaths];

    setbarchartData({
      labels: ['NewConfirmed', 'NewRecovered', 'NewDeaths'],
      datasets: [
        {
          label: 'Stats-Today',
          data: newData,
          fill: true,
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
        },
      ],
    });
  }, [props]);

  return (
    <div>
      <div className="global__stats-chart">
        <div className="global__stats-chart-1-of-2">
          <PieChart data={chartData} />
        </div>
        <div className="global__stats-chart-1-of-2">
          <BarChart data={barchartData} />
        </div>
      </div>
    </div>
  );
}
export default Global;
