import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

function BarChart(props) {
  return (
    <HorizontalBar
      data={props.data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
      }}
    />
  );
}

export default BarChart;
