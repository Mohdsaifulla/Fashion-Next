import { configureStore } from "@reduxjs/toolkit";
import prouductReducer from "@/reduxToolkit/storeSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import createWebStorage from "redux-persist/es/storage/createWebStorage";
import { WebStorage } from "redux-persist/es/types";

export function createPersistWebStorage() {
  const isServer=typeof window ==='undefined'
  if(isServer){
    return{
      getItem(){
        return Promise.resolve(null)
      },
      setItem(){
        return Promise.resolve()
      },
      removeItem(){
        return Promise.resolve()
      }
    }
  }
  return createWebStorage('local')
}

const storage=typeof window!=='undefined'?createWebStorage('local'):createPersistWebStorage()
 
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, prouductReducer);
export const store = configureStore({
  reducer: { fashion: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
