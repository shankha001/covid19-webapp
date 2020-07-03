import React from 'react';
import { Pie } from 'react-chartjs-2';

function PieChart(props) {
  console.log(props.data);

  return (
    <Pie
      data={props.data}
      options={{
        responsive: true,
      }}
    />
  );
}

export default PieChart;
