import * as yup from 'yup';

// 1 büyük harf
// 1 küçük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

// validasyon şeması
// formdaki inputlşarın geçerli
// olması için gerekli koşulları tanımladığımız yapı

// input alanı  için koşulları tanımlarken kulanmmamız
// gereken ilk  yup fonksyionu verinin tipini olmalı
//  devamanı ise zincileme fonksiyonlar şeklinde koşulları sıralrız
export const schema = yup.object().shape({
  // email için zorunlulukları belirle
  email: yup
    .string()
    .email('Lütfen geçerli bir email formatı giriniz')
    .required('Email alanı zorunludur'),

  // yaş için zorunlulukları belirle
  age: yup
    .number()
    .min(18, "Yaşınız 18'den büyük olmalı")
    .max(100, "Yaşınız 100'den büyük olamaz")
    .integer('Lütfen tam sayı giriniz')
    .required('Yaş Alanı Zorunludur'),

  // şifre için zorunlulukları belirle
  password: yup
    .string()
    .min(5, 'Şifre en az 5 karakter olmalı')
    // şifre regex kurallarına uyuyor mu kontrol et
    .matches(regex, 'Şifreniz yeterince güçlü değil')
    .required('Şifre Alanı Zorunludur'),

  // onay şifresi için zorunlulukları belirle
  confirmPassword: yup
    .string()
    // oneOf inputtaki veri verdiğimiz diziki metinlerden biriyle eşleşiyor mu kontrolü yapar
    // ref() farklı input alanlarındaki veriyi çağırmaya yarar
    .oneOf([yup.ref('password')], 'Onay şifreniz doğru değil')
    .required('Şifre Onay Zorunlludur'),
});
