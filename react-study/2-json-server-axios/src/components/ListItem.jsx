import axios from 'axios';
import { types } from '../constants';
import { formatDate } from './../helpers';
import { useState, useRef } from 'react';

const ListItem = ({ setTodos, todo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  // referansı tanımlanan elemanlara erişme
  const titleRef = useRef();
  const selectRef = useRef();

  //! silme işlemi
  const handleDelete = () => {
    // veritabanında sil
    axios
      .delete(`http://localhost:3000/todos/${todo.id}`)
      // istek başarılı olursa arayüzü güncelle
      .then(() =>
        setTodos((todos) => todos.filter((i) => i.id !== todo.id))
      );
  };

  //! güncelleme
  const handleEdit = () => {
    // input değerlerine erişme
    const newValues = {
      title: titleRef.current.value,
      status: selectRef.current.value,
    };

    //  api'yi güncelle
    axios
      .patch(`http://localhost:3000/todos/${todo.id}`, newValues)
      // state'i güncelle
      .then(() => {
        // todo objesini güncellemek
        const updated = { ...todo, ...newValues };
        // state'de tutğumuz dizideki eski obje yerine updated'ı ekle
        setTodos((todos) =>
          todos.map((i) => (i.id === updated.id ? updated : i))
        );
      });

    setIsEditMode(false);
  };

  return (
    <li className="relative px-3 py-3 list-group-item d-flex justify-content-between align-items-center">
      {/* durum alanı */}
      <div>
        {isEditMode ? (
          <select ref={selectRef} defaultValue={todo.status}>
            <option value="important">Önemli</option>
            <option value="daily">Günlük</option>
            <option value="job">İş</option>
          </select>
        ) : (
          <span className={`badge ${types[todo.status]?.color}`}>
            {types[todo.status]?.text}
          </span>
        )}
      </div>

      {/* yazı içeriği */}
      {isEditMode ? (
        <input ref={titleRef} defaultValue={todo.title} type="text" />
      ) : (
        <span>{todo.title}</span>
      )}

      {/* Butonlar alanı */}
      <div className="btn-group">
        {isEditMode ? (
          <>
            <button
              onClick={handleEdit}
              className="btn btn-sm btn-success"
            >
              Kayıt
            </button>
            <button
              onClick={() => setIsEditMode(false)}
              className="btn btn-sm btn-secondary"
            >
              İptal
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditMode(true)}
              className="btn btn-sm btn-primary"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="btn btn-sm btn-danger"
            >
              Del
            </button>
          </>
        )}
      </div>

      {/* tarih */}
      <span className="date">{formatDate(todo.date)}</span>
    </li>
  );
};

export default ListItem;
