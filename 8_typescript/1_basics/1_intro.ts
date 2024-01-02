/*
 * Typescript, js'in bazı önemmli açıklaırnı düszeltmek için
 * microsoft tarafından geliştirlimiş bir dildir. Açıklar:
  
 * * Js'de tanımladığımzı bir değişkene daha sonra farklı bir tipte değer atayabiliyoruz.
 * * Ototmatik tamamlama desteği yok
 * * Kodu çalıştıırmadan hataları göremiyoruz
 

 * Typescript dosyları doğrudan çalıştırılamazlar. Çalıştırmak için öncelikle
 * yazdığımzı ts kodunu js'e derlememiz gerekiyor. (tsc) 
  
 * TSC: Typescript Compiler
 * yazılan ts kodlarını js'e çevirir 
 * kullanıabşşlmek için ts paketini indirmemiz gerekir (npm i -g typescript)
 */

let first_name = 'selam';

first_name = 'merhaba';

class deneme {}

console.log(first_name);

// first_name = 35;
