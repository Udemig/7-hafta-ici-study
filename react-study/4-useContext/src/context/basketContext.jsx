import { createContext, useState } from 'react';

export const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  // ürünü parametre olarak alır ve sepet state'ine ekler
  const addToBasket = (product) => {
    // sepette bu üründen daha önce eklenmiş kontrol etme
    const found = basket.find((i) => i.id === product.id);

    if (found) {
      // sepette bulundya >  miktarını + 1
      const updated = { ...found, amount: found.amount + 1 };

      // sepet dizisinden eski elemanı update'ı ekle
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      // state'i güncelle
      setBasket(newBasket);
    } else {
      //  sepette yoksa >  sepet ekle miktarını 1 e eşitle
      setBasket([...basket, { ...product, amount: 1 }]);
    }
  };

  const removeFromBasket = (delete_id) => {
    // sepette ürünü bul
    const found = basket.find((i) => i.id == delete_id);

    if (found.amount > 1) {
      // miktarı 1 azalt
      const updated = { ...found, amount: found.amount - 1 };

      // sepet dizisinden eski elemanı update'ı ekle
      const newBasket = basket.map((item) =>
        item.id === updated.id ? updated : item
      );

      setBasket(newBasket);
    } else {
      // sepetten kaldır
      const filtred = basket.filter((i) => i.id !== delete_id);
      setBasket(filtred);
    }
  };

  return (
    <BasketContext.Provider
      value={{ basket, addToBasket, removeFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}
