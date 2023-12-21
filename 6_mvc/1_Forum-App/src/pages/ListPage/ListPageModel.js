import axios from 'axios';

// veri alakalı her türlü yapıyı model'de tanımlarız
// model oluşturuken genelde class'ları tercih ederiz
export default class ListPageModel {
  // api'dan post veirlerini alıp fonk. çağrılığı yere gönderir
  static async getPosts() {
    const res = await axios.get('http://localhost:3077/posts');
    return res.data;
  }
}
