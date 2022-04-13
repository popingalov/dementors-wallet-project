import React from 'react';
import s from 'components/statistics/statistics.module.css';
import Donut from './doughnut';
import { useSelector } from 'react-redux';
import globalSelectors from '../../redux/global/global-selectors';

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
  const lang = useSelector(globalSelectors.lang);
  return (
    <div className={s.box_statistics}>
      <div className={s.box_circle}>
        <p className={s.title_statistics}>
          {lang ? 'Statistics' : 'Статистика'}
        </p>
        <div className={s.section} id={s.container}>
          <Donut />
        </div>
      </div>
      <div className={s.container_statistics}>
        <div className={s.box_data}>
          <div className={s.months}>
            {lang ? enMonth[Month] : fMonth[Month]}
          </div>
          <div className={s.years}> {Year}</div>
        </div>

        <div className={s.box_category_summa}>
          <p className={s.category}>{lang ? 'Category' : 'Категория'}</p>
          <p className={s.summa}>{lang ? 'Amount' : 'Cумма'}</p>
        </div>

        <ul className={s.list_statistics}>
          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>
              {lang ? 'Basic expences' : 'Основные расходы'}
            </p>
            <p>0</p>
          </li>

          <li>
            <div className={s.produkt}></div>
            <p className={s.info_statistics}>
              {lang ? 'Products' : 'Продукты'}
            </p>
            <p>0</p>
          </li>

          <li>
            <div className={s.car}></div>
            <p className={s.info_statistics}> {lang ? 'Car' : 'Машина'}</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.taking}></div>
            <p className={s.info_statistics}>
              {lang ? 'Self care' : 'Забота о себе'}
            </p>
            <p>0</p>
          </li>

          <li>
            <div className={s.child}></div>
            <p className={s.info_statistics}>
              {lang ? 'Child care' : 'Забота о детях'}
            </p>
            <p>0</p>
          </li>

          <li>
            <div className={s.home}></div>
            <p className={s.info_statistics}>
              {lang ? 'Household products' : 'Товары для дома'}
            </p>
            <p>0</p>
          </li>

          <li>
            <div className={s.education}></div>
            <p className={s.info_statistics}>
              {lang ? 'Education' : 'Образование'}
            </p>
            <p>0</p>
          </li>

          <li>
            <div className={s.rectangle}></div>
            <p className={s.info_statistics}>{lang ? 'Leisure' : 'Досуг'}</p>
            <p>0</p>
          </li>

          <li>
            <div className={s.otherExpenses}></div>
            <p className={s.info_statistics}>
              {lang ? 'Other expences' : 'Другие расходы'}
            </p>
            <p className={s.statistics_summa}>0</p>
          </li>

          <li>
            <p className={s.info_statistics_expenses}>
              {lang ? 'Outcomes' : 'Расходы'}:
            </p>
            <p>000</p>
          </li>

          <li>
            <p className={s.info_statistics_income}>
              {lang ? 'Incomes' : 'Доходы'}:
            </p>
            <p>0000</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
