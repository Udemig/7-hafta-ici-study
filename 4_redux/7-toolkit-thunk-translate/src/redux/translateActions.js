import { createAsyncThunk } from '@reduxjs/toolkit';
import { options } from '../constants';
import axios from 'axios';

// bütün dilleri
export const getLanguages = createAsyncThunk(
  'translate/getLanguages',
  async () => {
    // api isteği atar
    const res = await axios.request(options);

    // payload'ı return etme
    return res.data.data.languages;
  }
);

// çevirrme
export const translateText = createAsyncThunk(
  'translate/text',
  async ({ sourceLang, targetLang, text }) => {
    // api isteğine gönderlicek parametreleri ayarlama
    const params = new URLSearchParams();
    params.set('source_language', sourceLang.value);
    params.set('target_language', targetLang.value);
    params.set('text', text);

    const options = {
      method: 'POST',
      url: 'https://text-translator2.p.rapidapi.com/translate',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key':
          '75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247',
        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com',
      },
      data: params,
    };

    // yukarıdaki ayarlara göre api isteği atar
    const res = await axios.request(options);

    // cevabı slice'a aktar
    return res.data.data.translatedText;
  }
);
