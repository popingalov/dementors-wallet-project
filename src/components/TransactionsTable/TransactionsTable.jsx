import { useEffect } from 'react';
import Transaction from 'components/transaction';
import s from './TransactionsTable.module.css';

export default function TransactionsTable({ transactions, fetchTransactions }) {
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

  return transactions ? (
    <div id="no-more-tables">
      <table className={s.table}>
        <thead>
          <tr className={s.table_header}>
            <th className={s.ths}>Дата</th>
            <th className={s.ths}>Тип</th>
            <th className={s.ths}>Категория</th>
            <th className={s.ths}>Комментарий</th>
            <th className={s.ths}>Сумма</th>
            <th className={s.ths}>Баланс</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({ id, date, type, category, comment, amount, balance }) => {
              console.log(transactions);
              return (
                <tr key={id} className={s.table_row}>
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
    </div>
  ) : (
    'Nope'
  );
}
