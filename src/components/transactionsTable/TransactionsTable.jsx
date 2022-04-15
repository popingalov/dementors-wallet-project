import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Transaction from 'components/transaction';
import s from './TransactionsTable.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import transactionsOperations from '../../redux/transactions/transaction-operations'
import { useSelector } from 'react-redux';
import globalSelectors from '../../redux/global/global-selectors';
import {getTransactions} from '../../redux/transactions/transaction-selectors'

export default function TransactionsTable() {
  const userName = useSelector(authSelectors.getUsername);
  const lang = useSelector(globalSelectors.lang);
  const transactions = useSelector(getTransactions)
  console.log(transactions, "transactions from TransactionsTable")
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(transactionsOperations.fetchTransactions(page));
  }, [dispatch, page]);

  const setNextPage = () => setPage(page + 1);
  const setPreviousPage = () => setPage(page - 1);

  return transactions.length ? (
    <>
      <table className={s.table}>
        <thead className={s.table_header}>
          <tr key="asd" className={s.table_header_row}>
            <th className={s.ths}>{lang ? 'Date' : 'Дата'}</th>
            <th className={s.ths}>{lang ? 'Type' : 'Тип'}</th>
            <th className={s.ths}>{lang ? 'Category' : 'Категория'}</th>
            <th className={s.ths}>{lang ? 'Comment' : 'Комментарий'}</th>
            <th className={s.ths}>{lang ? 'Amount' : 'Сумма'}</th>
            <th className={s.ths}>{lang ? 'Balance' : 'Баланс'}</th>
          </tr>
        </thead>
        <tbody className={s.table_body}>
          {transactions.map(
            ({ _id, date, type, category, comment, amount, balance }) => {
              const isPositive = type === '+';
              return (
                <tr
                  key={_id}
                  className={`${s.table_row} + ${
                    isPositive ? s.table_row_green : s.table_row_red
                  }`}
                >
                  <Transaction
                    //   key={id}
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
      <div className={s.arrowsBtnWrap}>
        <button
          className={s.loadLessButton}
          type="button"
          name="loadLess"
          disabled = {page === 1}
          onClick={setPreviousPage}
        ></button>
        <button
          className={s.loadMoreButton}
          type="button"
          name="loadMore"
          onClick={setNextPage}
        ></button>
      </div>
    </>
  ) : (
    <div className={s.greetings}>
      <h2>{lang ? `Hello, ${userName}!` : `Привет, ${userName}!`}</h2>
      <p>
        {lang
          ? 'The Wallet app will help you control your money transactions conveniently and easily.'
          : ' Приложение Wallet поможет контролировать свои денежные операции удобно и просто.'}
      </p>
      <p>
        {lang
          ? `${userName}, you don't have any transactions yet. To add a new transaction, click on the plus in the lower right corner.`
          : `${userName}, у тебя пока еще нет совершенных транзакций. Для добавления новой транзакции нажми на плюс в правом нижнем углу.`}
      </p>
      {lang ? (
        <p>
          And we want to draw your attention to the fact that the first
          transaction must be with specified type
          <span className={s.greetingsSpan}>"Incomes"</span>, in order to make
          it possible to display the current balance of funds and track money
          transactions.
        </p>
      ) : (
        <p>
          И хотим обратить внимание на то, что первая транзакция должна быть с
          указанным типом
          <span className={s.greetingsSpan}>"Доход"</span>, для того, чтобы
          далее было возможно отображать актуальный баланс средств и отслеживать
          денежные операции.
        </p>
      )}
    </div>
  );
}
