// App.test.js: APP bileşeni testlerinin yazıdlığı dosya
//* Unit Test
//* Bileşen görevini doğru şekilde yerine
//* getiriyor mu? kontrolüne yapan testler yazarız
//* Bu sayede proje içerisnde bir güncelleme yaptığımız zaman
//* yaptığımzı değişikleri githuba göndermeden önce her şeyin
//* doğru çalıştığından emin olmalıyız. uni test de bunu sağlıyor

import { render, screen } from '@testing-library/react';
import App from './App';

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
