import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
  listView: {
    justifyContent: 'flex-end',
    height: '40%',
  },
});

export default styles;
