import { createSlice } from '@reduxjs/toolkit';
import { getUser } from '../actions/userAction';

// asenkron aksiyonun tetiklediği
// pending fulfilled rejected durumlarında
// store'un nasıl güncelleniceğini belirle

const initialState = {
  users: [],
  isLoading: false,
  isError: false,
};

export const updatedUserSlice = createSlice({
  name: 'users',
  initialState,
  // asenkron aksiyonun aşamlarını izlemek için reucer yerine extra kullanıyoruz
  extraReducers: (builder) => {
    // getUser.pending > api'den henüz cevap gelemdiğinde
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });

    // getUser.fufilled > api'dan olumlu cevap geldiğinde
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    });

    // getUser.rejected > api'dan olumsuz cevap geldiğinde
    builder.addCase(getUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
