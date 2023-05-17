import {View, FlatList} from 'react-native';
import styles from './style';
import Day from '../dayItem';
import {useSelector} from 'react-redux';

export default function DaysList() {
  const {listData} = useSelector(state => state.wheatherList);
  return (
    <View style={styles.centeredView}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.flatListStyle}
        data={listData}
        keyExtractor={item => item.data}
        renderItem={({item}) => {
          return <Day item={item} key={item.data} />;
        }}></FlatList>
    </View>
  );
}
