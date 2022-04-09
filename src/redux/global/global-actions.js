const { createAction } = require('@reduxjs/toolkit');

const openModal = createAction('modal/openModal');
const closeModal = createAction('modal/closeModal');

const isModalAddTransactionOpen = createAction('modal/toggleModal');
const modalActions = {
  openModal,
  closeModal,
  isModalAddTransactionOpen,
};
export default modalActions;
