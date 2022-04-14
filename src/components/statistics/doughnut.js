import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import s from './statistics.module.css';
import statisticsSelectors from 'redux/statistics/statistics-selectors';
import { getBalance } from 'redux/transactions/transaction-selectors';

ChartJS.register(ArcElement, Tooltip, Legend);

export const startV = {
  datasets: [
    {
      label: '# of Votes',
      data: [],
      backgroundColor: [],
      borderWidth: 1,
    },
  ],
};
const { datasets } = startV;

const Charts = () => {
  const balance = useSelector(getBalance);
  const statistics = useSelector(statisticsSelectors.statisticMinus);
  const [data, setData] = useState(startV);
  useEffect(() => {
    // datasets.flatMap(({ backgroundColor, data }) => {
    //   return statistics.forEach(({ color, minus }) => {
    //     backgroundColor.push(color);
    //     data.push(minus);
    //   }, []);
    // });
    const newData = {
      datasets: [
        {
          label: [],
          data: [],
          backgroundColor: [],
          borderWidth: 1,
        },
      ],
    };
    statistics.forEach(({ color, minus, category }) => {
      newData.datasets[0].backgroundColor.push(color);
      newData.datasets[0].data.push(minus);
      newData.datasets[0].label.push(category);
    });
    setData(newData);
  }, [statistics]);

  return (
    <div className={s.containerr}>
      <p className={s.balance}>
        ₴<span className={s.amount}>{balance || '0.00'}</span>{' '}
      </p>
      <Doughnut data={data} style={{ width: 320, height: 320 }} />
    </div>
  );
};
export default Charts;
