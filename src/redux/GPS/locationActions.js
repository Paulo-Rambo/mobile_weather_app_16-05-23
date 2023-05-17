import {getGps, getGpsPermission} from './locationSlice';
import {getWheather} from '../wheatherAPI/wheatherSlice';
import {getWheatherList} from '../wheatherAPI/wheatherLIstSlice';

export const inializeAppAction = () => {
  return async dispatch => {
    try {
      await dispatch(getGpsPermission());
      await dispatch(getGps());
      await dispatch(getWheather());
      await dispatch(getWheatherList());
    } catch {
      console.log(error);
    }
  };
};
