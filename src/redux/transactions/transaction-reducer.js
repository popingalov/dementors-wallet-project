import { createReducer } from '@reduxjs/toolkit';
import transactionsOperations from './transaction-operations';

const initialState = {
  items: [],
  currentBalance: null,
}

const transactions = createReducer(initialState, {
  [transactionsOperations.fetchTransactions.fulfilled]: (state, { payload }) => {
    state.items = payload.transactions;
    state.currentBalance = payload.currentBalance;
  },
  [transactionsOperations.addTransaction.fulfilled]: (state, { payload }) => {
    state.items = payload;
    state.currentBalance = payload[0].balance;
  }
});

export default transactions;
