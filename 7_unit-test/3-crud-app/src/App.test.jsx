import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import user from '@testing-library/user-event';

it('Uygulam doğru şekilde çalışıyor mu?', async () => {
  render(<App />);
  user.setup();

  //  gerekli elemanları çağırma
  const nameInp = screen.getByLabelText('İsim');
  const mailInp = screen.getByLabelText('Email');
  const ageInp = screen.getByPlaceholderText('ör:24');
  const sendBtn = screen.getByRole('button', {
    name: 'Kullanıcı Ekle',
  });

  //1) inputları doldur
  await user.type(nameInp, 'Veli');
  await user.type(mailInp, 'veli@gmail.com');
  await user.type(ageInp, 24);

  //2) Kullanıcı ekle butonuna tıkla
  await user.click(sendBtn);

  //3) Inputlara girdiğimiz veriye uygun bir şekilde tablo hücreleri ekrana basılır
  screen.getByRole('cell', { name: 'Veli' });
  screen.getByRole('cell', { name: 'veli@gmail.com' });
  screen.getByRole('cell', { name: '24' });
});

const multiple = (a, b, c) => {
  return a * b * c;
};

//bir bileşnle veya özellikjle alaklaı birden fazla test olduğu zaman
// bu testleri kategorize etmek için decsribe kullanılırz
describe('Ekleme Fonksiyonu testleri', () => {
  it('pozitif sayılarda doğru sonuç veriyor mu?', () => {
    const sum = multiple(10, 2, 3);

    expect(sum).toBe(60);
  });

  it('negatif sayıalrda doğru sonuç veriyor mu?', () => {
    const sum = multiple(-10, -2, -3);

    expect(sum).toBe(-60);
  });

  it('0 olunca doğru sonuç veriyor mu?', () => {
    const sum = multiple(0, 2, 3);

    expect(sum).toBe(0);
  });
});
