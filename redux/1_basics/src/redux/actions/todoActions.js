import { ActionTypes } from '../actionTypes/todoTypes';

// aksiyon oluşturan bir fonksiyon oluşturma
// bileşen içeirisnde aksiyonları dispatch ederken
// kod tekrarna düşmemek için aksiyonları
// ayrıda bir dosayda tanımlarız
// eğerki aksiyyonalrın patyload değeri olcuaksa
// payload dinamik olucağı için aksiyon oluşturan
// bir fonksiyon yazmayı tercih ederiz
// payload'ı parametre oalrak alırız
export const addTodo = (payload) => ({
  type: ActionTypes.ADD_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: ActionTypes.EDIT_TODO,
  payload,
});

export const setTodos = (payload) => ({
  type: ActionTypes.SET_TODOS,
  payload,
});

export const deleteTodo = (payload) => {
  return {
    type: ActionTypes.TODO_DELETE,
    payload,
  };
};
