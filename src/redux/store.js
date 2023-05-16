import {configureStore} from '@reduxjs/toolkit';
import locationReducer from './GPS/locationSlice';
import wheatherReducer from './wheatherAPI/wheatherSlice';

const store = configureStore({
  reducer: {
    location: locationReducer,
    wheather: wheatherReducer,
  },
});

export default store;
