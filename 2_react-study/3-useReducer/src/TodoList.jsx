import { useReducer } from 'react';
import { initialState, todoReducer } from './reducers/todoReducer';

const TodoList = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      title: e.target[0].value,
    };

    // reducer'a ekleme veriyoruz
    // eklenicek elemanı da gönderiyoruz
    dispatch({ type: 'YENİ_EKLE', payload: newTodo });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <button type="submit">Gönder</button>
        <button
          type="button"
          onClick={() => dispatch({ type: 'TEMİZLE' })}
        >
          Temizle
        </button>
      </form>

      <ul className="d-flex flex-column gap-4 my-4 ">
        {state.todos.map((todo) => (
          <li className="d-flex justify-content-between">
            <span>{todo.title}</span>
            <button
              onClick={() =>
                dispatch({ type: 'KALDIR', payload: todo.id })
              }
              className="btn btn-sm btn-danger"
            >
              del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
