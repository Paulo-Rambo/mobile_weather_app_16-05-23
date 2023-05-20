import {View, Text, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './style';

export default function Card({item}) {
  console.log(item);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.cardContainer}>
        <Text style={styles.hourStyle}>{item.hour}</Text>
        <Image
          source={{
            uri: `https://openweathermap.org/img/wn/${item.icon}@4x.png`,
          }}
          style={{width: 200, height: 200}}
        />
        <Text style={styles.tempText}>{item.temp}º C</Text>
        <View style={styles.detailsView}>
          <View style={styles.detailsViewIten}>
            <FontAwesomeIcon
              icon={['fas', 'wind']}
              style={styles.iconStyleWind}
              size={32}
            />
            <Text style={styles.detailText}> {item.wind} Km/h</Text>
          </View>
          <View style={styles.detailsViewIten}>
            <FontAwesomeIcon
              icon={['fas', 'droplet']}
              style={styles.iconStyleHumidity}
              size={32}
            />
            <Text style={styles.detailText}> {item.humidity}%</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
