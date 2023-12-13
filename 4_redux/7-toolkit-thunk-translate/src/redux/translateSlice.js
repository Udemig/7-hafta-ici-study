import { createSlice } from '@reduxjs/toolkit';
import { getLanguages, translateText } from './translateActions';

const initialState = {
  isLangsLoading: false,
  isLangsError: false,
  languages: [],
  isTranslateLoading: false,
  isTranslateError: false,
  translatedText: '',
};

export const translateSlice = createSlice({
  name: 'translate',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getLanguages.pending, (state) => {
      state.isLangsLoading = true;
    });

    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.isLangsLoading = false;
      state.isLangsError = false;
      state.languages = action.payload;
    });

    builder.addCase(getLanguages.rejected, (state) => {
      state.isLangsLoading = false;
      state.isLangsError = true;
    });

    // trasnslate text aksiyonu için store'u güncelle
    builder.addCase(translateText.pending, (state) => {
      state.isTranslateLoading = true;
    });

    builder.addCase(translateText.fulfilled, (state, action) => {
      state.isTranslateLoading = false;
      state.isTranslateError = false;
      state.translatedText = action.payload;
    });

    builder.addCase(translateText.rejected, (state) => {
      state.isTranslateLoading = false;
      state.isTranslateError = true;
    });
  },
  // senkron aksiyonlar için yine reducers kullanmaya devam edicez
  reducers: {
    setTranslated: (state, action) => {
      state.translatedText = action.payload;
    },
  },
});

export const { setTranslated } = translateSlice.actions;
