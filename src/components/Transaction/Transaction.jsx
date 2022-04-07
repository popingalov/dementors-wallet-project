import { Td } from 'react-super-responsive-table'
import PropTypes from 'prop-types'
import s from './Transaction.module.css'

export default function Transaction({date, type,category, comment, amount, balance}) {
    return <>
        <Td className={s.table_column}>{date}</Td>
      <Td className={s.table_column}>{type}</Td>
      <Td className={s.table_column}>{category}</Td>
      <Td className={s.table_column}>{comment}</Td>
      <Td className={s.table_column}>{amount}</Td>
        <Td className={s.table_column}>{balance}</Td>
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
