import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   user: undefined,
// };

const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      console.log("action payload:", action.payload);
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
  },
});

// const getUser = (state) => state.user;

export const { actions, reducer } = slice;
