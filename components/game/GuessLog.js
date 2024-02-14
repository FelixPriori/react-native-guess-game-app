import { Text, StyleSheet, View } from "react-native"
import { Colors } from "../../constants/colors"

export default function GuessLog({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's guess: {guess}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3
  },
  itemText: {
    fontFamily: 'open-sans'
  }
})