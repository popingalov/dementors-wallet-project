const { createAction } = require('@reduxjs/toolkit');

const openModal = createAction('modal/openModal');
const closeModal = createAction('modal/closeModal');

const modalActions = {
  openModal,
  closeModal,
};
export default modalActions;
