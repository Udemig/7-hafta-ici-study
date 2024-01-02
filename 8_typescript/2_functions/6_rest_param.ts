/*
 * Rest Param
 * Paramaetre listesinin belirsiz veya sınırsız oldpu durumlarda
 * rest parametre kullanılır
 
 * Özellikler
 * Bir parametreyi rest param haline getrimek için spread 
 * operator (...) kullanılır.
 
 * Bir rest parametresinden sonra başka bir parametre yazılamaz.
 * Çünkü gönderilen bütün parametreler rest param'In bir paraçası gibi algılanır
 
 * Gönderilen bütün parametreler rest ile bir dizi haline getirilir 
 */

function toplam(metin: string, ...sayilar: number[]): string {
  return metin + sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(toplam('Sonuç:', 1, 43, 577, 56, 34, 76, 778));

//! Soru
// Aldığı ilk 2 paramreyi toplayan
// İlk iki parametrenin devamında gelen bütün parametreleri çarpan
// bir fonksiyon yazınız
// fonksiyon sonuç olarak çarpım ve toplamın sonucunu bir obje olarak döndürsün
// tip: çarpılacakları rest param olarak tanımlayın
// tip: {carpim:1578,toplam:146}

// cevap - 1
function toplaCarp(...params: number[]): {
  toplam: number;
  carpim: number;
} {
  const [param1, param2, ...restParams] = params;

  const toplam = param1 + param2;
  const carpim = restParams.reduce((a, b) => a * b, 1);

  return { toplam, carpim };
}

const sonuc = toplaCarp(2, 3, 4, 5);
console.log('deneme', sonuc);

// cevap - 2
const hesapla2 = (
  sayi1: number,
  sayi2: number,
  ...numbers: number[]
): object => {
  return {
    toplam: sayi1 + sayi2,
    carpim: numbers.reduce((a, b) => a * b, 1),
  };
};

const sonuc3 = hesapla2(5, 10, 25, 35, 45, 2, 4, 5, 6);

console.log(sonuc3);
