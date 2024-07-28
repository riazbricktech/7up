import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import SpinSlice from '../slice/SpinSlice';
import CitySlice from '../slice/CitySlice';
import QrCodeSlice from '../slice/QrCodeSlice';

import CreateUserSlice from '../slice/CreateUserSlice';
import { combineReducers } from 'redux';
import WinPrizeSlice from '../slice/WinPrizeSlice';
import healthCheckSlice from "../slice/HealthSlice";
import TransactionSlice from '../slice/TransactionSlice';
import TransactionCountSlice from '../slice/TransactionCountSlice';
// Combine all your slices into a rootReducer
const rootReducer = combineReducers({
  spin: SpinSlice,
  cities: CitySlice,
  user: CreateUserSlice,
  qrCode: QrCodeSlice,
  prizeDetail :WinPrizeSlice,
  health:healthCheckSlice,
  taction: TransactionSlice,
transactionCount:TransactionCountSlice
});

// Configuration for redux-persist
const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['cities','health'], // Exclude CitySlice from persisting
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
