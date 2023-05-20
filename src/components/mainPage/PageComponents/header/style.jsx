import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  iconStyleGPS: {
    color: '#00437d',
    marginRight: 10,
  },
  iconStyleSet: {
    color: '#00437d',
    marginLeft: 15,
  },
  cityView: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 22,
    fontWeight: 600,
  },
  container: {
    width: '100%',
    height: '6%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 30,
    marginBottom: 20,
  },
  containerNav: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  googlePlaces: {
    height: '100%',
    zIndex: 2,
    width: '100%',
    flexDirection: 'row',
  },
  iconStyleCalendar: {
    color: '#00437d',
  },
});

export default styles;
