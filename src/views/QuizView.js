import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { handlePlayQuizToday } from '../utils/quiz-remember';

class QuizView extends React.Component {
  state = {
    numberActiveQuestion: 0,
    flipCard: false,
    scoreView: false,
    score: 0,
  };

  handleChangeSide = () => {
    this.setState((prevProps) => ({
      flipCard: !prevProps.flipCard,
    }));
  }

  handleCorrect = () => {
    this.plusScore();
    this.nextQuestion();
  }

  plusScore() {
    this.setState(({ score }) => ({
      score: score + 1,
    }));
  }

  handleIncorrect = () => {
    this.nextQuestion();
  }

  nextQuestion = () => {
    if (this.hasMoreQuestion()) {
      this.setState(({ numberActiveQuestion }) => ({
        numberActiveQuestion: numberActiveQuestion + 1,
        flipCard: false,
      }));
    } else if (this.isToShowScore()) {
      this.showScore();
    }
  }

  showScore = () => {
    handlePlayQuizToday();
    this.setState(() => ({
      scoreView: true,
    }));
  }

  isToShowScore = () => {
    const { numberActiveQuestion } = this.state;
    const { deck: { questions } } = this.props;
    return numberActiveQuestion === (questions.length - 1);
  }

  hasMoreQuestion = () => {
    const { numberActiveQuestion } = this.state;
    const { deck: { questions } } = this.props;
    return numberActiveQuestion < (questions.length - 1);
  }

  renderQuestion() {
    const { numberActiveQuestion, flipCard } = this.state;
    const { deck: { questions } } = this.props;
    const activeQuestion = questions[numberActiveQuestion];
    return (
      <View style={styles.containerQuestion}>
        <View>
          <Text>{ numberActiveQuestion + 1 } / { questions.length }</Text>
        </View>
        <Text style={styles.questionText}>{flipCard ? activeQuestion.answer : activeQuestion.question}</Text>
        <TouchableOpacity onPress={this.handleChangeSide}>
          <Text>{flipCard ? 'Question' : 'Answer'}</Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.questionCorrectBtn} onPress={this.handleCorrect}>
            <Text style={styles.textQuestionCorrectBtn}>Correct</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.questionIncorrectBtn} onPress={this.handleIncorrect}>
            <Text style={styles.textQuestionIncorrectBtn}>Incorrect</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  handleBackToDeck = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
  }

  handleRestartQuiz = () => {
    this.setState({
      numberActiveQuestion: 0,
      flipCard: false,
      scoreView: false,
      score: 0,
    });
  }

  renderScore() {
    const { score } = this.state;
    const { deck: { questions } } = this.props;
    return (
      <View style={styles.containerScore}>
        <Text>You score is {(score / questions.length) * 100}%</Text>
        <View>
          <TouchableOpacity style={styles.restartButton} onPress={this.handleRestartQuiz}>
            <Text style={styles.textRestartButton}>Restart Quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.backToDeckButton} onPress={this.handleBackToDeck}>
            <Text style={styles.textBackToDeckButton}>Back to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  render() {
    const { scoreView } = this.state;
    return (
      <View style={styles.container}>
        {scoreView ? this.renderScore() : this.renderQuestion()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerQuestion: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  numberQuestions: {
    flex: 1,
    alignItems: 'flex-start',
  },
  questionText: {
    fontSize: 32,
  },
  questionCorrectBtn: {
    marginTop: 8,
    padding: 8,
    backgroundColor: 'green',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
  },
  textQuestionCorrectBtn: {
    color: 'white',
  },
  questionIncorrectBtn: {
    textAlign: 'center',
    marginTop: 8,
    padding: 8,
    backgroundColor: 'red',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
  },
  textQuestionIncorrectBtn: {
    color: 'white',
  },
  containerScore: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  restartButton: {
    padding: 8,
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 8,
    borderWidth: 1,
  },
  textRestartButton: {
    color: 'black',
  },
  backToDeckButton: {
    marginTop: 8,
    padding: 8,
    backgroundColor: 'black',
    borderColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
  },
  textBackToDeckButton: {
    color: 'white',
  },
});

function mapStateToProps({ decks }, { navigation }) {
  const deckId = navigation.getParam('deckId');
  return {
    deck: decks[deckId],
  };
}

export default connect(mapStateToProps)(QuizView);
