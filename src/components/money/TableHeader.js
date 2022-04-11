import s from './Money.module.css';
const TableHeader = () => {
  return (
    <thead className={`${s.tableRow} ${s.tableRowHeader}`}>
      <tr className={s.tableCell}>
        <td>Валюта</td>
      </tr>
      <tr className={s.tableCell}>
        <td>Покупка</td>
      </tr>
      <tr className={s.tableCell}>
        <td>Продажа</td>
      </tr>
    </thead>
  );
};

export default TableHeader;
