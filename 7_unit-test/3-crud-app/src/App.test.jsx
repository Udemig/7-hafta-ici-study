import { describe, expect } from 'vitest';

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
