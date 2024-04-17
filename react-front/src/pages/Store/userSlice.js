import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: {
    username: "",
    email: "",
    loading: false,
    error: null,
  },
  name: "users",
  reducers: {
    
    setUser: (state, action) => {
      const { username } = action.payload;
      state.username = username;
      state.loading = false;
      state.error = null;
    },
  
    setLoading: (state) => {
      state.loading = true;
      state.error = null;
    },

    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setUser, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;