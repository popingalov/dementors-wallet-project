import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addTransaction, fetchTransactions } from './transaction-operations';

const items = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [addTransaction.fulfilled]: (state, { payload }) => [...state, payload],
});

const isLoading = createReducer(false, {
  [fetchTransactions.pending]: () => true,
  [fetchTransactions.fulfilled]: () => false,
  [fetchTransactions.rejected]: () => false,

  [addTransaction.pending]: () => true,
  [addTransaction.fulfilled]: () => false,
  [addTransaction.rejected]: () => false,
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  isLoading,
  error,
});
