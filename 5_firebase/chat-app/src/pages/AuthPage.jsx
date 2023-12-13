import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './../firebase/config';

const AuthPage = ({ setIsAuth }) => {
  // giriş yap butonun tıklanınca
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // oturumunu açık olduğunu uygulamada yönetmek için local'e tokenini, kaydet
        localStorage.setItem('TOKEN', res.user.refreshToken);

        // kulanıcının yetkisini true'ya çek
        setIsAuth(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="auth">
        <h1>Chat Odası</h1>
        <p>Devam etmek için giriş yapın</p>
        <button onClick={handleClick}>
          <img src="/g-logo.png" />
          <span>Google İle Gir</span>
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
