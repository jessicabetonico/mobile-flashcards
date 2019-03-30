import * as React from 'react';
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { handleAddCardDeck } from '../actions/decks';

class QuestionNewView extends React.Component {
  deckId = null;
  state = {
    question: '',
    answer: '',
  }

  componentDidMount() {
    const { navigation } = this.props;
    deckId = navigation.getParam('deckId');
    if (!deckId) navigation.goBack();
  }

  setQuestion = (question) => {
    this.setState({ question });
  }

  setAnswer = (answer) => {
    this.setState({ answer });
  }

  handleAddCard = () => {
    const { addCardDeck, navigation } = this.props;
    const { question, answer } = this.state;
    if (question && answer) {
      addCardDeck(deckId, { question, answer });
      navigation.navigate('DeckDetails', { deckId });
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <TextInput onChangeText={this.setQuestion} style={styles.cardQuestionInput} placeholder="Question"></TextInput>
        <TextInput onChangeText={this.setAnswer} style={styles.cardAnswerInput} placeholder="Answer"></TextInput>
        <TouchableOpacity style={styles.addCardButton} onPress={this.handleAddCard}>
          <Text style={styles.textAddCardButton}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

QuestionNewView.navigationOptions = () => {
  return {
    title: 'Add Card',
  };
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
  cardQuestionInput: {
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 8,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    height: 32,
  },
  cardAnswerInput: {
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 8,
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
    height: 32,
  },
  addCardButton: {
    marginTop: 24,
    padding: 8,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
  },
  textAddCardButton: {
    color: 'white',
  }
});

function mapDispatchToProps(dispatch) {
  return  {
    addCardDeck: (deckId, card) => dispatch(handleAddCardDeck(deckId, card)),
  };
}

const ConnectedQuestionNewView = connect(null, mapDispatchToProps)(QuestionNewView);

export default ConnectedQuestionNewView;
