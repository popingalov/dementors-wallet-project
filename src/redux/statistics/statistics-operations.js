import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getStatistics = createAsyncThunk(
  'statistics/fetchStatistics',
  async (date, { rejectWithValue }) => {
    try {
      console.log(date);
      const { data } = await axios.post('/statistics', date);
      console.log(data);
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
