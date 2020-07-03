import React from 'react';
import { Line } from 'react-chartjs-2';

function LineChart(props) {
  return (
    <Line
      data={props.data}
      width={220}
      height={120}
      options={{
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
