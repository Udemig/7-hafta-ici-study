// App.test.js: APP bileşeni testlerinin yazıdlığı dosya
//* Unit Test
//* Bileşen görevini doğru şekilde yerine
//* getiriyor mu? kontrolüne yapan testler yazarız
//* Bu sayede proje içerisnde bir güncelleme yaptığımız zaman
//* yaptığımzı değişikleri githuba göndermeden önce her şeyin
//* doğru çalıştığından emin olmalıyız. uni test de bunu sağlıyor

import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Button from './components/Button';

// test fonksiyonları iki paramtre alır
// 1) testin açıklamsı
// 2) test fonksiyonu
test('React Öğren baslığı ekrana basılır', () => {
  // testin yapılacğaı bileşeni "sanal ortamda" ekran bas
  render(<App />);

  // test edilecek element çağırılır
  const linkEle = screen.getByText('React Ogren');

  // çağrılan elemanı test etme
  expect(linkEle).toBeInTheDocument();
});

//* 1) buton ilk başta kırmızı renktedir ve içinde "Maviye Çevir" yazar
//* 2) butona tıklanır
//* 3) butonun rengi mavi olur ve içinde "Kırmızaya Çevir" yazar
//* 4) butona tıklanır
//* 5) buton kırmızı olur ve içinde "Maviye Çevir" yazar

test('buton doğru renk ve yazıya sahiptir', () => {
  // test edilecek bileşeni sanal ekrana çağırma
  render(<Button />);

  // butonu seçme
  const colorBtn = screen.getByRole('button', {
    name: 'Maviye Çevir',
  });

  // butonun rengi kırmızı mı?
  expect(colorBtn).toHaveStyle({
    background: 'red',
  });

  // butonun üzerine tıklanır
  fireEvent.click(colorBtn);

  // butonun rengi mavi mi?
  expect(colorBtn).toHaveStyle({ background: 'aqua' });

  // butonun içerisnde kırmızıya çevir yazıyor mu?
  expect(colorBtn).toHaveTextContent('Kırmızıya Çevir');

  // butona tıklanır
  fireEvent.click(colorBtn);

  // butonun rengi kırmızı mı?
  expect(colorBtn).toHaveStyle({ background: 'red' });

  // yazısı doğru mu?
  expect(colorBtn).toHaveTextContent('Maviye Çevir');
});
