import { createSlice } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
// 1) Başlangıç state'i tanımla
const initialState = {
  tasks: [
    {
      id: '1sfzfsd21',
      title: 'Navbar Animasyonu',
      author: 'Ahmet',
      assigned_to: 'Mehmet',
      end_date: '2024-01-01',
    },
    {
      id: '123123',
      title: 'Ödeme Sistemi',
      author: 'Ali',
      assigned_to: 'Ayşe',
      end_date: '2024-02-01',
    },
  ],
};

// 2) Slice ı oluştur
const crudSlice = createSlice({
  name: 'crud',
  initialState,
  // state'in nasıl değişeceğine karar veren reducer fonksiyonları
  reducers: {
    //1) yeni task ekleme
    addTask: (state, action) => {
      // todoya id ekleme
      action.payload.id = v4();
      // toolkitle birlikte slice'ta tuttuğumuz veriyi doğrudan değiştirebiliyoruz
      state.tasks.push(action.payload);
    },

    //2) taski güncelleme
    editTask: (state, action) => {
      // action payload'ı ile gelen objenin
      // state tutuğumuz eski halini çıkarıp
      // payload ile gelen halini eklicez
      // a= güncellenicek elemanın sırasını bul
      const i = state.tasks.findIndex(
        (t) => t.id === action.payload.id
      );

      //1) splice yöntemi
      // state.tasks.splice(i, 1, action.payload);

      //2) doğrudan dizyi güncelle
      state.tasks[i] = action.payload;
    },

    //3) taski silme
    removeTask: (state, action) => {
      // 1. yöntem > filter > yeni bir dizi oluşturur
      // const filtred = state.tasks.filter(
      //   (task) => task.id !== action.payload
      // );

      // state.tasks = filtred;

      // 2.yöntem > splice > varolan diziyi günceller
      //-- silinecek elemanın dizideki sırasını bulma
      const i = state.tasks.findIndex((t) => t.id === action.payload);
      //-- splice ile diziyi güncelleme
      state.tasks.splice(i, 1);
    },
  },
});

// 3) aksiyonları tek tek export et
export const { addTask, editTask, removeTask } = crudSlice.actions;

// 4) reducer'ı export et
export default crudSlice.reducer;
