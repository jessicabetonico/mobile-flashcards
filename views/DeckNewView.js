import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function DeckNewView({ onSubmit }) {
  return (
    <View style={styles.container}>
      <Text>What is title of your new deck?</Text>
      <TextInput placeholder="Deck Title"></TextInput>
      <TouchableOpacity onPress={onSubmit}>
        <Text>Submit</Text>
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