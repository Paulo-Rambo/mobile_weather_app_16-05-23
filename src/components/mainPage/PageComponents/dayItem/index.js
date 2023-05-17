import {View, Text, Image} from 'react-native';
import styles from './style';

export default function Day({item}) {
  console.log(item);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{item.weekyDay} - </Text>
        <Text style={styles.dateText}>{item.data}</Text>
      </View>
      <View style={styles.cardContainer}>
        <Text>{item.hour}</Text>
        <Image source={{uri: item.icon}} style={{width: 100, height: 100}} />
        <Text style={styles.tempText}>{item.temp}º C</Text>
      </View>
    </View>
  );
}
