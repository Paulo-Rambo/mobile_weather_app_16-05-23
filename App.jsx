import Main from './src/components/mainPage/PageComponents/main';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inializeAppAction} from './src/redux/GPS/locationActions';
import {library} from '@fortawesome/fontawesome-svg-core';
import LinearGradient from 'react-native-linear-gradient';
import DaysList from './src/components/mainPage/PageComponents/dayList';
import Header from './src/components/mainPage/PageComponents/header';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import {StyleSheet, Text, View} from 'react-native';

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
      colors={['#40a6ff', '#82c5ff', '#b5dcfe', '#a8d6fe', '#30d6ff']}
      style={styles.sectionContainer}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Header />
          <View style={styles.mainView}>
            <Main />
          </View>
        </>
      )}
      <View style={styles.containerScroll}>
        {loadingList ? <Text>Loading...</Text> : <DaysList />}
      </View>
    </LinearGradient>
  );
}

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
  containerScroll: {
    alignItems: 'center',
    width: '100%',
  },
});

export default App;
