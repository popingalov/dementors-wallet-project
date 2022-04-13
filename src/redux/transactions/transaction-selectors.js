export const getTransactions = state => state.transactions.items;
export const getBalance = state => state.transactions.items.at(0)?.balance;
export const getIsLoading = state => state.transactions.isLoading;
