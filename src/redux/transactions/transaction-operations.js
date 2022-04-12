import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/transactions');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, { getState, rejectWithValue }) => {
    console.log(transaction);
    const state = getState();

    const { isEnglishVersion } = state.global;
    const { newCategory, date, type, comment, amount } = transaction;

    const newCategoryObj = {
      value: newCategory,
      isEnglishVersion,
    };

    try {
      if (newCategory) {
        const {
          data: { value },
        } = await axios.post('/categories', newCategoryObj);

        const newTransaction = { date, type, category: value, comment, amount };

        const { data } = await axios.post('/transactions', newTransaction);

        return data;
      }

      const { data } = await axios.post('/transactions', transaction);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const transactionsOperations = { fetchTransactions, addTransaction };

export default transactionsOperations;
