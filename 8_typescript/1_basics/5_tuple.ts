/*
 * Tuple
 * Uzunlğu sabit ve elemanlarının sırası / tipi velirli olan dizilerde
 * diznin tipini tanımlamak için kullanılan yapıdır.
 
 * Bir diizi içerisindek veilerin type'larını sırlarız
 * Örn: [number, string, string, object] 
 */

const colors: [number, number, string, string] = [
  120,
  534,
  '#3sdf324',
  '#dfs234',
];

// farklı örnek
// bir css renginin verilerini dizi içerisnde tutmak istedik:
// rgb(123,45,78);
// rgba(123,45,78,0.4);

// opsiyonel bir değer tanımını ? ile yapabiliyoruz
// opssiyonel bi değerin ardında geliecke olan diğer değer mutlaka opsiyonel olmalı

let color: [number, number, number, number?];

color = [112, 45, 43];

color = [345, 34, 12, 0.95];

// Geçek proje örneği
// const [text,setText] = useState();

// let stateType:[string, function];
