import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inializeAppAction} from './src/redux/GPS/locationActions';

import {StyleSheet, Text, View} from 'react-native';

function App() {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location);
  const {cityName} = useSelector(state => state.wheather);
  const {latitude, longitude, loading, error} = location;

  useEffect(() => {
    dispatch(inializeAppAction());
  }, []);

  return (
    <View style={styles.sectionContainer}>
      <Text>Teste</Text>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}

      <Text>
        Latitude: {latitude}, Longitude: {longitude}
      </Text>
      <Text>Cidade: {cityName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
