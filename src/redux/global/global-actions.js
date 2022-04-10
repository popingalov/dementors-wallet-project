const { createAction } = require('@reduxjs/toolkit');

const openModal = createAction('modal/openModal');
const closeModal = createAction('modal/closeModal');
const changeLanguage = createAction('language/changeLanguage')

const modalActions = {
  openModal,
  closeModal,
  changeLanguage
};
export default modalActions;
