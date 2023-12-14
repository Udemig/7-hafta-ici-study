import {
  addDoc,
  collection,
  serverTimestamp,
} from 'firebase/firestore';
import { BsCardImage } from 'react-icons/bs';
import { db, storage } from '../firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid';
import { useState } from 'react';
import Spinner from './Spinner';
import { toast } from 'react-toastify';

const Form = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);

  // kolleksiyonun referansını alma
  const tweetsCol = collection(db, 'tweets');

  //* aldığı medyayı storage'a kaydeder ve url'ini döndürür
  const uploadImage = async (file) => {
    // dosya resim değilse fonksiyonu durdur
    if (!file || !file.type.startsWith('image')) return null;

    // dosyayı yükleyeceğimiz yerin referasnı alma (yer ayırtma)
    const fileRef = ref(storage, file.name.concat(v4()));

    // ayırtığımız yere dosyayı yükleme
    await uploadBytes(fileRef, file);

    // yükledğimiz dosyanın url'ine erişme
    return await getDownloadURL(fileRef);
  };

  // tweet gönder
  const handleSubmit = async (e) => {
    e.preventDefault();
    // formdaki verilere erişme
    const textContent = e.target[0].value;
    const imageContent = e.target[1].files[0];

    //  doğrulama
    if (!textContent && !imageContent)
      return toast.info('Lütfen içerik ekleyiniz');

    // yükleniyor mu değeri true'ya çekilir
    setIsLoading(true);

    // fotoğrafı storage'a kaydet ve url'ni al
    const url = await uploadImage(imageContent);

    // tweets kolleksiyonun yeni döküman ekle
    await addDoc(tweetsCol, {
      textContent,
      imageContent: url,
      createdAt: serverTimestamp(),
      user: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      likes: [],
      isEdited: false,
    });

    // yükleniyor mu false'a çekilir
    setIsLoading(false);

    // inputları sıfırla
    e.target.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-3 p-4 border-b-[1px] border-gray-700"
    >
      <img
        className="rounded-full h-[35px] md:h-[45px] mt-1"
        src={user?.photoURL}
      />

      <div className="w-full ">
        <input
          className="w-full bg-transparent my-2 outline-none md:text-lg"
          placeholder="Neler Oluyor?"
          type="text"
        />

        <div className="flex justify-between items-center">
          <input className="hidden" id="image" type="file" />

          <label
            className="hover:bg-gray-800 text-lg transition p-4 cursor-pointer rounded-full"
            htmlFor="image"
          >
            <BsCardImage />
          </label>

          <button className="bg-blue-600 flex items-center justify-center px-4 py-2 min-w-[85px] min-h-[40px] rounded-full transition hover:bg-blue-800">
            {isLoading ? <Spinner /> : 'Tweetle'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
