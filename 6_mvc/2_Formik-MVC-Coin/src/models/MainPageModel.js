import axios from 'axios';

export default class MainPageModel {
  static async getCoins(page) {
    // offset:atlanıcak eleman sayısı
    // limit: gelicvek eleman sınır
    // doğru syadaki elemnalara eişmke için sayfa sayını bir eksiğini
    // limit ile çarpmak gerekri 3 sayfdaki veriyi almak için ilk
    // ilk 30 taneyi atlamamız lazım yani (3-1) * 15
    const params = {
      offset: (page - 1) * 15,
      limit: 15,
    };

    try {
      const res = await axios.get(
        'https://api.coincap.io/v2/assets',
        { params }
      );
      return res.data.data;
    } catch (err) {
      console.log('mainapge istek', err);
    }
  }
}

MainPageModel.getCoins();
