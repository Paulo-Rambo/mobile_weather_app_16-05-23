import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {useDispatch} from 'react-redux';
import {selectObjsDetailsReducer} from '../../../../redux/wheatherAPI/wheatherLIstSlice';

export default function Day({item}) {
  const dispatch = useDispatch();
  function getDetails(data) {
    dispatch(selectObjsDetailsReducer(data));
  }
  console.log(item);
  return (
    <TouchableOpacity onPress={() => getDetails(item.data)}>
      <View style={styles.mainContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateText}>{item.weekyDay} - </Text>
          <Text style={styles.dateText}>{item.data}</Text>
        </View>
        <View style={styles.cardContainer}>
          <Text>{item.hour}</Text>
          <Image
            source={{
              uri: `https://openweathermap.org/img/wn/${item.icon}@2x.png`,
            }}
            style={{width: 100, height: 100}}
          />
          <Text style={styles.tempText}>{item.temp}º C</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
