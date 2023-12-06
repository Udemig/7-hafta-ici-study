import { configureStore } from '@reduxjs/toolkit';
import { translateSlice } from './translateSlice';

export default configureStore({
  reducer: {
    translate: translateSlice.reducer,
  },
});
