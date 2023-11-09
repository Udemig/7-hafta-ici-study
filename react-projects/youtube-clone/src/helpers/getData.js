import axios from 'axios';

// istek ile göndermemiz gereken kimliğimiz
const options = {
  params: {
    geo: 'TR',
    lang: 'tr',
  },
  headers: {
    'X-RapidAPI-Key':
      '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com',
  },
};

// todo base url tanımla
// bütün isteklerin (baseurl) başlangıcı olan url'i tanımalama
axios.defaults.baseURL = 'https://yt-api.p.rapidapi.com';

// api ye verdiğimiz endpoin için
// istek atıp verileri döndüren bir fonk
export const getData = async (path) => {
  try {
    // parametre olarak gelen yol istek atar
    // aldığı veirleri döndürür
    return await axios.get(path, options);
  } catch (err) {
    console.log('Verileri çekerken hata oluştu');
  }
};
