import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Card from '../detailsItem';
import {useSelector, useDispatch} from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {closeModalReducer} from '../../../../../redux/wheatherAPI/wheatherLIstSlice';
import LinearGradient from 'react-native-linear-gradient';

export default function ModalDetails() {
  const {objectDetails} = useSelector(state => state.wheatherList);
  const dispatch = useDispatch();
  function closeModal() {
    dispatch(closeModalReducer());
  }
  return (
    <View style={styles.centeredView}>
      <LinearGradient
        colors={['#40a6ff', '#82c5ff', '#b5dcfe', '#0000']}
        style={styles.linearGradient}
        start={{x: 0.8, y: 0}}>
        <View style={styles.dateContainer}>
          <TouchableOpacity
            style={styles.returnButton}
            onPress={() => closeModal()}>
            <FontAwesomeIcon
              icon={['fass', 'arrow-left']}
              style={styles.iconStyleReturn}
              size={32}
            />
          </TouchableOpacity>
          <View style={styles.text}>
            <Text style={styles.dateText}>{objectDetails[0].weekyDay} - </Text>
            <Text style={styles.dateText}>{objectDetails[0].data}</Text>
          </View>
        </View>
      </LinearGradient>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        style={styles.flatListStyle}
        data={objectDetails}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <Card item={item} key={item.id} />;
        }}></FlatList>
    </View>
  );
}
