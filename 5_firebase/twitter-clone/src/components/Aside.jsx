import {
  average,
  collection,
  count,
  getAggregateFromServer,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../firebase/config';
import { useEffect, useState } from 'react';

const Aside = () => {
  const tweetCol = collection(db, 'tweets');
  const [data, setData] = useState(null);

  // dökümanlarınrımız alakalı istatsitik hespalamaya yarar
  // 1) kollkesiyonun referansı ister
  // 2) sum / average / count yardımıyla rapor adımları belirleme
  useEffect(() => {
    getAggregateFromServer(tweetCol, {
      tweetsCount: count(),
    }).then((data) => setData(data._data));
  }, []);

  return (
    <div className="max-lg:hidden">
      <p className="my-5 text-align-center p-3 text-lg">
        Toplam Tweet Sayısı: {data?.tweetsCount?.integerValue}
      </p>
    </div>
  );
};

export default Aside;
