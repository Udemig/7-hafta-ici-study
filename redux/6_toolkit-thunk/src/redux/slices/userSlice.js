import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setUser: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },
    setError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { setLoading, setUser, setError } = userSlice.actions;
