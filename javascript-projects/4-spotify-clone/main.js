import { API } from './scripts/api.js';
import { renderCards } from './scripts/ui.js';
// class'ın bir örneğini oluşturma
const api = new API();

document.addEventListener('DOMContentLoaded', async () => {
  await api.getPopular();
  renderCards(api.songs);
});
