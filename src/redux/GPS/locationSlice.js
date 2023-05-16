import {createSlice, createAsyncThunk, useSelector} from '@reduxjs/toolkit';
import Geolocation from 'react-native-geolocation-service';
import {Platform, PermissionsAndroid, PermissionsIOS} from 'react-native';
import {check, PERMISSIONS} from 'react-native-permissions';

export const getGps = createAsyncThunk('location/getGps', async () => {
  return new Promise((resolve, reject) => {
    Geolocation.getCurrentPosition(
      position => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        reject(error);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  });
});

export const getGpsPermission = createAsyncThunk(
  'location/getGpsPermission',
  async () => {
    let status;
    const currentPlataform = Platform.OS;
    if (currentPlataform === 'android') {
      console.log(currentPlataform);
      status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }
    console.log(status);

    if (currentPlataform === 'android' && status !== 'granted') {
      console.log('teste');
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Permissão de Localização',
            message:
              'Este aplicativo precisa da sua permissão para acessar a sua localização.',
            buttonPositive: 'OK',
            buttonNegative: 'Cancelar',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return;
        } else {
          return {
            payload: 'Permission to access location was denied',
            error: true,
            meta: {
              rejectedWithValue: true,
            },
          };
        }
      } catch (err) {
        console.warn(err);
      }
    }
    if (currentPlataform === 'ios' && status !== 'authorized') {
      try {
        const granted = await PermissionsIOS.request('location');
        if (granted === 'authorized') {
          return;
        } else {
          return {
            payload: 'Permission to access location was denied',
            error: true,
            meta: {
              rejectedWithValue: true,
            },
          };
        }
      } catch (err) {
        console.warn(err);
      }
    }
  },
);

const locationSlice = createSlice({
  name: 'location',
  initialState: {
    gpsPermissionState: false,
    latitude: 234,
    longitude: 323,
    loading: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getGpsPermission.rejected, (state, action) => {
        state.loading = false;
        state.gpsPermissionState = false;
        state.error = action.error.message;
        state.message = 'Permissão negada';
      })
      .addCase(getGpsPermission.fulfilled, (state, action) => {
        state.error = null;
        state.gpsPermission = true;
        state.message = 'Permissão concedida';
      })
      .addCase(getGps.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getGps.fulfilled, (state, action) => {
        state.latitude = action.payload.latitude;
        state.longitude = action.payload.longitude;
        state.loading = false;
        state.error = null;
      })
      .addCase(getGps.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
export default locationSlice.reducer;
