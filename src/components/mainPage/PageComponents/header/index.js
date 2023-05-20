import {View, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import {useSelector, useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import GooglePlacesInput from '../autocomplete';
import React from 'react';
import {useRef} from 'react';
import {changeAutoCompleteState} from '../../../../redux/googleApi/googleAutocompleteSlice';

export default function Header() {
  const {cityName} = useSelector(state => state.wheather);
  const {autoCompleteState} = useSelector(state => state.autoComplete);
  const dispatch = useDispatch();

  function onPressFunction() {
    dispatch(changeAutoCompleteState(true));
  }

  return (
    <View style={[styles.container, autoCompleteState && styles.containerNav]}>
      {autoCompleteState ? (
        <View style={styles.googlePlaces}>
          <GooglePlacesInput />
        </View>
      ) : (
        <>
          <TouchableOpacity onPress={onPressFunction}>
            <View style={styles.cityView}>
              <FontAwesomeIcon
                icon={['fas', 'location-dot']}
                style={styles.iconStyleGPS}
                size={32}
              />
              <Text style={styles.cityName}>{cityName}</Text>
              <FontAwesomeIcon
                icon={['fas', 'sort-down']}
                style={styles.iconStyleSet}
                size={32}
              />
            </View>
          </TouchableOpacity>
          <View>
            <FontAwesomeIcon
              icon={['fas', 'calendar-days']}
              style={styles.iconStyleCalendar}
              size={32}
            />
          </View>
        </>
      )}
    </View>
  );
}
