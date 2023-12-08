import { useEffect, useState } from 'react';
import Header from './components/Header';
import ListView from './pages/ListView';
import MapView from './pages/MapView';
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions/flightActions';
import DetailModal from './components/DetailModal';

const App = () => {
  const [isMapView, setIsMapView] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);

  // modal'ı açar
  const openModal = (id) => {
    setDetailId(id);
    setIsModalOpen(true);
  };

  // modal'ı kapatır
  const closeModal = () => {
    setIsModalOpen(false);
    setDetailId(null);
  };

  return (
    <>
      <Header />

      <div className="view-buttons">
        <button
          className={isMapView ? 'active' : ''}
          onClick={() => setIsMapView(true)}
        >
          Harita Görünümü
        </button>
        <button
          className={isMapView ? '' : 'active'}
          onClick={() => setIsMapView(false)}
        >
          Liste Görünümü
        </button>
      </div>

      {isMapView ? <MapView openModal={openModal} /> : <ListView />}

      {/* her iki sayfadada kullanbilmek için modalı app jsde tuttuk */}
      {isModalOpen && (
        <DetailModal close={closeModal} detailId={detailId} />
      )}
    </>
  );
};

export default App;
