/*
 * Optional Param (Opsiyonel Parametre)

 * Normal şartlarda typescript'de  hata alammak için fonksiyonların 
 * tüm parametrelerini doldurmamız gerekli.
 * Bazı parametrelerin tanımlanmadığında sorun yaratacmayacak fonksiyonlar
 * olabilir.
 * Bu durumda bu parametreyi opesiyonel yapariz

 * Özellikler:
 * tanım (a:number,b?:string);
 * Opsiyonel parametlere istersek undefined değerini gönderiebilirz.
 * İstersek de hiç değer gönderemeyebiliriz.
 
 * Opsiyonel parametreye hiç değer gönderemezsek bu parametrenin değeri ve tipi undfined olur.
 
 * Opsiyonel olan parametreler hep en sonda yer almalı opsiyonel bir parametrenin 
 * ardından zorunlu parametre gelemz
 
 * Değer gönderirkende ya type'a uygun değer göndeririz yada hiç göndermeyiz.   
 */

function exampleFunc(
  param1: number,
  param2: string,
  param3?: object,
  param4?: object
) {
  console.log('>>>param1:', param1, typeof param1);
  console.log('>>>param2:', param2, typeof param2);
  console.log('>>>param3:', param3, typeof param3);
  console.log('>>>param4:', param4, typeof param4);
}

exampleFunc(10, 'selam', { id: 1 }, { name: 'ahmet' }); // 4'üde tanımlı

exampleFunc(12, 'asd', undefined, {}); // opsiyonel olanlardan birini es geçme

exampleFunc(12, 'merhaba'); // opsiyonel olanları yazmadık
