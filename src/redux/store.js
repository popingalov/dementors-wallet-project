import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import categoryReducer from './categories/categories-slice';
import authReducer from './auth/auth-slice';
import transactionsReducer from './transactions/transaction-reducer';
import loadingReducer from './global/global-reducer';
import statisticsReducer from './statistics/statistics-reducer';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    categories: categoryReducer,
    transactions: transactionsReducer,
    global: loadingReducer,
    statistics: statisticsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
