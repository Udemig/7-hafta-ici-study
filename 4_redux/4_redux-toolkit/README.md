# Redux Toolkit

- Faydaları:
- Klasik Redux'a göre daha az kod içeriyor.
- Dahili olrak thunk yanında gelir.
- Devtools eklentisi sayesinde proje geliştiriken store'u
  reducer'ları action'ları izleyebiliyoruz.
- Veri yönetimi daha kolay olucak.

# Kurulum

- Kütüphaneler

- npm install @reduxjs/toolkit
- npm install react-redux

- Slice
- Redux toolkit'in içinde yer alan ve reducer'ı ve aksiyonları bir araya getiren yapıdır.
  Normdal reducxta aksiyonları ayrı reducer'ları ayrı dosyalarda tanımlyorduk.
  Toolkit ile birlikte slice dosyalarında sadece aksiyonların görevini yazıyoruz bu slice ypısı bizim için hem reducer'ı hemde de aksiyonu otmatik oluşturuyor.
