import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { updatedUserSlice } from './slices/updatedUserSlice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    updatedUser: updatedUserSlice.reducer,
  },
});
