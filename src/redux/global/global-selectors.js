const isLoadingSpinner = state => state.global.isLoading;
const isModalOpen = state => state.global.isModalLogOutOpen;
const isModalAddTransactionOpen = state =>
  state.global.isModalAddTransactionOpen;
const globalSelectors = {
  isLoadingSpinner,
  isModalOpen,
  isModalAddTransactionOpen,
};
export default globalSelectors;
