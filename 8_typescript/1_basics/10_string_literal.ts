//! String literal
//* Belirli bir değeri temsil etmek için kullanılır.
//* String literl tam olarak belirlenen bir dize değeri
//* temsil eder ve bu değer dışında başka bir değer
//* kabul etmez

type userType = {
  id: string;
  type: 'admin' | 'user'; // string literal
};

const newUser: userType = {
  id: 'sad123',
  type: 'admin',
};

const newUser2: userType = {
  id: 'sasds3244',
  type: 'user',
};

const newUser3: userType = {
  id: 'sda3244',
  type: 'admin',
};

const newUser4: userType = {
  id: 'safds3244',
  type: 'user',
};

// örnek
// Bir araba kiralam sitesi için api'den gelen
// aaraba veileri için tip tanımla

type CarType = {
  make: string;
  model: string;
  gearbox: 'automatic' | 'manuel' | 'semi-auto';
  type: 'awd' | 'fwd' | 'rwd';
};

const car: CarType = {
  make: 'Honda',
  model: 'Civic',
  gearbox: 'automatic',
  type: 'rwd',
};
