import { useEffect } from 'react';
import Transaction from 'components/transaction';
import s from './TransactionsTable.module.css';

export default function TransactionsTable({ transactions, fetchTransactions }) {
 
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);
  
  return transactions.length ? 
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
              const isPositive = type === "+";
              return (
                <tr key={id} className={`${s.table_row} + ${isPositive ? s.table_row_green : s.table_row_red}`}>
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
   : (
    'Дорогой пользователь, у тебя пока еще нет совершенных транзакций. Для добавления новой нажми на плюс внизу справа.'
  );
}
