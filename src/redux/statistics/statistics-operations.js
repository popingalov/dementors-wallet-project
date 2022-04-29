import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/statistics', date);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const statisticsOperations = {
  getStatistics,
};

export default statisticsOperations;
