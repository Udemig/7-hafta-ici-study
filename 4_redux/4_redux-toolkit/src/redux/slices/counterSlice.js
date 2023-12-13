/*
  * hem reducer'ları
  * hem aksiyon'ları
  * farklı dosyalarda oluşturmak yeine
  * slice dosyasında bir slice tanımlyıcaz
  * slice yapısı hem reducer hem aksiyonu oluşturucak

  ? slice kurulum
  * 1- import createSlice 
  * 2- gerekli parametreleri tanımla
  * * name > slice'ismi: string
  * * initialState> başlnagıç state'i
  * * reducers> aksiyonları görevini tanımladığımız fonksiyonlar
*/

import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter', //slice'ın ismi
  initialState: { count: 0, theme: 'dark' }, // ilk state
  // state'in nasıl değişceğini karar veren fonksiyonlar
  // reducer/aksiyon fonksiyonları
  // bütün aksiyon fonksiyonları state'i parametre olrak alır
  // fonksiyonun içerisne ise aksiyon çalışınca state'in nasıl güncellenceiğini söylüyoruz
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count > 0 && state.count--;
    },

    // payload'u olan reducer'fonksiyonu
    // bu duurmda 2.paramete olrak aksiyonu alırız
    reset: (state, action) => {
      state.count = action.payload;
    },
  },
});

// createSlice methodunun oluşturdğu aksiyon objesi oluşturan fonkslatrı export etme
export const { increase, decrease, reset } = counterSlice.actions;

// createSlice methodun oluşturdğu reducer'ı export etme
export default counterSlice.reducer;
