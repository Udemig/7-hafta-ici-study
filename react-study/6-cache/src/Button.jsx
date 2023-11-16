import React, { memo } from "react";

const Button = ({ count, handleClick }) => {
  console.log("Buton ekrana basıldı > render oldu");
  return <button>Tıkljjhha</button>;
};

// React.ememo bileşene gödneridğimiz proplara bakar
// proplar son ekrana bastığımzıdan itibaren değişmediyse
// bileşeni tekrardan rendere etmez
// fonksiyon evay obje gönderidğimizde javascript yapısında kaynaklı
// olarak işleveni doğru şekilde yapamaz
// gönderdiğim obje veya fonk. aynı olamasına rağmen bileşeni tekrar
// rendeer eder
export default memo(Button);
