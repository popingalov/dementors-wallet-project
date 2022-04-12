import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const getCategories = createAsyncThunk(
  'category/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/categories');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const categoriesOperations = {
  getCategories,
};
export default categoriesOperations;
