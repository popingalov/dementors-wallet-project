import React, { useEffect, useState } from 'react';
import s from 'components/statistics/statistics.module.css';
import Donut from './doughnut';
import { useSelector, useDispatch } from 'react-redux';
import globalSelectors from '../../redux/global/global-selectors';
import statisticsSelectors from 'redux/statistics/statistics-selectors';
import statisticsOperations from 'redux/statistics/statistics-operations';
import { getData } from 'redux/transactions/transaction-selectors';
import { useTranslation } from 'react-i18next';
let Data = new Date();
const Year = Data.getFullYear();
const Month = Data.getMonth();

let fMonth = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
let enMonth = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export default function Statistics() {
  const { t } = useTranslation();
  const lang = useSelector(globalSelectors.lang);
  const dispatch = useDispatch();
  const statistics = useSelector(statisticsSelectors.statisticMinus);
  const statisticsPlus = useSelector(statisticsSelectors.statisticPlus);
  const balance = useSelector(statisticsSelectors.statisticTotal);
  const dataTransactions = useSelector(getData);
  const [monthForForm, setmonthForForm] = useState([]);
  const [years, setYears] = useState([]);
  const [getStatistics, setgetStatistics] = useState(null);
  const [triger, setTriger] = useState(true);
  useEffect(() => {
    dispatch(statisticsOperations.getStatistics());
    const yearsDis = Object.keys(dataTransactions).reverse();
    setYears(yearsDis);
    setmonthForForm(dataTransactions[yearsDis[0]]);
  }, [dispatch]);

  const cklickYear = e => {
    const year = e.target.value;
    setgetStatistics(year);
    setmonthForForm(dataTransactions[year]);
  };
  const clickMonth = e => {
    const month = e.target.value;

    dispatch(
      statisticsOperations.getStatistics({
        month,
        year: getStatistics || '2022',
      }),
    );
  };
  const test = triger ? statistics : statisticsPlus;
  return (
    <div className={s.box_statistics}>
      <div className={s.box_circle}>
        <p className={s.title_statistics}>{t('statisticsTitle')}</p>
        <div className={s.section} id={s.container}>
          <Donut />
        </div>
      </div>
      <div className={s.container_statistics}>
        <div className={s.box_data}>
          <form name="form1">
            <p>
              <select onChange={clickMonth} className={s.months} name="list1">
                {monthForForm?.map(item => {
                  return (
                    <option key={item} value={item}>
                      {lang ? enMonth[item[1]] : fMonth[item[1]]}
                    </option>
                  );
                })}
              </select>
            </p>
          </form>
          <form name="form2">
            <p>
              <select onChange={cklickYear} className={s.months} name="list2">
                {years.map((item, index) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </p>
          </form>
        </div>

        <div className={s.box_category_summa}>
          <p className={s.category}>{t('statisticsCategory')}</p>
          <p className={s.summa}>{t('statisticsAmounts')}</p>
        </div>

        <ul className={s.list_statistics}>
          {test?.map(({ category, color, value }) => {
            return (
              <li key={color}>
                <div
                  style={{ background: color }}
                  className={s.rectangle}
                ></div>
                <p className={s.info_statistics}>{category}</p>
                <p>{value}</p>
              </li>
            );
          })}

          <li>
            <button
              onClick={() => setTriger(true)}
              className={s.info_statistics_expenses}
            >
              {t('statisticsOutcomes')}
            </button>
            <p>{balance[1]}</p>
          </li>

          <li>
            <button
              onClick={() => setTriger(false)}
              className={s.info_statistics_income}
            >
              {t('statisticsIncomes')}
            </button>
            <p>{balance[0]}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
