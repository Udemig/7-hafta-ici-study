import { fireEvent, render, screen } from '@testing-library/react';
import Form from '.';
import userEvent from '@testing-library/user-event';

test('Koşulların onaylanmasına göre buton aktifliği', async () => {
  // test bileşennin ekrana bas
  render(<Form />);

  // kurulumunu yap
  const user = userEvent.setup();

  // gerekli elemanları al
  const orderBtn = screen.getByRole('button');
  const checkBox = screen.getByRole('checkbox');

  // 1) checkbox başlanıçta tiksizdir
  expect(checkBox).not.toBeChecked();

  // 2) buton başlangıçta inaktiftir
  expect(orderBtn).toBeDisabled();

  // 3) checkbox tiklenir
  await user.click(checkBox);

  // 4) buton aktif olur
  expect(orderBtn).toBeEnabled();

  // 5) checkbox'tan tik kaldırılır
  await user.click(checkBox);

  // 6) buton inaktif olur
  expect(orderBtn).toBeDisabled();
});

test('onay butonu hover olunca bildirim ekrana gelir', async () => {
  render(<Form />);

  const user = userEvent.setup();

  // gerekli elemanlar
  const checkbox = screen.getByRole('checkbox');
  const button = screen.getByRole('button');
  // const popup = screen.getByText('Size gerçekten', { exact: false });
  const popup = screen.getByText(/size gerçekten/i);

  // checkboxi tikle
  await user.click(checkbox);

  // mouse'u butonun üzerine getir
  fireEvent.mouseEnter(button);

  // bildirim gözüküyor mu ? (toBeVisible: opacity > 0 ; visibliy:visible; display != none)
  expect(popup).toBeVisible();

  // mouse'u butondan çek
  fireEvent.mouseLeave(button);

  // popup gözükmez
  expect(popup).not.toBeVisible();
});
