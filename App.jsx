import Main from './src/components/mainPage/PageComponents/main';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {inializeAppAction} from './src/redux/GPS/locationActions';
import {library} from '@fortawesome/fontawesome-svg-core';
import LinearGradient from 'react-native-linear-gradient';
import {fas} from '@fortawesome/free-solid-svg-icons';
library.add(fas);

import {StyleSheet, Text, View, ScrollView} from 'react-native';

function App() {
  const dispatch = useDispatch();
  const location = useSelector(state => state.location);
  const {cityName, loading} = useSelector(state => state.wheather);
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
      <View style={scrolStyles.modalView}>
        <View style={scrolStyles.centeredView}>
          <ScrollView></ScrollView>
        </View>
      </View>
    </LinearGradient>
  );
}
const scrolStyles = StyleSheet.create({
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    width: '90%',
    height: '75%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    opacity: 0.6,
  },
  modalView: {
    justifyContent: 'flex-end',
    height: '40%',
  },
});

const styles = StyleSheet.create({
  sectionContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'blue',
  },
  mainView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTempText: {
    fontSize: 90,
    fontWeight: '800',
  },
  iconStyle: {
    color: 'grey',
  },
  detailsView: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsViewIten: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 25,
  },
});

export default App;
