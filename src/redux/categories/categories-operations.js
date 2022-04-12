import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const getCategories = createAsyncThunk(
  'category/fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/categories');
      return data;
    } catch (error) {
      toast.error('Проверьте верность введите данных');
      return rejectWithValue(error);
    }
  },
);

const categoriesOperations = {
  getCategories,
};
export default categoriesOperations;
