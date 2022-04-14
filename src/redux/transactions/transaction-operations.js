import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://dementrors-waller.herokuapp.com/api';

const fetchTransactions = createAsyncThunk(
  'transactions/fetchTransactions',
  async (page = 1, { rejectWithValue, getState }) => {
    try {
      const state = getState().transactions.items;
      if (state.length && page === 1) {
        return state;
      }
      const { data } = await axios.get(`/transactions?page=${page}`);
      const result = state ? [...data, ...state] : data;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transaction, { getState, rejectWithValue }) => {
    const state = getState();
    const { isEnglishVersion } = state.global;
    const { newCategory, date, dataFiltr, type, comment, amount, triger } =
      transaction;

    try {
      if (newCategory) {
        const newCategoryObj = {
          value: newCategory,
          isEnglishVersion,
        };

        const response = await axios.post('/categories', newCategoryObj);

        const newTransaction = {
          date,
          dataFiltr,
          type,
          category: response.data.newCategory.value,
          comment,
          amount,
          triger,
        };

        const data = await axios.post('/transactions', newTransaction);

        return data.data;
      }

      const response = await axios.post('/transactions', transaction);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const transactionsOperations = { fetchTransactions, addTransaction };

export default transactionsOperations;
