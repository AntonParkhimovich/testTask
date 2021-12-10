import { configureStore} from '@reduxjs/toolkit'
import { cityHistorySliceReducer } from './weatherSlice'

export const store = configureStore({
  reducer: {history: cityHistorySliceReducer,
   
  },
})