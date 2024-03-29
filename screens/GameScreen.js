import { useState, useEffect } from 'react';
import { StyleSheet, View, Alert, FlatList, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer'
import GuessLog from '../components/game/GuessLog'
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/game/InstructionText';
import { generateRandomBetween } from '../util/generateRandomBetween';
import { Colors } from '../constants/colors';

let minBoundary = 1;
let maxBoundary = 100;

const directions = {
  lower: 'lower',
  greater: 'greater'
}

export default function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setOpponentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess])
  const { width: deviceWidth } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction) {
    if (
      (direction === directions.lower && currentGuess < userNumber) ||
      (direction === directions.greater && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        "You know that this is wrong...",
        [{ text: "Sorry!", style: 'destructive' }]
      );
      return;
    }

    if (direction === directions.lower) {
      maxBoundary = currentGuess;
    } else if (direction === directions.greater) {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setOpponentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds])
  }

  const guessRoundsListLength = guessRounds.length

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, directions.lower)}>
              <Ionicons name="remove" size={24} color={Colors.accent500} />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, directions.greater)}>
              <Ionicons name="add" size={24} color={Colors.accent500} />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  )

  if (deviceWidth > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, directions.lower)}>
              <Ionicons name="remove" size={24} color={Colors.accent500} />
            </PrimaryButton>
          </View>
          <NumberContainer>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, directions.greater)}>
              <Ionicons name="add" size={24} color={Colors.accent500} />
            </PrimaryButton>
          </View>
        </View>
      </>
    )
  }

  return (
    <View style={[styles.screen, { marginTop: deviceWidth > 500 ? 30 : 100 }]}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => item}
          renderItem={({ item, index }) => (
            <GuessLog
              roundNumber={guessRoundsListLength - index}
              guess={item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    alignItems: 'center'
  },
  instructionText: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  listContainer: {
    flex: 1,
    padding: 16,
  }
});