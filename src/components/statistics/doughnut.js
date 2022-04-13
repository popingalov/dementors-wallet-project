import React, { useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import s from './statistics.module.css';
import statisticsSelectors from 'redux/statistics/statistics-selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [],
      borderWidth: 1,
    },
  ],
};
const { datasets } = data;

const Charts = () => {
  const statistics = useSelector(statisticsSelectors.statisticMinus);
  ппппппппппппппппппппппп;
  useEffect(() => {
    datasets.flatMap(({ backgroundColor, data }) => {
      return statistics.forEach(({ color, minus }) => {
        backgroundColor.push(color);
        data.push(minus);
      }, []);
    });
  }, []);

  return (
    <div className={s.containerr}>
      <Doughnut data={data} style={{ width: 320, height: 320 }} />
    </div>
  );
};
export default Charts;
