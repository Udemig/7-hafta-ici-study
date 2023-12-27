import { render, screen } from '@testing-library/react';
import Form from '.';
import user from '@testing-library/user-event';
import { expect } from 'vitest';

it('formu gönderince "addUser" doğru parametrelerle çalışıyor mu?', async () => {
  // fonksiyonu mock'lama (taklit fonksonu oluşturma)
  // kaç kere çağrıldı | hangi parametrelerle çağrıldı
  // tarzında testleri yapmaımzı sağlayan orj. fonksiyonu taklit eden yapı
  const mock = vi.fn();

  render(<Form addUser={mock} />);

  user.setup();

  //1) gerekli elemanları çağır
  const nameInp = screen.getByLabelText('İsim');
  const mailInp = screen.getByLabelText('Email');
  const ageInp = screen.getByPlaceholderText('ör:24');
  const sendBtn = screen.getByRole('button');

  //2) inputları doldur

  // yol-1 > isim inputunu doldur
  await user.click(nameInp);
  await user.keyboard('fırat');

  // yol-2 > mail inputunu doldur
  await user.type(mailInp, 'firat@gmail.com');

  // yol-2 > yaş inputunu doldur
  await user.type(ageInp, '30');

  //3) gönder butonuna tıkla
  await user.click(sendBtn);

  //4) fonksiyon doğru parametrelerle çalışyıor mu?
  expect(mock).toHaveBeenCalledWith({
    name: 'fırat',
    email: 'firat@gmail.com',
    age: '30',
  });
});
