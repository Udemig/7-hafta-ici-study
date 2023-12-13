import Loading from '../components/Loading';
import Card from '../components/Card';
import { useContext } from 'react';
import { ProductContext } from '../context/productContext';

const MainPage = () => {
  // contexct yapsına abone olma
  // context yapsında value olarak belirlenen verilere erişim sağlarız
  const { products } = useContext(ProductContext);

  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4">
      {/*Veriler gelmediyse yükleniyor göster  */}
      {!products && <Loading />}

      {/* veriler geldiyse her biri için kart bas */}
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MainPage;
