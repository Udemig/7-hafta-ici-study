/*
 * Function Types:
 * Typscript'te ve javascripte'^te 1 fonksiyonu 
 * 5 farklı yöntem ile tanımlayabiliyoruz

 * 1- İsimli fonksyion
 * 2- İsimsiz fonkiyon 
 * 3- Arrow(Ok) fonksiyon
 * 4- Single line(Tek satır) fonksiyon
 * 5- Immediate call(aniden çağrılan) fonksiyon
  
 * 1 ve 5 hariç diğer fonksiyon türleri bir
 * değişkene aranarak yazılan fonksyonlardır.
 * Bir değişken varsa onun türü olması gerektiğinden
 * türleri typescrtip ile belirlemeliyiz
 
 * Fonksiyonun türünden kasıtımız fonksiyonun
 * aldığı parametrelerinn tipi ve döndürüdü değerin tipidir.
 * Bunları tanımlayınca fonksiyoonun tipini tanımlamış oluyoruz.  
*/

//? 1- isimli fonksiyon
function nameFunc(a: number, b: number): string {
  return 'Hesaplama sonucu: ' + (a + b);
}

//? 2- isimsiz fonksiyon
const noNameFunc = function (par1: number): number {
  return par1 * 8.9;
};

//? 3- ok fonksiyonu
const arrowFunc = (par1: number): number => {
  return par1 * 10;
};

//? 4- tek satır fonksiyon
const singleLineFunc = (par1: number): number => par1 * 20;

// fonksiyonları çağırma
console.log(nameFunc(10, 20));
console.log(noNameFunc(10));
console.log(arrowFunc(3));
console.log(singleLineFunc(6));

//? 5- Immediate Call Function
// Bu fonksiyonlar tnaımlandıpı anda çağrılır
(function () {
  console.log('Merhablar, Bugün Nasılsınız');
})();
