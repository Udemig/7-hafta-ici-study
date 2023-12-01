import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobs: [],
  isLoading: false,
  isError: false,
};

const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    // yüklenme durumunu günceller
    setLoading: (state) => {
      state.isLoading = true;
    },
    // api den gelen veirleri state'e aktarırı
    setJobs: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.jobs = action.payload;
    },
    // hata durumunu günceller
    setError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

export const { setLoading, setJobs, setError } = jobSlice.actions;

export default jobSlice.reducer;
