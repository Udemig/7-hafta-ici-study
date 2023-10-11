import { userIcon } from './helpers.js';

//! ortak değişkenler
var map;

//* kullanının konumunu isteme
navigator.geolocation.getCurrentPosition(
  // kullanınıcı izin veriirse haritayı
  // onun bulundpu konumda açma
  (e) => loadMap([e.coords.latitude, e.coords.longitude]),
  // izin vermezse varsayılan konumda aç
  () => {
    loadMap([38.802424, 35.505317]);
  }
);

//* kullanıcnın konumuna göre haritaya ekrana basma
function loadMap(coords) {
  // haritanın kurulumunu yapar
  map = L.map('map').setView(coords, 10);

  // hartinaın nasıl gözüküceğini belirler
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // kullanıcnın bulunuğu konumunu gösterme
  L.marker(coords, { icon: userIcon })
    .addTo(map)
    .bindPopup('Bulunudğunuz Konum');
}
