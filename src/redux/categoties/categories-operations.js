import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const getCategories = createAsyncThunk("category/fetchCategories", async (_, { rejectWithValue }) => {
  try {
    const { data } = await axios.get("/categories");
    console.log(data);
    return data;
  } catch (error) {
    toast.error("Проверьте верность введите данных");
    return rejectWithValue(error);
  }
});

const addCategory = createAsyncThunk("category/addCategory", async (category, { getState, rejectWithValue }) => {

  const state = getState();

  const { isEnglishVersion } = state.global;

  const newCategoryObj = {
    value: category,
    isEnglishVersion
  }  

  try {
    const { data } = await axios.post("/categories", newCategoryObj);
    return data;
  } catch (error) {
    toast.error("Проверьте верность введите данных");
    return rejectWithValue(error);
  }
});

const operations = {
  getCategories,
  addCategory
};
export default operations;
