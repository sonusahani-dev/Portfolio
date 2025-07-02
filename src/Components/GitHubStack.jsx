import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

// Register all chart components
Chart.register(...registerables);

const GitHubStats = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      
      // Create new chart instance
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Contributions',
            data: [45, 52, 38, 67, 49, 73, 58, 84, 62, 91, 47, 55],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: {
                color: '#e2e8f0'
              }
            }
          },
          scales: {
            x: {
              type: 'category', // Explicitly specify scale type
              ticks: {
                color: '#e2e8f0'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            },
            y: {
              type: 'linear', // Explicitly specify scale type
              ticks: {
                color: '#e2e8f0'
              },
              grid: {
                color: 'rgba(255, 255, 255, 0.1)'
              }
            }
          }
        }
      });
    }

    // Cleanup function to destroy chart when component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, []);

  const stats = [
    { value: '5+', label: 'Repositories' },
    { value: '400+', label: 'Commits' },
    { value: '50+', label: 'Pull Requests' },
    { value: '05+', label: 'Contributors' }
  ];

  return (
    <section id="github-stats" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 gradient-text">GitHub Activity</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 rounded-xl text-center">
              <div className="stat-number">{stat.value}</div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="card p-8 rounded-xl">
          <h3 className="text-xl font-semibold mb-6 text-center">Contribution Activity</h3>
          <div style={{ height: '400px' }}>
            <canvas ref={chartRef} id="contributionChart"></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStats;