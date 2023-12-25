"use client";
import { SessionProvider } from "next-auth/react";
import { store } from "@/reduxToolkit/store";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from "@/reduxToolkit/store";

interface props {
  children: React.ReactNode;
}
const Layout = ({ children }: props) => {
  return(
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <SessionProvider>{children}</SessionProvider>
    </PersistGate>
  </Provider>
  )
};

export default Layout;
