import ModalDetails from '../detailsList';
import {Modal, View} from 'react-native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import styles from './style';

export default function DetailsModal() {
  const {modalListStatus} = useSelector(state => state.wheatherList);
  return (
    <Modal
      visible={modalListStatus}
      animationType="slide"
      onRequestClose={() => closeModal()}>
      <LinearGradient
        colors={['#e5f3ff', '#e5f3ff', '#b5dcfe', '#a8d6fe', '#30d6ff']}
        style={styles.sectionContainer}>
        <View style={styles.navBar}></View>

        <ModalDetails />
      </LinearGradient>
    </Modal>
  );
}
