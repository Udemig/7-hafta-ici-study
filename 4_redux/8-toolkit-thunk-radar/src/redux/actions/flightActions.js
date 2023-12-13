import { createAsyncThunk } from '@reduxjs/toolkit';
import { options } from '../../constant';
import axios from 'axios';

export const getFlights = createAsyncThunk(
  'flight/getFlights',
  async () => {
    // 1) api isteği at
    const res = await axios.request(options);

    // 2) gelen veriyi formatla
    const refinedData = res.data.aircraft.map((i) => ({
      id: i[0],
      code: i[1],
      lat: i[2],
      lng: i[3],
    }));

    // 3) formatlanan veriyi slice'a aktar
    return refinedData;
  }
);
