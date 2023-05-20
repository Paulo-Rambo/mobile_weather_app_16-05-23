import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  centeredView: {
    height: '95%',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  flatListStyle: {
    width: '100%',

    paddingTop: 10,
  },
  dateContainer: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 30,
    paddingLeft: 30,
  },
  dateText: {
    color: '#00437d',
    fontSize: 30,
    fontWeight: 800,
  },
  iconStyleReturn: {
    color: '#00437d',
  },
  returnButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flexDirection: 'row',
  },
  linearGradient: {
    width: '100%',
  },
});

export default styles;
