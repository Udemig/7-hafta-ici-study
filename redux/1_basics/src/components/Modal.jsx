import { useDispatch } from 'react-redux';
import { editTodo } from '../redux/actions/todoActions';

const Modal = ({ todo, close }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // objenin yeni halini belirle
    // objenin bütün değerli olucak
    // text yerine inputtaki yazı gelicek
    const updated = { ...todo, text: e.target[1].value };

    // store'u güncelle
    dispatch(editTodo(updated));

    // modal'ı kapat
    close();
  };

  return (
    <div className="modal d-block text-black bg-black bg-opacity-50">
      <div className="modal-dialog  modal-dialog-centered ">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Todo'yu Düzenle
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <label>Yeni İsmi Belirle:</label>
            <input
              defaultValue={todo.text}
              className="form-control"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={close}
            >
              Kapat
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
