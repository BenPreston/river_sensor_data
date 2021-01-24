import React, { useEffect } from 'react';
import Chart from 'chart.js';

export default function Charts(selectedFlatRows) {
  const data = selectedFlatRows.data.map((item) => ({
    x: parseFloat(item.original.latitude),
    y: parseFloat(item.original.longitude),
  }));

  useEffect(() => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
      type: 'scatter',
      data: {
        datasets: [
          {
            label: 'Long vs Lat Graph',
            data,
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'linear',
              position: 'bottom',
            },
          ],
        },
      },
    });
  });
  return (
    <div className="App">
      <h2>Scater Graph</h2>
      <p>
        Graph to show long and lat plotted based on the vales selected in the
       
        table above
      </p>
      <canvas id="myChart" width="400" height="400" />
    </div>
  );
}
