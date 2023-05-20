import {configureStore} from '@reduxjs/toolkit';
import locationReducer from './GPS/locationSlice';
import wheatherReducer from './wheatherAPI/wheatherSlice';
import wheatherListReducer from './wheatherAPI/wheatherLIstSlice';
import geocodeReducer from './googleApi/googleGeocodeSlice';
import autoCompleteReducer from './googleApi/googleAutocompleteSlice';

const store = configureStore({
  reducer: {
    location: locationReducer,
    wheather: wheatherReducer,
    wheatherList: wheatherListReducer,
    geocode: geocodeReducer,
    autoComplete: autoCompleteReducer,
  },
});

export default store;
