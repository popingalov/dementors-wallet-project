import { useSelector } from 'react-redux';
import { getBalance } from 'redux/transactions/transaction-selectors';
import s from './Balance.module.css';
export default function Balance() {
  const balance = useSelector(getBalance);

  return (
    <>
      <div className={s.container}>
        <span className={s.text}>ВАШ БАЛАНС</span>
        <p className={s.balance}>₴{balance}</p>
      </div>
    </>
  );
}
