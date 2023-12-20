import { configureStore } from '@reduxjs/toolkit'
import prouductReducer from "@/reduxToolkit/storeSlice"
export const store = configureStore({
    reducer: {
      fashion:prouductReducer,
    },
  })
 
  export type RootState = ReturnType<typeof store.getState>
  
  export type AppDispatch = typeof store.dispatch