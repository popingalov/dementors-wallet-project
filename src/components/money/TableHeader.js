import s from './Money.module.css';
const TableHeader = () => {
  return (
    <thead className={`${s.tableRow} ${s.tableRowHeader}`}>
      <th className={s.tableCell}>Валюта</th>
      <th className={s.tableCell}>Покупка</th>
      <th className={s.tableCell}>Продаж</th>
    </thead>
  );
};

export default TableHeader;
