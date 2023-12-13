// action'ların typelarını tanımlarken ve reducer'larda
// bu type'ları kullanırken dalgınlıktan kaynaklı oluşabilecek
// hataları önelemk için projede aksiyon tiplerini ayrı bir
// dosyada tanımlarız

export const ActionTypes = {
  ADD_TODO: 'ADD_TODO',
  TODO_DELETE: 'TODO_DELETE',
  EDIT_TODO: 'EDIT_TODO',
  SET_TODOS: 'SET_TODOS',
};
