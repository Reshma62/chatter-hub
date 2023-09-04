import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  userInfo: null,
};

if (typeof window !== "undefined") {
  const userInfoFromLocalStorage = localStorage.getItem("users");
  initialState.userInfo = userInfoFromLocalStorage
    ? JSON.parse(userInfoFromLocalStorage)
    : null;
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    usersInformation: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { usersInformation } = userSlice.actions;

export default userSlice.reducer;
