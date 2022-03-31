import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const error = createReducer(null, {
  '[fetchContactsError]': (_, { payload }) => toast.error(payload),
});

export default combineReducers({
  error,
});
