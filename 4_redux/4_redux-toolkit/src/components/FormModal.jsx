import { Button, Form, Modal } from 'react-bootstrap';
import { addTask, editTask } from '../redux/slices/crudSlice';
import { useDispatch } from 'react-redux';

// Bu formu hem düzenleme için
// hem de ekleme işlemi için kulalnıcaz
// bu noktada ne zman düzenelem modunda ne
// zman ekleme modunda olucak karar vermemiz lazım
// bu kararı gelen editItem parametreine göre vericez
// eğerki ediit item null geldiyse ekleme modundayız
// null gelmediyse o zman dünzeleme modundayız
const FormModal = ({ isOpen, close, editItem }) => {
  const dispatch = useDispatch();

  // form gönderidliğinde
  const handleSubmit = (e) => {
    e.preventDefault();
    // formdaki inputların verisine erişme
    const form = new FormData(e.target);
    const newTask = Object.fromEntries(form.entries());

    if (editItem) {
      // düzenle
      dispatch(editTask({ ...newTask, id: editItem.id }));
    } else {
      // store'a yeni eleeman eklemeye yararyan aksiyonu dispatch ettik
      dispatch(addTask(newTask));
    }

    // modalı kapat
    close();
  };

  return (
    <Modal
      show={isOpen}
      onHide={close}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="text-black" closeButton>
        <Modal.Title id="contained-modal-title-vcenter ">
          {editItem ? 'Görevi Düzenle' : 'Yeni Görev Oluştur'}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="text-black">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Görev Başlığı</Form.Label>
            <Form.Control
              defaultValue={editItem?.title}
              required
              type="text"
              name="title"
              placeholder="Görev giriniz"
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Yazar</Form.Label>
            <Form.Control
              defaultValue={editItem?.author}
              required
              type="text"
              name="author"
              placeholder="İsminizi giriniz"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Atanan Kişi</Form.Label>
            <Form.Control
              defaultValue={editItem?.assigned_to}
              required
              type="text"
              name="assigned_to"
              placeholder="Atanan kişiyi giriniz"
            />
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Label>Son Teslim Tarihi</Form.Label>
            <Form.Control
              defaultValue={editItem?.end_date}
              required
              type="date"
              name="end_date"
            />
          </Form.Group>

          <Modal.Footer className="mt-3">
            <Button onClick={close}>Close</Button>
            <Button type="submit" variant="success">
              Kaydet
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
