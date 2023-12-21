import AddPageView from './AddPageView';
import Model from './AddPageModel';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddPageController = () => {
  const navigate = useNavigate();

  // form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault();
    // 1) inputlardaki verileri alıp bir post objesi oluştur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    // 2) post verisne id ekle
    newPost.id = v4();

    // 3) api'a veriyi kaydet
    Model.createPost(newPost)
      // 4) anasayfaya yönlendir
      .then(() => {
        toast.success('Postunuz başarıyla gönderildi');
        navigate('/');
      })
      // hata bildirim
      .catch(() => {
        toast.error('Postı gönderirken bir hata oluştu');
      });
  };

  return <AddPageView handleSubmit={handleSubmit} />;
};

export default AddPageController;
