"use client";
import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slices/useSlices";

export const store = configureStore({
  reducer: { allUserInfo: UserReducer },
} );
// export default RootState =store.getState
