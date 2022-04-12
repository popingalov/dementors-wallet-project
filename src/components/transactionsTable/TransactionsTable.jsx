import { useEffect } from 'react';
import Transaction from 'components/transaction';
import s from './TransactionsTable.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export default function TransactionsTable({ transactions, fetchTransactions }) {
  const userName = useSelector(authSelectors.getUsername);
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return transactions.length ? (
    <table className={s.table}>
      <thead className={s.table_header}>
        <tr className={s.table_header_row}>
          <th className={s.ths}>Дата</th>
          <th className={s.ths}>Тип</th>
          <th className={s.ths}>Категория</th>
          <th className={s.ths}>Комментарий</th>
          <th className={s.ths}>Сумма</th>
          <th className={s.ths}>Баланс</th>
        </tr>
      </thead>
      <tbody className={s.table_body}>
        {transactions.map(
          ({ id, date, type, category, comment, amount, balance }) => {
            const isPositive = type === '+';
            return (
              <tr
                key={id}
                className={`${s.table_row} + ${
                  isPositive ? s.table_row_green : s.table_row_red
                }`}
              >
                <Transaction
                  date={date}
                  type={type}
                  category={category}
                  comment={comment}
                  amount={amount}
                  balance={balance}
                />
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  ) : (
    <div className={s.greetings}>
      <h2>Привет, {userName}!</h2>
      <p>
        Приложение Wallet поможет контролировать свои денежные операции удобно и
        просто.
      </p>
      <p>
        {userName}, у тебя пока еще нет совершенных транзакций. Для добавления
        новой транзакции нажми на плюс в правом нижнем углу.
      </p>
      <p>
        {' '}
        И хотим обратить внимание на то, что первая транзакция должна быть с
        указанным типом
        <span className={s.greetingsSpan}>"Доход"</span>, для того, чтобы далее
        было возможно отображать актуальный баланс средств и отслеживать
        денежные операции.
      </p>
    </div>
  );
}

