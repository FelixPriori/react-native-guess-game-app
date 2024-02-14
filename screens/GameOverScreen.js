import { StyleSheet, View, Text, Image, ScrollView, useWindowDimensions } from 'react-native';
import Title from '../components/ui/Title'
import { Colors } from '../constants/colors'
import PrimaryButton from '../components/ui/PrimaryButton'

export default function GameScreen({ userNumber, roundsNumber, onStartNewGame }) {
  const { width: deviceWidth, height: deviceHeight } = useWindowDimensions()

  let imageSize = 300;

  if (deviceWidth < 380) {
    imageSize = 150
  }

  if (deviceHeight < 420) {
    imageSize = 80
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.screen}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text
          style={styles.summaryText}
        >
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: "center"
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  imageContainer: {
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%'
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  }
})