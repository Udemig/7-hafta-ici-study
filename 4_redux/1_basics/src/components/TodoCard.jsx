import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from './Modal';
import { deleteTodo, editTodo } from '../redux/actions/todoActions';
import axios from 'axios';

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  // store'dan todo'yu kaldır
  const handleDelete = () => {
    axios
      .delete(`/todos/${todo.id}`)
      // reducer'a haber ver
      .then(() => {
        dispatch(deleteTodo(todo.id));
      });
  };

  const handleUpdate = () => {
    // todo'nun güncel halini belirleme
    const updated = { ...todo, is_done: !todo.is_done };

    // store'daki todo dizisini güncelle
    dispatch(editTodo(updated));
  };

  return (
    <>
      <div className="border shadow shadow-lg p-4 my-5">
        <h5>{todo.text}</h5>

        <h6>{todo.is_done ? 'Tamamlandı' : 'Devam Ediyor'}</h6>

        <p>{new Date(todo.created_at).toLocaleDateString()}</p>

        <button
          onClick={() => setIsOpen(true)}
          className="btn btn-primary"
        >
          Düzenle
        </button>

        <button
          onClick={handleUpdate}
          className="btn btn-success mx-4"
        >
          {todo.is_done ? 'Geri Al' : 'Tamamla'}
        </button>
        <button onClick={handleDelete} className="btn btn-danger">
          Sil
        </button>
      </div>

      {/* modal */}
      {isOpen && (
        <Modal
          close={() => {
            setIsOpen(false);
          }}
          todo={todo}
        />
      )}
    </>
  );
};

export default TodoCard;
