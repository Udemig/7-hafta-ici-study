const RoomPage = ({ setIsAuth, setRoom }) => {
  // oturumu kapat
  const logout = () => {
    // state'i günceller
    setIsAuth(false);
    // lokal'den kaldır
    localStorage.removeItem('TOKEN');
  };

  // odaya gir
  const handleSubmit = (e) => {
    e.preventDefault();
    // oda ismini inputtan al
    const roomName = e.target[0].value;

    // state'i güncelleme
    setRoom(roomName);
  };

  return (
    <form onSubmit={handleSubmit} className="room-page">
      <h1>Chat Odası</h1>
      <p>Hangi Odaya Giriceksiniz</p>
      <input type="text" />
      <button type="submit">Odaya Gir</button>
      <button type="button" onClick={logout}>
        Çıkış Yap
      </button>
    </form>
  );
};

export default RoomPage;
