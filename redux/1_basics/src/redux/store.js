/*
 ! store oluşturma:
 * 1. redux kütüphanesinden "createStore" methodu import edilir
 * 2. store içerisnde tutulan veierle kategorize edilir ve
 * her bir kategori için reducer oluşturulur.
 * 3. oluşturulan reducerlar "combineReducers methodu ile birleştirilir"
 * 4. store'a oluşturlan birleşmiş reducerlar tanıtılır
 * 5. oluşturlan store projeye tanıtılır.
 */

import { createStore, combineReducers } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

// birden fazzla reducer varsa birleştirme
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store'u oluşturma ve reducerları tanıtma
const store = createStore(rootReducer);

export default store;
