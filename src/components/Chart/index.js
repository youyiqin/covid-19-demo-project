import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../Servers'
import { Line, Bar } from 'react-chartjs-2';
import styles from './chart.module.css';

const Chart = ({ data: {confirmed, deaths, recovered} , country}) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData())
    }
    fetchApi();
  }, [])

  const lineChart = (
    dailyData.length !== 0
      ? <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infected',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, .5)',
              fill: true,
            }, {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Recovered',
              borderColor: 'green', 
              backgroundColor: 'rgba(25, 0, 250, .5)',
              fill: true,
            }
          ]
        }}
      /> : null
  )

  const barChart = (
    confirmed ? (
      <Bar 
        data={{
          labels: ['Infected', 'Recovered', 'deaths'],
          datasets: [{
            label: 'People',
            backgroundColor: [
              'rgba(0, 0, 255, .5)',              
              'rgba(0, 255, 0, .5)',
              'rgba(255, 0, 0, .5)',
            ],
            data: [
              confirmed.value,
              recovered.value,
              deaths.value
            ]
          }]
        }}
        options={{
          legend: { display: false },
          title: { display:true, text: `Current state in ${country}` },
        }}
      />
    ) : null
  )
        
  return (
    <div className={styles.container}>
      {
        country ? barChart : lineChart
      }
    </div>
  )
}

export default Chart;