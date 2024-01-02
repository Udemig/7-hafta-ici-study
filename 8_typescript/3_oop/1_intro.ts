/*
 * OOP (Object Orianted Programming -  Nesne Tabanlı Programlama)
 
 * Bugüne kadar projelerimizi hep fonksiyonlar kullanarak geliştridk.
 * Fakat proje kepsamı büyüdükçe kullanıdğımız yaklaşım proje yöntemini
 * zorlaştırabilir. Bu mühendisler büyük projeleri yaparken yazılımcılar işini
 * kolaylıştırmak için programlama arayışına girdiler.
 
 * OOP: Etrafımızda bulunan nesnelerin özellik(property) ve davranışlarını(method)
 * modelleyerek yapılan programlama yöntemidir
 
 * OOP yaklaşımı içersinde iki önemli tür bulundurur. Bunlardan biri class diğeri ise
 * interface 'tir.
 
 * Yeni Tanışıcağımız terimler
 * Class | Interface | Extends | InstanceOf | Implements
 
 * >> Class (Sınıf)
 * Bir objenin özellik ve methodlarının bir bütün halinde tutulduğu yapıdır  
 */

class Old_Phone {
  // Burası class'ın gövdesidir. Burda özellik ve methodları tanımlanır

  // Örnek property'leri aşşağıya yazalım
  telefon_tipi: 'entegre' | 'ayrılmış' = 'entegre';
  tus_takim_tipi: 'döner' | 'santral' = 'döner';
  govde: string = 'yatay';

  // Örnek method'ları aşşağıya yazalım
  ahizeAc() {
    console.log('Ahize açılıyor...');
  }

  numarayiCevir(telNum: string): boolean {
    if (telNum.length > 10) {
      console.log('numara çevriliyor');
      return true;
    } else {
      console.log('numara bulunamadı');
      return false;
    }
  }

  ahizeKapat() {
    console.log('Ahize kapatılıyor..');
  }
}

/*
 * Class'ların kullanımı:
 * Bir class'ı tanımlama aynı bir type'ı veya fonksiyonu tanımlamak gibidir.
 * Bir class'ı kullanmak yani class'tan bir örnek oluşturmak için new anahtar
 * kelimesi kullnılır.
 * Bu sayde class'ın çalışan bir kopyasını oluştumuş oluyoruz.
 * Bu kopyayada object diyoruz
 */

// Aşşağıdaki satırda yeni bir obje oluşturduk ve referansını değişkene aktardık
const antika_telefon = new Old_Phone();

// construc tanımı yapmadığımız için telfonun özellikelerinin
// değerlerini örnek oluşturuken belirleyemedik.
antika_telefon.govde = 'dikey';
antika_telefon.telefon_tipi = 'entegre';
antika_telefon.tus_takim_tipi = 'santral';

// objeenin methodlarına eişme
antika_telefon.ahizeAc();
antika_telefon.numarayiCevir('5660343434123');
antika_telefon.ahizeKapat();
