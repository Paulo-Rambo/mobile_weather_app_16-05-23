import {getWheather} from './wheatherSlice';
export const fetchWheather = () => {
  return async dispatch => {
    try {
      await dispatch(getWheather());
    } catch {
      console.log(error);
    }
  };
};
