import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function QuizView({ onCorrect, onIncorrect }) {
  return (
    <View style={styles.container}>
      <Text>2/2</Text>
      <Text>Does React Native work with Android?</Text>
      <Text>Answer</Text>
      <TouchableOpacity onPress={onCorrect}>
        <Text>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onIncorrect}>
        <Text>Incorrect</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});