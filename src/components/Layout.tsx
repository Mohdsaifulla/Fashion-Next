"use client";
import { SessionProvider } from "next-auth/react";
import { store } from "@/reduxToolkit/store";
import { Provider } from "react-redux";
interface props {
  children: React.ReactNode;
}
const Layout = ({ children }: props) => {
  return(
  <Provider store={store}>
    <SessionProvider>{children}</SessionProvider>
  </Provider>
  )
};

export default Layout;
