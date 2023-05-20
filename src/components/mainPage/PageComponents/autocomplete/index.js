import React, {useRef, useEffect} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_KEY} from '@env';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './styles';
import {Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {changeAutoCompleteState} from '../../../../redux/googleApi/googleAutocompleteSlice';
import {fetchWheatherGeoCode} from '../../../../redux/googleApi/googleGeocodeActions';

navigator.geolocation = require('@react-native-community/geolocation');
// navigator.geolocation = require('react-native-geolocation-service');

const GooglePlacesInput = () => {
  const dispatch = useDispatch();
  const {autoCompleteState} = useSelector(state => state.autoComplete);
  const ref = useRef(null);

  function onPressFunction(setCityName) {
    dispatch(changeAutoCompleteState(false));
    console.log(setCityName);
    dispatch(fetchWheatherGeoCode(setCityName));
  }
  function setFocus() {
    ref.current?.focus();
  }
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <GooglePlacesAutocomplete
      ref={ref}
      minLength={3}
      placeholder="cidade..."
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        if (data?.description) {
          onPressFunction(data.description.split(',')[0]);
        }
      }}
      query={{
        key: GOOGLE_KEY,
        language: 'en',
        types: '(cities)',
      }}
      currentLocation={false}
      renderRightButton={() => (
        <Pressable onPress={onPressFunction}>
          <FontAwesomeIcon
            icon={['fas', 'circle-xmark']}
            size={32}
            style={styles.iconStyleCloseButton}
          />
        </Pressable>
      )}
    />
  );
};

export default GooglePlacesInput;
