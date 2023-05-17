import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  containerView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 25,
    paddingBottom: 25,
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

export default styles;
