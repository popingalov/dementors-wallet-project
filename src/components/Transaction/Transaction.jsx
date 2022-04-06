import { Td } from 'react-super-responsive-table'
import PropTypes from 'prop-types'

export default function Transaction({date, type,category, comment, amount, balance}) {
    return <>
        <Td>{date}</Td>
      <Td>{type}</Td>
      <Td>{category}</Td>
      <Td>{comment}</Td>
      <Td>{amount}</Td>
        <Td>{balance}</Td>
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
