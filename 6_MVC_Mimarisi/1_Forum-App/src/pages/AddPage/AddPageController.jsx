import AddPageView from './AddPageView';
import Model from './AddPageModel';
import { v4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

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
      .then(() => navigate('/'));
  };

  return <AddPageView handleSubmit={handleSubmit} />;
};

export default AddPageController;
