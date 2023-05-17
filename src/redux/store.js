import {configureStore} from '@reduxjs/toolkit';
import locationReducer from './GPS/locationSlice';
import wheatherReducer from './wheatherAPI/wheatherSlice';
import wheatherListReducer from './wheatherAPI/wheatherLIstSlice';

const store = configureStore({
  reducer: {
    location: locationReducer,
    wheather: wheatherReducer,
    wheatherList: wheatherListReducer,
  },
});

export default store;
