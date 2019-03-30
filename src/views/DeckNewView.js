import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import { handleAddDeck } from '../actions/decks';

class DeckNewView extends React.Component {
  state = {
    title: '',
  };

  setDeckTitle = (title) => {
    this.setState({ title });
  }

  handleSaveDeck = () => {
    const { addDeck, navigation } = this.props;
    const { title } = this.state;
    if (title) {
      addDeck({ title });
      navigation.navigate('DeckList');
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.newDeckQuestion}>What is title of your new deck?</Text>
        <TextInput style={styles.deckTitleInput} onChangeText={this.setDeckTitle} placeholder="Deck Title"></TextInput>
        <TouchableOpacity style={styles.addDeckButton} onPress={this.handleSaveDeck}>
          <Text style={styles.textAddDeckButton}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 48,
  },
  newDeckQuestion: {
    fontSize: 24,
    textAlign: 'center',
  },
  deckTitleInput: {
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 8,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    height: 32,
  },
  addDeckButton: {
    marginTop: 24,
    padding: 8,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
  },
  textAddDeckButton: {
    color: 'white',
  }
});

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (deck) => dispatch(handleAddDeck(deck))
  };
}

const ConnectedDeckListView = connect(null, mapDispatchToProps)(DeckNewView);

export default ConnectedDeckListView;
