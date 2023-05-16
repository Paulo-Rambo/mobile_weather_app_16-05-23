import {getGps, getGpsPermission} from './locationSlice';
import {getWheather} from '../wheatherAPI/wheatherSlice';

export const inializeAppAction = () => {
  return async dispatch => {
    try {
      await dispatch(getGpsPermission());
      await dispatch(getGps());
      await dispatch(getWheather());
    } catch {
      console.log(error);
    }
  };
};
