import { useContext } from 'react';
import { BasketContext } from '../context/basketContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { basket, addToBasket, removeFromBasket } =
    useContext(BasketContext);

  // sepetteki toplam fiyat
  const totalPrice = basket.reduce(
    (total, i) => total + i.amount * i.price,
    0
  );

  // sepetteki toplam ürün sayısı
  const totalAmount = basket.reduce(
    (total, i) => total + i.amount,
    0
  );

  return (
    <div className="container" style={{ maxWidth: '95vw' }}>
      <div className="d-flex flex-column gap-5">
        {/* sepette ürün yoksa */}
        {basket.length === 0 && (
          <p className="text-center my-5 ">
            <span className="mx-3">
              Öncelikle sepete bir ürün ekleyiniz
            </span>
            <Link to="/">Ürünler</Link>
          </p>
        )}

        {/* sepette ürün vars */}
        {basket.map((product) => (
          <div className="d-flex justify-content-between gap-3 align-items-center">
            <div
              className="bg-white rounded"
              style={{ width: '100px', height: '100px' }}
            >
              <img
                style={{ width: '100px', height: '100px' }}
                className="rounded object-fit-contain shadow"
                src={product.image}
              />
            </div>

            <h4 className="text-truncate">{product.title}</h4>
            <h3 className="text-success">${product.price}</h3>
            <p className="text-sm text-nowrap">
              Miktar: {product.amount}
            </p>
            <div className="d-flex gap-3">
              <button
                onClick={() => removeFromBasket(product.id)}
                className="btn btn-danger"
              >
                -
              </button>
              <button
                onClick={() => addToBasket(product)}
                className="btn btn-success"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="border p-5 rounded my-5 fs-4">
        <p>
          Sepetteki Ürün:{' '}
          <span className="text-warning">{totalAmount}</span>
        </p>
        <p>
          Tolam Fiyat:{' '}
          <span className="text-success">
            ${totalPrice.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Checkout;
