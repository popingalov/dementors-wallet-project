import { createReducer } from '@reduxjs/toolkit';
import { setPage } from './transaction-actions';
import transactionsOperations from './transaction-operations';

const initialState = {
  items: [],
  currentBalance: null,
  currentPage: 1,
  pages: 1,
};

const transactions = createReducer(initialState, {
  [setPage]: (state, { payload }) => {
    state.currentPage = payload;
  },
  [transactionsOperations.fetchTransactions.fulfilled]: (
    state,
    { payload },
  ) => {
    state.items = payload.transactions;
    state.currentBalance = payload.currentBalance;
    state.data = payload.yearAndMonth;
    state.pages = Math.ceil(payload.pages);
  },
  [transactionsOperations.addTransaction.fulfilled]: (state, { payload }) => {
    state.items = payload;
    state.currentBalance = payload[0].balance;
    state.currentPage = 1;
  },
});

export default transactions;
