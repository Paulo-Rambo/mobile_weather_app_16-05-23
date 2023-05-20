import {getGeolocation} from './googleGeocodeSlice';
import {getWheather} from '../wheatherAPI/wheatherSlice';
import {getWheatherList} from '../wheatherAPI/wheatherLIstSlice';

export const fetchWheatherGeoCode = setCityName => {
  return async dispatch => {
    try {
      await dispatch(getGeolocation(setCityName));
      await dispatch(getWheather());
      await dispatch(getWheatherList());
    } catch {
      console.log(error);
    }
  };
};
