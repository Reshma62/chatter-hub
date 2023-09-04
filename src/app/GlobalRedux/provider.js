"use client";
import { store } from "./store";
import { Provider } from "react-redux";
function MyProviders({ children }) {
  return <Provider store={store}>{children}</Provider>;
}

export default MyProviders;
