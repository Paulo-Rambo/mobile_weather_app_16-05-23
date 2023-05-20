import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {GOOGLE_KEY} from '@env';
import {userSelectLocation} from '../GPS/locationSlice';

export const getGeolocation = createAsyncThunk(
  'geocode/getGeolocation',
  async (setCityName, {dispatch}) => {
    const apiKey = GOOGLE_KEY;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${setCityName}&key=${apiKey}`;
    const response = await axios.get(url);
    if (response.status !== 200) {
      return {
        payload: 'Não foi possível obter a geolocalização',
        error: true,
        meta: {
          rejectedWithValue: true,
        },
      };
    }
    const geoLocation = {
      latitude: response.data.results[0].geometry.location.lat.toFixed(2),
      longitude: response.data.results[0].geometry.location.lng.toFixed(2),
    };
    dispatch(userSelectLocation(geoLocation));
    return;
  },
);

const geocodeSlice = createSlice({
  name: 'geocode',
  initialState: {
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getGeolocation.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGeolocation.fulfilled, (state, action) => {
        state.error = null;
        state.loading = false;
      })
      .addCase(getGeolocation.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
      });
  },
});

export default geocodeSlice.reducer;
