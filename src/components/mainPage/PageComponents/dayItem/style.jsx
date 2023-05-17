import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    height: 180,
    width: 120,
    marginRight: 12,
    marginLeft: 12,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: '#4500a4',
    fontSize: 16,
    fontWeight: 800,
    marginBottom: 4,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tempText: {
    color: '#4500a4',
    fontSize: 24,
    fontWeight: 800,
  },
});

export default styles;
