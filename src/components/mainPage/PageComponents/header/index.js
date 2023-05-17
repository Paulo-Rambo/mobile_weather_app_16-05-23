import {View, Text} from 'react-native';
import styles from './style';
import {useSelector} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

export default function Header() {
  const {cityName, loading} = useSelector(state => state.wheather);
  return (
    <View style={styles.container}>
      <View style={styles.cityView}>
        <FontAwesomeIcon
          icon={['fas', 'location-dot']}
          style={styles.iconStyle}
          size={32}
        />
        <Text style={styles.cityName}>{cityName}</Text>
        <FontAwesomeIcon
          icon={['fas', 'sort-down']}
          style={styles.iconStyle}
          size={32}
        />
      </View>
      <View>
        <FontAwesomeIcon
          icon={['fas', 'calendar-days']}
          style={styles.iconStyle}
          size={32}
        />
      </View>
    </View>
  );
}
