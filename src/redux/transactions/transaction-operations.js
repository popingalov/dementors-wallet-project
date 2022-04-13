import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dementrors-waller.herokuapp.com/api';

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
    console.log(transaction, 'transaction');
    const state = getState();

    const { isEnglishVersion } = state.global;
    const { newCategory, date, type, comment, amount } = transaction;

    try {
      if (newCategory) {
        const newCategoryObj = {
          value: newCategory,
          isEnglishVersion,
        };

        const response = await axios.post('/categories', newCategoryObj);

        const newTransaction = {
          date,
          type,
          category: response.data.newCategory.value,
          comment,
          amount,
        };

        const data = await axios.post('/transactions', newTransaction);

        return data.data;
      }

      console.log(transaction, 'transaction after condition');

      const response = await axios.post('/transactions', transaction);

      console.log(response, 'data with static category');

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const transactionsOperations = { fetchTransactions, addTransaction };

export default transactionsOperations;
