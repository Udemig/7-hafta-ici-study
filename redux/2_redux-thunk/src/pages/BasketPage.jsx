import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './../components/Loading';
import {
  getBasketData,
  setBasketLoading,
} from '../redux/actions/basketActions';
import BasketItem from '../components/BasketItem';

const BasketPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.basketReducer);

  useEffect(() => {
    dispatch(setBasketLoading());
    // sepetteki ürünleri api'den alıp
    // store'a aktarıcak asenkronk aksiyon
    dispatch(getBasketData());
  }, []);

  return (
    <div className="container">
      {/* ürünler yüklenirken */}
      {state.isLoading && <Loading />}

      {/* hata olursa */}
      {state.isError && (
        <p>Üzgünüz sepet verielrlni alırken birr hata oluştu</p>
      )}

      {/* veriler gelrise */}
      {state.basket.map((item) => (
        <BasketItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default BasketPage;
