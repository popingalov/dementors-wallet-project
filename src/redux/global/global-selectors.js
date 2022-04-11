const isLoadingSpinner = state => state.global.isLoading;
const isModalOpen = state => state.global.isModalOpen;
const isModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;
const isModalLogOutOpen = state => state.global.isModalLogOutOpen;
const globalSelectors = {
  isLoadingSpinner,
  isModalOpen,
  isModalAddTransactionOpen,
  isModalLogOutOpen,
};
export default globalSelectors;
