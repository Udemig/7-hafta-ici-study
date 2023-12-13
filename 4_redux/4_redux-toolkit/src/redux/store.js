import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import crudReducer from './slices/crudSlice';

// configureStore'un createStore'dan farkları
// 1- varsauılan olarak thunk ile birlikte gelir
// 2- verilen reducer'ları otomatik birleştirir
export default configureStore({
  reducer: {
    counterReducer,
    crudReducer,
  },
});
