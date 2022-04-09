import { connect } from 'react-redux';
import TransactionsTable from './TransactionsTable';
import {
  transactionsOperations,
  transactionsSelectors,
} from '../../redux/transactions';

const mapStateToProps = state => ({
  transactions: transactionsSelectors.getTransactions(state),
  isLoading: transactionsSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(transactionsOperations.fetchTransactions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsTable);
