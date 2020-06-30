import React from 'react';
import './pieChart.styles.scss';
import Chart from 'react-google-charts';

const PieChart = function (props) {
  let confirmed = props.TotalConfirmed;
  let deaths = props.TotalDeaths;
  let recovered = props.TotalRecovered;

  return (
    <Chart
      className="piechart-style"
      width={'100% '}
      height={'100%'}
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Language', 'Speakers (in millions)'],
        ['Confirmed', confirmed],
        ['Deaths', deaths],
        ['Recovered', recovered],
      ]}
      options={{
        legend: 'true',
        pieSliceText: 'label',
        title: 'COVID Statistics  Around The World',
        pieStartAngle: 120,
        backgroundColor: { fill: 'transparent' },
        is3D: true,
      }}
      rootProps={{ 'data-testid': '4' }}
    />
  );
};

export default PieChart;
