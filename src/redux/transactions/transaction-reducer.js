import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addTransaction, fetchTransactions } from './transaction-operations';

const items = createReducer([], {
  [fetchTransactions.fulfilled]: (_, { payload }) => payload,
  [addTransaction.fulfilled]: (state, { payload }) => [...state, payload],
});

const error = createReducer(null, {});

export default combineReducers({
  items,
  error,
});
