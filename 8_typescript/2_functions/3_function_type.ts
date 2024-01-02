// Bir fonksiyon tipini tanımlamayı  2 şekilde halladebeilriz.

// 1-yol:
const hesapla = (sayi1: number, sayi2: number): number => {
  return sayi1 + sayi2;
};

hesapla(10, 20);

// 2-yol
// istersek fonksiyonun tipini type anahtar kelimesi ile tynaımlayp
// ardından fonksiyona bu tipi atayabiliyoruz

// a) fonksiyonun tipinin tanımı
type funcType = (sayi1: number, sayi2: number) => number;

// b) tipe göre fonksiyon tanımı
const hesapla2: funcType = (sayi1, sayi2) => {
  return sayi1 + sayi2;
};

hesapla2(10, 20);

//! SORU
//* Kişinin bulunduğu konumu ve oranın dereceisi parametre olarak alıp
//* Geriye "Merhaba, .... konumundaki hava derecesi ... derece " şeklinde bir
//* metin döndüren fonksiyonun hem type'ını hemde kendisini yazınız

// cevap-1
function havaDurumuMesaji(konum: string, derece: number): string {
  return `Merhaba, ${konum} konumundaki hava derecesi ${derece} derece.`;
}

const konum = 'İstanbul';
const derece = 25;

const mesaj = havaDurumuMesaji(konum, derece);
console.log(mesaj);

// cevap-2
type funcType1 = (konum: string, derece: number) => string;

const result: funcType1 = (konum, derece) => {
  return `Merhaba, ${konum} konumundaki hava derecesi ${derece} `;
};

const mesaj1 = result('Adana', 20);

console.log(mesaj1);

// cevap 3
type loc = (konum: string, derece: number) => string;

const gonder1: loc = (konum, derece) => {
  return `Merhaba, ${konum} 
    konumundaki hava derecesi ${derece} 
    derece. `;
};

const konum1 = 'izmir';
const derce1 = 30;

const text = gonder1(konum1, derce1);
console.log(text);

// cevap 4
type funcType3 = (location: string, degree: number) => string;

const crtText: funcType3 = (location, degree) => {
  return `Merhaba ${location} konumundaki hava derecesi ${degree} derece`;
};

console.log(crtText('antalya', 40));
