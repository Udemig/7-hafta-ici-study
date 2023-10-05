import { url, options } from './constants.js';

// api işlemler
export class API {
  constructor() {
    this.songs = [];
  }

  // popüler müzikler için istek atma
  async getPopular() {
    try {
      // api isteği atar
      const res = await fetch(url, options);
      const data = await res.json();
      // class'ta tuttuğumuz değişkeni günceller
      this.songs = data.tracks;
    } catch (err) {
      console.log('Popüler verleri alırken hata oluştu..', err);
    }
  }
}
