import {Text, View, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import styles from './style';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

export default function Main() {
  const {mainIcon, mainTemp, mainWind, mainHumidity} = useSelector(
    state => state.wheather,
  );
  return (
    <View style={styles.containerView}>
      <Image source={{uri: mainIcon}} style={{width: 200, height: 200}} />
      <Text style={styles.mainTempText}>{mainTemp}º</Text>
      <View style={styles.detailsView}>
        <View style={styles.detailsViewIten}>
          <FontAwesomeIcon
            icon={['fas', 'wind']}
            style={styles.iconStyle}
            size={32}
          />
          <Text style={styles.detailText}> {mainWind} km/h</Text>
        </View>
        <View style={styles.detailsViewIten}>
          <FontAwesomeIcon
            icon={['fas', 'droplet']}
            style={styles.iconStyle}
            size={32}
          />
          <Text style={styles.detailText}> {mainHumidity}%</Text>
        </View>
      </View>
    </View>
  );
}
