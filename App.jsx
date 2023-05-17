import Main from './src/components/mainPage/PageComponents/main';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inializeAppAction} from './src/redux/GPS/locationActions';
import {library} from '@fortawesome/fontawesome-svg-core';
import LinearGradient from 'react-native-linear-gradient';
import DaysList from './src/components/mainPage/PageComponents/dayList';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import {StyleSheet, Text, View, FlatList} from 'react-native';

function App() {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location);
  const {cityName, loading} = useSelector(state => state.wheather);
  const {loadingList} = useSelector(state => state.wheatherList);
  const {latitude, longitude, error} = location;
  useEffect(() => {
    dispatch(inializeAppAction());
  }, []);

  return (
    <LinearGradient
      colors={['#0086ff', '#7bfbbd', '#f6f6f6']}
      style={styles.sectionContainer}>
      <Text>Teste</Text>
      {error && <Text>Error: {error}</Text>}

      <Text>
        Latitude: {latitude}, Longitude: {longitude}
      </Text>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View style={styles.mainView}>
          <Text>Cidade: {cityName}</Text>
          <Main />
        </View>
      )}
      <View style={scrolStyles.container}>
        {loadingList ? <Text>Loading...</Text> : <DaysList />}
      </View>
    </LinearGradient>
  );
}
const scrolStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
  },
});

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    flex: 1,
    height: '100%',
  },
});

export default App;
