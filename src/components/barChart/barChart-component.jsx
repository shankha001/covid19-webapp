import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart(props) {
  return <Bar data={props.data} width={220} height={120} />;
}

export default BarChart;
