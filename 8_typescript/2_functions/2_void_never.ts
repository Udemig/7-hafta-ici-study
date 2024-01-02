// Void:
// Genellikle bir fonksiyonun bir şey döndürmedğini ifade
// etmek için kullanılır. Yani bir fonksiyonun geriye
// bir şey dödnrümeyteceğini ifade eder.
// Eğer fonksiyonun return tipi "void" is ya return satırı
// yoktur varsada undefined döndürür.

function selamla(name: string): void {
  // fonksiyonu durdurmak için kullanılan return hata vermez
  if (name === '') {
    return;
  }

  console.log('Merhabalar', name);

  //! return "merhaba" // hata verir
}

//! Never:
// Örneğin bir fonksiyonun sürekli olarak hata fırlatması durumu
// Genellikle "hiçbir zaman bu noktaya ulaşılamaz" durumlarında
// kullanılır

function errFunc(message: string): never {
  throw new Error(message);

  console.log('Hatanın çalışmasının arıdından');
}

try {
  const sonuc = errFunc('Doğrulama hatası');
  console.log(sonuc);
} catch (err) {
  console.log(err);
}

/*
 * Sonuç olarak:
 * void type'inde return satırı sadece fonksiyonu durdurmak için kullanılabilir
 * never'da ise retun asla kullanılamaz herhangi bir hata throw edilir
 */
