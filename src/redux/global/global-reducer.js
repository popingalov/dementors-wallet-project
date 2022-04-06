import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import modalActions from './global-actions';
import operations from '../auth/auth-operations';

const { logOut, logIn, fetchCurrentUser, register } = operations;
const { openModal, closeModal } = modalActions;

const isModalLogOutOpen = createReducer(false, {
  [openModal]: () => true,
  [closeModal]: () => false,
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
export default combineReducers({
  isLoading,
  isModalLogOutOpen,
});
