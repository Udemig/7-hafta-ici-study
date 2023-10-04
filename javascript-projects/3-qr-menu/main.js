import { renderMenuItems, renderButtons } from './scripts/ui.js';
//* html'den gelenler
const menuList = document.querySelector('#menu-list');
const buttonsArea = document.getElementById('buttons');

//!* sayfanın yüklenme anını izleme
document.addEventListener('DOMContentLoaded', () => {
  renderButtons();
  fetchMenu();
});

//* datayı global scope'da tanımlama
let data;

//* menü veirlerini json dosyasından çeker
async function fetchMenu() {
  const res = await fetch('./db.json');
  data = await res.json();
  console.log(data);
  renderMenuItems(data.menu, menuList);
}

// tıklanılan kategoriyi belirleme
buttonsArea.addEventListener('click', (e) => {
  if (e.target.id !== 'buttons') {
    renderButtons(e.target.innerText);
  }
});
