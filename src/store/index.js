import { configureStore } from '@reduxjs/toolkit'
import { weatherDataSliceReducer, cityHistorySliceReducer } from './weatherSlice'
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
const persistConfig = {
  key: 'root',
  version: 1,
  storage
}
const persistedReducer = persistReducer(persistConfig, cityHistorySliceReducer)
export const store = configureStore({
  reducer: {
    history: persistedReducer,
    weatherData: weatherDataSliceReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export let persistor = persistStore(store)

