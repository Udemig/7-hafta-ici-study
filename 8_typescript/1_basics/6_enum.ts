/*
 * Enum (numaralandırma)
 * Belirli Değerler Kümesi
 * Eleman sayısı değişmeyecek olan dataları ifade etmek için kullanılır
 * Genelde az miktarda farklı değere sahip olan verileri
 * gruplandırmak için tercih ederiz.
 * Enum isimlendiriken sonuna "enum" takısı koymak faydıdalırıdır
 * İsimlendirmede değişken isimlendirme kurallarına sadık kalırız
 */

enum RenklerEnum {
  Kirmizi = 'Kirmizi',
  Yesil = 'Yesil',
  Sari = 'Sari',
}

let araba_renk = RenklerEnum.Kirmizi;

console.log('renk', araba_renk);

// Örnek 2
enum Gunler {
  Pazartesi,
  Sali,
  Carsamba,
  Persembe,
  Cuma,
  Cumartesi,
  Pazar,
}

let bugun = Gunler.Persembe; // 3
let yarin = Gunler[4]; // Cuma
let gun = Gunler[Gunler.Pazartesi]; //  Pazartesi

console.log(bugun);
console.log(yarin);
console.log(gun);

// Gerçek Proje Örnek
enum Durum {
  Hazirlaniyor = 'Hazırlanıyor',
  Dagitima_Cikti = 'Dağıtıma Çıktı',
  Teslim_Edildi = 'Teslim Edildi',
}

console.log(Durum.Dagitima_Cikti);
