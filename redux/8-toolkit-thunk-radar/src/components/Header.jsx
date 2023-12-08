import { useSelector } from 'react-redux';

const Header = () => {
  const state = useSelector((store) => store.flight);

  return (
    <header>
      <div>
        <img src="/plane-l.png" />
        <h3>Uçuş Radarı</h3>
      </div>

      <p>
        {state.isLoading
          ? 'Uçuşlar Hesaplanıyor...'
          : state.isError
          ? 'Bir sorun oluştu'
          : state.flights.length + ' Uçuş Bulundu'}
      </p>
    </header>
  );
};

export default Header;
