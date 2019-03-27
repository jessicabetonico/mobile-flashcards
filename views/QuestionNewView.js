import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function QuestionNewView({ onSubmit }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Question"></TextInput>
      <TextInput placeholder="Answer"></TextInput>
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