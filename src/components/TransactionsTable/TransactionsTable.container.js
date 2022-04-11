import { connect } from 'react-redux';
import TransactionsTable from './TransactionsTable';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions';
import trnsExmp from '../../helpers/trns-example.json';

const mapStateToProps = state => ({
  transactions: trnsExmp,
  /* transactions: transactionsSelectors.getTransactions(state), */
});

const mapDispatchToProps = dispatch => ({
  fetchTransactions: () => dispatch(transactionsOperations.fetchTransactions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTable);
