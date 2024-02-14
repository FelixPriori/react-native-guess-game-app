import { View, Text, StyleSheet } from "react-native"
import { Colors } from "../../constants/colors"

export default function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: 36,
  }
})