export const getTransactions = state => state.transactions.items;
export const getBalance = state => state.transactions.items.at(-1)?.balance;
export const getIsLoading = state => state.transactions.isLoading;
