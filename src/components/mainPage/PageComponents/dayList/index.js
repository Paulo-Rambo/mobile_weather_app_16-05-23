export default function DaysList() {
  return (
    <View style={styles.listView}>
      <View style={styles.centeredView}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          style={styles.listStyle}
          data={tasksList.reverse()}
          renderItem={({item}) => {
            return <Task item={item} />;
          }}></FlatList>
      </View>
    </View>
  );
}
