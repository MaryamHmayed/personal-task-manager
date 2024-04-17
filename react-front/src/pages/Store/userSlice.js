import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    username: "",
    email: "",
  },
  name: "users",
  reducers: {
    loadUser: (state, action) => {
      const { payload } = action;
      return {
        ...state,
        email: payload.email,
        username: payload.username,
      };
    },
  },
});

export default userSlice.reducer;

export const { loadUser } = userSlice.actions;