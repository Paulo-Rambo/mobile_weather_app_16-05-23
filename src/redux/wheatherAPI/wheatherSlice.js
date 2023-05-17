import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {WEATHER_KEY} from '@env';

export const getWheather = createAsyncThunk(
  'wheather/getWheather',
  async (_, {getState}) => {
    const {location} = getState();
    const {latitude, longitude} = location;

    const apiKey = WEATHER_KEY;
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
    mainTemp: '',
    mainIcon: '',
    mainWind: '',
    mainHumidity: '',
    loading: true,
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
        state.cityName = action.payload.name;
        state.mainIcon = `https://openweathermap.org/img/wn/${action.payload.weather[0].icon}@4x.png`;
        let kelvinToCelsus = action.payload.main.temp;
        kelvinToCelsus = parseFloat(kelvinToCelsus);
        kelvinToCelsus = kelvinToCelsus - 273.15;
        state.mainTemp = kelvinToCelsus.toFixed(1);
        state.mainWind = (action.payload.wind.speed * 3.6).toFixed(1);
        state.mainHumidity = action.payload.main.humidity;
        state.error = null;
        state.loading = false;
      })
      .addCase(getWheather.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default wheatherSlice.reducer;
