import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import {useEffect} from 'react'
import Transaction from 'components/transaction'
import s from './TransactionsTable.module.css'

export default function TransactionsTable({ transactions, fetchTransactions }) {
  
  useEffect(() => {
        fetchTransactions();
  }, [fetchTransactions])  
   
  return <Table className={s.table}>
  <Thead >
    <Tr className={s.table_header}>
      <Th className={s.ths}>Дата</Th>
      <Th className={s.ths}>Тип</Th>
      <Th className={s.ths}>Категория</Th>
      <Th className={s.ths}>Категория</Th>
      <Th className={s.ths}>Сумма</Th>
      <Th className={s.ths}>Баланс</Th>
    </Tr>
  </Thead>
  <Tbody>
        {transactions.map(({ id, date, type, category, comment, amount, balance }) => {
          return <Tr key={id} className={s.table_row}>
                    <Transaction date={date} type={type} category={category} comment={comment} amount={amount} balance={balance}/>
                 </Tr>
    })}
  </Tbody>
</Table>
}
