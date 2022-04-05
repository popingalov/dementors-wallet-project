import { Table, Thead, Tbody, Tr, Th } from 'react-super-responsive-table'
import Transaction from 'components/Transaction'

const transactions = {
  'date': '04.11.19',
  'type': 'costs',
  'category': 'рвзное',
  "comment": "hihihi",
  "amount": 220,
  "balance": 1520
}

export default function TransactionsTable({transactions}) {
    return <Table>
  <Thead>
    <Tr>
      <Th>Дата</Th>
      <Th>Тип</Th>
      <Th>Категория</Th>
      <Th>Категория</Th>
      <Th>Сумма</Th>
      <Th>Баланс</Th>
    </Tr>
  </Thead>
  <Tbody>
    {transactions.map((id, date, type,category, comment, amount, balance) => {
    <Tr key={id}>
      <Transaction date={date} type={type} category={category} comment={comment} amount={amount} balance={balance}/>
    </Tr>
    })}
  </Tbody>
</Table>
}
