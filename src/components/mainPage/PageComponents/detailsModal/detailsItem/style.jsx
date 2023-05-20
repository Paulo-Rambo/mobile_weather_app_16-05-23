import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    paddingHorizontal: 24,
    height: 380,
    width: '85%',
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  tempText: {
    fontSize: 50,
    color: '#00437d',
    fontWeight: '900',
  },
  hourStyle: {
    fontSize: 28,
    fontWeight: 600,
    color: '#00437d',
  },
  detailsViewIten: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsView: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailText: {
    fontSize: 25,
  },
  iconStyleHumidity: {
    color: '#0088ff',
  },
  iconStyleWind: {
    color: '#9f9f9f',
  },
});

export default styles;
