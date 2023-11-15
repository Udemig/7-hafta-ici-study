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

const initialState = {
  todos: [],
  length: 0,
  isEmpty: true,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return state;

    case "REMOVE_TODO":
      return state;

    default:
      return state;
  }
};

export default todoReducer;
