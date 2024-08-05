import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import SpinSlice from "../slice/SpinSlice";
import CitySlice from "../slice/CitySlice";
import QrCodeSlice from "../slice/QrCodeSlice";
import CreateUserSlice from "../slice/CreateUserSlice";
import WinPrizeSlice from "../slice/WinPrizeSlice";
import healthCheckSlice from "../slice/HealthSlice";
import TransactionSlice from "../slice/TransactionSlice";
import errorMiddleware from "../../middleware/errorMiddleware";
import errorSlice from "../slice/errorSlice";
const rootReducer = combineReducers({
  spin: SpinSlice,
  cities: CitySlice,
  user: CreateUserSlice,
  qrCode: QrCodeSlice,
  prizeDetail: WinPrizeSlice,
  health: healthCheckSlice,
  taction: TransactionSlice,
  error: errorSlice,
});

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["health", "error"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }).concat(errorMiddleware),
});

const persistor = persistStore(store);

export { store, persistor };
