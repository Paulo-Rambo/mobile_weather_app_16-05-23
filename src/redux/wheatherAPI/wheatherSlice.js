import {createSlice, createAsyncThunk, useSelector} from '@reduxjs/toolkit';
import axios from 'axios';

export const getWheather = createAsyncThunk(
  'wheather/getWheather',
  async (_, {getState}) => {
    const {location} = getState();
    const {latitude, longitude} = location;

    const apiKey = '03e31b2e9dc18e5349f0152296dbda2e';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const response = await axios.get(url);
    if (!response.data) {
      throw new Error('Permission to access weather was denied');
    }
    return response.data;
  },
);

const wheatherSlice = createSlice({
  name: 'wheather',
  initialState: {
    cityName: '',
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getWheather.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWheather.fulfilled, (state, action) => {
        console.log(action.payload);
        state.cityName = action.payload.name;
        state.loading = false;
        state.error = null;
      })
      .addCase(getWheather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default wheatherSlice.reducer;
