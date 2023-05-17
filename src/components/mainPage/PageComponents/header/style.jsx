import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  iconStyle: {
    color: '#00437d',
  },
  cityView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cityName: {
    fontSize: 22,
    fontWeight: 600,
    paddingLeft: 20,
    paddingRight: 10,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 32,
    paddingRight: 32,
    marginTop: 30,
    marginBottom: 20,
  },
});

export default styles;
