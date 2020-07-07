import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChart(props) {
  return (
    <Bar
      data={props.data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}

export default BarChart;
