const { createAction } = require('@reduxjs/toolkit');

const openModal = createAction('modal/openModal');
const closeModal = createAction('modal/closeModal');

const modalLogOutOpen = createAction('modal/modalLogOutOpen');
const modalLogOutClose = createAction('modal/modalLogOutClose');

const modalAddTransactionOpen = createAction('modal/modalAddTransactionOpen');
const modalAddTransactionClose = createAction('modal/modalAddTransactionClose');
const modalActions = {
  openModal,
  closeModal,
  modalAddTransactionOpen,
  modalAddTransactionClose,
  modalLogOutOpen,
  modalLogOutClose,
};
export default modalActions;
