import { createAsyncThunk } from '@reduxjs/toolkit';
import * as transactionsApi from 'services/transaction-api';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const transactions = await transactionsApi.fetchTransactions();
      console.log('OPERATIONS', transactions);
      return transactions;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async transaction => {
    const transactionToAdd = await transactionsApi.addTransaction(transaction);
    return transactionToAdd;
  },
);

export { fetchTransactions, addTransaction };
