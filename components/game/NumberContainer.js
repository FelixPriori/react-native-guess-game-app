import { View, Text, StyleSheet, Dimensions } from "react-native"
import { Colors } from "../../constants/colors"

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const { width: deviceWidth } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    padding: deviceWidth < 380 ? 12 : 24,
    margin: deviceWidth < 380 ? 12 : 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    fontSize: deviceWidth < 380 ? 28 : 36,
    color: Colors.accent500,
  }
})