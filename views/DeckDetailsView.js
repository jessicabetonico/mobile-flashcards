import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DeckListItemView from './DeckListItemView';

export default function DeckDetailsView({ navigation, onAddCard, onStartQuizCard }) {
  return (
    <View style={styles.container}>
      <DeckListItemView />
      <TouchableOpacity onPress={() => navigation.navigate('QuestionNew')}>
        <Text>Add Card</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text>Start Quiz</Text>
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