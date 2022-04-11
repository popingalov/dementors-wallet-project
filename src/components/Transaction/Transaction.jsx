import { Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import PropTypes from 'prop-types'
import s from './Transaction.module.css'

export default function Transaction({ date, type, category, comment, amount, balance }) {
  const isPositive = type === "+";
  console.log(isPositive);
    return <>
        <td data-title="Date" className={s.table_column}>{date}</td>
      <td data-title="Type" className={s.table_column}>{type}</td>
      <td data-title="Category" className={s.table_column}>{category}</td>
      <td data-title="Comment" className={s.table_column}>{comment}</td>
      <td data-title="Amount" className={isPositive ? s.green : s.red}>{amount}</td>
        <td data-title="Balance" className={s.table_column}>{balance}</td>
    </>
}

Transaction.propTypes = {
    date: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  comment: PropTypes.string,
  amount: PropTypes.number.isRequired,
  balance: PropTypes.number.isRequired
}
