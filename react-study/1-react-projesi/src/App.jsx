import './App.css';
import Header from './components/Header';
import List from './components/List';
import Counter from './components/Counter';
import Akor from './components/Accordion';
import { Form as Formik } from './components/Form';

function App() {
  // bizim parametre göndeermediğimiz fonksiyon
  const saveUser = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
    alert('kullanıcı kaydediliyor...');
  };

  // parametre göndmericeğimiz fonksiyon
  const welcomeUser = (username) => {
    alert(`Selam, ${username}`);
  };

  return (
    <div className="App">
      {/* Bir bileşeni kullanma <Bileşenİsmi />  */}
      <Header />

      <Formik />

      <Akor
        title="Arabaların ebakımı yapılıyor mu?"
        content="eveti her zman düzenli oalrak........"
      />

      <Akor
        title="İçleri temiz oluyor mu?"
        content="Evet sürekli oalrak  gerekli temizleme işlemeleri yapılıyor.."
      />

      <Counter />

      <form onSubmit={saveUser}>
        <label htmlFor="user">Kullanıcı Adı</label>
        <input id="user" type="text" />

        <label>Şifre</label>
        <input type="password" />

        <div>
          <button>Gönder</button>

          <button
            onClick={() => {
              console.log('slemlar');
            }}
          >
            Selamla
          </button>
        </div>
      </form>

      <List />
    </div>
  );
}

export default App;
