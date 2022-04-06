const isLoadingSpinner = state => state.global.isLoading;
const isModalOpen = state => state.global.isModalLogOutOpen;
const globalSelectors = { isLoadingSpinner, isModalOpen };
export default globalSelectors;
