import { createReducer } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { combineReducers } from 'redux';
import categoriesOperations from '../categoties/categories-operations';
import transactionsOperations from '../transactions/transaction-operations';
import authOperations from '../auth/auth-operations';
import modalActions from './global-actions';

const {
  changeLanguage,
  openModal,
  closeModal,
  modalAddTransactionOpen,
  modalAddTransactionClose,
  modalLogOutClose,
  modalLogOutOpen,
} = modalActions;

const isModalOpen = createReducer(false, {
  [openModal]: () => true,
  [closeModal]: () => false,
});

const isModalLogOutOpen = createReducer(false, {
  [modalLogOutOpen]: () => true,
  [modalLogOutClose]: () => false,
});

const isModalAddTransactionOpen = createReducer(false, {
  [modalAddTransactionOpen]: () => true,
  [modalAddTransactionClose]: () => false,
});

const isEnglishVersion = createReducer( false, {
  [changeLanguage]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [authOperations.logOut.pending]: () => true,
  [authOperations.logOut.fulfilled]: () => false,
  [authOperations.logOut.rejected]: () => false,
  [authOperations.logIn.pending]: () => true,
  [authOperations.logIn.fulfilled]: () => false,
  [authOperations.logIn.rejected]: () => false,
  [authOperations.fetchCurrentUser.pending]: () => true,
  [authOperations.fetchCurrentUser.fulfilled]: () => false,
  [authOperations.fetchCurrentUser.rejected]: () => false,
  [authOperations.register.pending]: () => true,
  [authOperations.register.fulfilled]: () => false,
  [authOperations.register.rejected]: () => false,
  [openModal.pending]: () => true,
  [openModal.fulfilled]: () => false,
  [openModal.rejected]: () => false,
  [closeModal.pending]: () => true,
  [closeModal.fulfilled]: () => false,
  [closeModal.rejected]: () => false,
});

const error = createReducer(null, {
  [categoriesOperations.getCategories.rejected]: (_, { payload }) => toast.error(payload),
  [transactionsOperations.fetchTransactions.rejected]: (_, { payload }) => toast.error(payload),
  [transactionsOperations.addTransaction.rejected]: (_, { payload }) => toast.error(payload),
});

export default combineReducers({
  isLoading,
  isModalOpen,
  isModalAddTransactionOpen,
  isEnglishVersion,
  isModalLogOutOpen,
  error,
});
