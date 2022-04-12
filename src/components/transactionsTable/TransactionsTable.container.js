import { connect } from 'react-redux';
import transactionsOperations from '../../redux/transactions/transaction-operations';
import { getTransactions } from '../../redux/transactions/transaction-selectors';
import TransactionsTable from './TransactionsTable';
//import trnsExmp from '../../helpers/trns-example.json';

const mapStateToProps = state => ({
  /* 
  transactions: trnsExmp, */
  transactions: getTransactions(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTransactions: () => dispatch(transactionsOperations.fetchTransactions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTable);
