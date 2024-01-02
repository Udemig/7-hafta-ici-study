/*
 * Default Param (Varsayılan Değere Sahip Parametre);

 * Bazı durumlarda opsiyonel parametrelrde değer göndermediğimiz
 * zaman udenfined olması yerini bizim belirlediğimiz varsayılan
 * bir değere sahip olmasını isteyebiliyoruz. Bu dururmda default
 * param kullanırız
  
 * Özellikler
 * Default param'a varsayılan değer tanımı yaparken = kullanıyoruz
 
 * Bu yöntemi eğer parametreyi göndermemdizğimiz zaman undefined olması
 * nı istemiyorsak kullanırız  

*/

function selamVer(isim: string = 'Dünya'): string {
  return `Merhaba, ${isim}`;
}

console.log(selamVer('Ahmet')); // Merhaba, Ahmet

console.log(selamVer()); // Merhaba, Dünya

//! Soru2
//* Varsayılan veya opsiyonel bir parametreye sahip fonksiyon yazın
//* Bu fonksiyonu hem paramerteye değer göndererek hem de göndermeden çalıştırıp
//* ürettü sonuçları konsola yazın

// cevap-1
function selam(veri: string = 'Merhaba') {
  console.log(veri);
}

selam('Selamlar!');

selam();

// cevap-2
function karsila(msg: string = 'hoşgeldin') {
  console.log(msg);
}

karsila('merhaba.');

karsila();

// cevap-3

function hesaplaKDV(price: number, kdv: number = 0.18): number {
  return price + price * kdv;
}

console.log(hesaplaKDV(100));
console.log(hesaplaKDV(100, 0.35));

// cevap 4
const hesapla = (
  productPrice: number,
  productName: string,
  kdv: number = 18
): string => {
  return `${productName} için hesaplanan kdvli tutar: (${
    productPrice * (kdv / 100)
  })`;
};

const sonuc1 = hesapla(150, 'PC');
const sonuc2 = hesapla(150, 'PC', 20);

console.log(sonuc1);
console.log(sonuc2);
