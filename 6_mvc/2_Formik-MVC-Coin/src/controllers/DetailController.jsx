import DetailView from '../views/DetailView';
import Model from '../models/DetailModel';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const DetailController = () => {
  const [coin, setCoin] = useState(null);

  //1) url'den id yi al
  const { id } = useParams();

  //2) coin'in detay verilerini ve fiyat geçmişini al
  useEffect(() => {
    Model.getCoinDetails(id).then((data) => setCoin(data));
  }, []);

  // model'den bir örnek oluşturma
  // örnek oluştururken coin bilgilerini gönderdik
  // model ise gönderidğimiz bilgiler ile birlikte view bileşeninde
  // kullanıcağımız infoFields verisini oluşturdu
  const model = new Model(coin);

  return <DetailView model={model} />;
};

export default DetailController;
