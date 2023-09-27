# Harcama Hesaplayıcı

# Yapılacaklar

- Ekleme Özelliği:
- - Ekle butonuna tıklanıldığında inputların verilerine eriş
- - İnputlar boşsa kullanıcıya uyarı ver
- - Boş değilse ekrana harcama kartı bas
- - ödendi tiklendiyse elemana `paid` class'ı ekle
- - en son bütün inputları temizle

- Toplam Bilgisi:
- - Html de bir toplam alanı js'de toplam değişkeni oluştur
- - Her hacama eklendiğinde harcamnının fiyatını toplam değişkenine ekle
- - Harcama silindiğinde toplam'dan fiyatı çıkar
- - Değişken her güncellendiğinde ekranı'da güncelle

- Silme | Güncelleme Özelliği
- - Listedeki bütün tıklanma olaylarını izle
- - Tıklanılan id `delete` ise elemanı kaldır ve toplamdan çıkar
- - Tıklanılan id `update` ise pai class'ına ekle veya çıkar

- Harcamaları Filtreleme
- - Html'de select alanı oluştur
- - Select'de değer jer değiştiğinde seçilen bilgiyi al
- - Seçilen değere göre filtreme yap
