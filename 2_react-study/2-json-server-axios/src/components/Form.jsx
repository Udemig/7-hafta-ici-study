import axios from 'axios';
import { v4 } from 'uuid';

const Form = ({
  setTodos,
  todos,
  totalCount,
  maxPage,
  setPage,
  params,
}) => {
  //
  const handleSubmit = (e) => {
    e.preventDefault();
    // formdan verileri alma
    const title = e.target[0].value;
    const status = e.target[1].value;

    // verileri kontrol etme
    if (!title) {
      return alert('Lütfen başlık yazınız');
    }

    // veritabanına kaydedilecek veriyi hazırla
    const newTodo = {
      title,
      status,
      id: v4(),
      isDone: false,
      date: new Date().toLocaleDateString(),
    };

    // oluşturduğumuz todo'yu api'a ekleme
    axios
      .post('http://localhost:3000/todos', newTodo)
      // api güncellenirse state'i / arayüzü güncelleme
      .then(() => {
        // önündeki sayfa doluysa son sayfaya yönlendir
        if (todos.length === params._limit) {
          // eğerki son sayfa doluysa bir fazlasına değilse son sayfaya yönlendir
          setPage(
            totalCount % params._limit === 0 ? maxPage + 1 : maxPage
          );
          return;
        }
        setTodos((todos) => [...todos, newTodo]);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex justify-content-center gap-3 my-5"
    >
      <input
        className="form-control shadow"
        placeholder="ör:js projesi yap..."
        type="text"
      />

      <select defaultValue={'daily'} className="form-select w-50">
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>

      <button type="submit" className="btn btn-primary shadow">
        Gönder
      </button>
    </form>
  );
};

export default Form;
