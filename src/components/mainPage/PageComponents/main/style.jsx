import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerView: {
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 25,
    paddingBottom: 25,
  },
  mainView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTempText: {
    fontSize: 80,
    color: '#393a38',
    fontWeight: '900',
  },
  iconStyleHumidity: {
    color: '#0088ff',
  },
  iconStyleWind: {
    color: '#9f9f9f',
  },
  detailsView: {
    width: '95%',
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

export default styles;
