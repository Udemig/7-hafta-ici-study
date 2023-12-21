import MainPageView from '../views/MainPageView';
import Model from '../models/MainPageModel';
import { useEffect, useState } from 'react';

const MainPageController = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);

  // sayfa sayısı her arttığında bir sonraki sayfanın verilerini
  // alıcaz ve coins state'ini ekliyecez
  useEffect(() => {
    Model.getCoins(page)
      // aldığımız verileri önceki sayfanın verilerinin üzerine ekleme
      .then((data) => setCoins(coins.concat(data)));
  }, [page]);

  return <MainPageView setPage={setPage} coins={coins} />;
};

export default MainPageController;
