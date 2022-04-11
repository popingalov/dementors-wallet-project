import { createSlice } from "@reduxjs/toolkit";
import { addCategory, getCategories } from "./categories-operations";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categoties",
  initialState,
  extraReducers: {
    [getCategories.fulfilled](state, action) {
      state.categories = action.payload;
    },
    [addCategory.fulfilled]( state, { payload }) {
      state.categories = [...state.categories, payload];
    },
  },
});

export default categorySlice.reducer;
