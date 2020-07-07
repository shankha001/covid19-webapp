import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart(props) {
  return (
    <Pie
      data={props.data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}

export default PieChart;
