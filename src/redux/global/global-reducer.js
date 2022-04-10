import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { combineReducers } from 'redux';
import { fetchCurrentUser, logIn, logOut, register } from '../auth/auth-operations';
import { addCategory, getCategories } from "../categoties/categories-operations";
import { changeLanguage, closeModal, openModal } from './global-actions';

const isModalLogOutOpen = createReducer(false, {
  [openModal]: () => true,
  [closeModal]: () => false,
});

const isEnglishVersion = createReducer(false, {
  [changeLanguage]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [logOut.pending]: () => true,
  [logOut.fulfilled]: () => false,
  [logOut.rejected]: () => false,
  [logIn.pending]: () => true,
  [logIn.fulfilled]: () => false,
  [logIn.rejected]: () => false,
  [fetchCurrentUser.pending]: () => true,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.rejected]: () => false,
  [register.pending]: () => true,
  [register.fulfilled]: () => false,
  [register.rejected]: () => false,
  [openModal.pending]: () => true,
  [openModal.fulfilled]: () => false,
  [openModal.rejected]: () => false,
  [closeModal.pending]: () => true,
  [closeModal.fulfilled]: () => false,
  [closeModal.rejected]: () => false,
});

const error = createReducer( null, {
  [getCategories.rejected]: (_, { payload }) => toast.error(payload),
  [addCategory.rejected]: (_, { payload }) => toast.error(payload),
});

export default combineReducers({
  isLoading,
  isEnglishVersion,
  isModalLogOutOpen,
  error
});
