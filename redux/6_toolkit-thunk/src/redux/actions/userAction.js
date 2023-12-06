import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// asenkron işlemler (veritabanı istekleri)  yapıp
// sonucunu store'a akataramını istedsiğimiz
// aksiyonları toolkitte createAsyncThunk methodu
// ile tanımlarız

// Bizden iki paramere ister
// 1) aksiyon tipi: string
// 2) fonksiyon: bu fonksiyon api istekleri yapıp sonucunu store'a adım adım aktarır
// bu fonksiyondan store'a veri aktarmak için veriyi return etememiz gerekli
export const getUser = createAsyncThunk(
  'users/getUsers',
  async () => {
    // api istekleri yapıcaz
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    // veriyi return edip reducer'a aktarıcaz
    return res.data;
  }
);

// Asenkron thunk aksiyonlarını çalıştırdığımız
// store'a bilgilendirmek için 3 farklı tipte
// aksiyon tetikler
// pending: api'den henüz cevap gelemedi
// fulfilled: api'den olumlu cevap geldi (veriyi gönderir)
// rejected: api'dan olumsuz cevap geldi (hatayı gönderir)
