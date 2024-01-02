/*
 * Custom Type
 * Şuana kadar tip ataması yaparken her zaman js'de var olan temel tipleri kullandık.
 * Gerçek projelerde o anki yaptıpımız işe özel daha spesifik type'lara ihitiyaç duyarız
 * Bunları tanımlamak için type anahtar kelimesi kullanırız
 
 * Neden İhitiyacımız Var?:
 * Çünkü belirlediğimiz bir type'ın projenin birden çok alanında
 * kullanılması gerekebilir. Bu durumda yapabileceğimiz tek şey kopyala
 * yapıştır yönetemiyle kod kalabılığı oluşturmak.
 
 * Custom type sayesinde bir type tanımlayıp projeinin her alanında type'a veridğimiz
 * ismi çağırarak kullanabiliyoruz

*/

// ÖNEMLİ SORUN
let ahmet_user: {
  id: string;
  name: string;
  age: number;
} = {
  id: 'asd34',
  name: 'Ahmet',
  age: 56,
};

let ali_user: {
  id: string;
  name: string;
  age: number;
} = {
  id: 'asd123',
  name: 'Ali',
  age: 21,
};

// Çözüm
// tipi bu şekilde ayrıca oluştururuz
type UserType = {
  id: string;
  name: string;
  age: number;
  //   x: [string, number];
  //   y: number[];
  //   z: {
  //     a: string;
  //     b: any;
  //   };
};

let veli_user: UserType = {
  id: 'asd',
  name: 'Veli',
  age: 55,
};

let fatma_user: UserType = {
  id: 'asd123',
  name: 'Fatma',
  age: 68,
};

// oluşturuğdumuz bu custom type'ı type tanımlanbilen her yerde kullanabilirzi
const user_list: UserType[] = [
  {
    id: 'asd123',
    name: 'Fatma',
    age: 45,
  },
  {
    id: 'asd',
    name: 'Veli',
    age: 55,
  },
];
