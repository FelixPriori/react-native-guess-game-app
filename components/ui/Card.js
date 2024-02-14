import { StyleSheet, View, Dimensions } from 'react-native';
import { Colors } from '../../constants/colors';

export default function Card({ children }) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const { width: deviceWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
})