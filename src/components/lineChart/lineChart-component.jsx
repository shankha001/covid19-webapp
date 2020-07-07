import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
  return (
    <Line
      data={props.data}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              display: true,
              type: 'time',
              time: {
                tooltipFormat: 'D MMM',
                displayFormats: {
                  day: 'D MMM',
                },
              },
            },
          ],

          yAxis: [
            // etc...
          ],
        },
      }}
    />
  );
}

export default LineChart;
