import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getCategories } from "../categoties/categories-operations";

const error = createReducer(null, {
  '[fetchContactsError]': (_, { payload }) => toast.error(payload),
  [getCategories.rejected]: (_, { payload }) => toast.error(payload),
});

export default combineReducers({
  error,
});
