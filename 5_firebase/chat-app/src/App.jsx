import { useState } from 'react';
import AuthPage from './pages/AuthPage';
import RoomPage from './pages/RoomPage';
import ChatPage from './pages/ChatPage';

const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('TOKEN'));
  const [room, setRoom] = useState(null);

  // yetkisi yoksa >  giriş sayfası
  if (!isAuth) {
    return <AuthPage setIsAuth={setIsAuth} />;
  }

  // yetkisi varsa:
  return (
    <div className="container">
      {room ? (
        // oda seçiliyse > sohbet sayfası
        <ChatPage room={room} setRoom={setRoom} />
      ) : (
        // oda seçili değilse > oda seçme sayfası
        <RoomPage setIsAuth={setIsAuth} setRoom={setRoom} />
      )}
    </div>
  );
};

export default App;
