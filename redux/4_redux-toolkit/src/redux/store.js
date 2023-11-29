import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

// configureStore'un createStore'dan farkları
// 1- varsauılan olarak thunk ile birlikte gelir
// 2- veilen reducer'ları otomatik birleştirir
export default configureStore({
  reducer: {
    counterReducer,
  },
});
