/*
 !reducer:
 * store'un nasıl değiceğine karar verir
 * reducer normal bir fonksiyondur
 * Ve iki parametre alır:
 *  > state: store'da tutulan verinin son durumu
 *  > action: store'ın nasıl güncelleniceğini söyleyen obje
 * 
 * reducar'da return edilen veri store'un güncel hali olur

*/

import { ActionTypes } from '../actionTypes/todoTypes';

const initialState = {
  todos: [],
  category: [],
  isEmpty: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    // 2.aşama: add todo aksiyonu çalışında store'da nasıl bir değişim
    // olucağına karar vericez
    case ActionTypes.ADD_TODO:
      const tempTodos = state.todos.concat(action.payload);
      // store'un güncel halini return et
      // store'un yeni değerini belirlerken
      // objedeki bir değeri güncellerken diğerlerine silmediğimize
      // eminm olmamız gerekir: todosu güncellerken category'leri silmiyeceğiz
      return { ...state, todos: tempTodos };

    case ActionTypes.TODO_DELETE:
      // payload'la gelen id'li todoyu diziden çıkarma
      const filtredTodos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );

      // state'in yeni halini belirle
      return { ...state, todos: filtredTodos };

    case ActionTypes.EDIT_TODO:
      // aksiyonun payload'i ile gelenelemanın
      // state'daki halini bul.
      // oluuşturucağıömız yeni dizide state eski verisyonu çıkart
      // yeni payload ile  gelen yeni versiyonu ekle
      const updatedTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );

      return { ...state, todos: updatedTodos };

    case ActionTypes.SET_TODOS:
      return { ...state, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
