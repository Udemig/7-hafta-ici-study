/*
 * Typescript, js'in bazı önemmli açıklaırnı düszeltmek için
 * microsoft tarafından geliştirlimiş bir dildir. Açıklar:
  
 * * Js'de tanımladığımzı bir değişkene daha sonra farklı bir tipte değer atayabiliyoruz.
 * * Ototmatik tamamlama desteği yok
 * * Kodu çalıştıırmadan hataları göremiyoruz
 

 * Typescript dosyları doğrudan çalıştırılamazlar. Çalıştırmak için öncelikle
 * yazdığımzı ts kodunu js'e derlememiz gerekiyor. (tsc) typscript compilier
 */
var first_name = 'selam';

first_name = 'merhaba';

var deneme = /** @class */ (function () {
  function deneme() {}
  return deneme;
})();

console.log(first_name);
// first_name = 35;
