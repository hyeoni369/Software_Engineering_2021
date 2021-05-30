import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AwesomeButton from 'react-native-really-awesome-button'

import { surveyList } from '../assets/SurveyList'
import Rating from '../components/Rating'
import SurveySubmitModal from '../components/SurveySubmitModal'

/*
 * styles.container 변경
 * initAnswers, submiSurvey, cancelSurvey, componentDidMount 작성
 * pressAble 전부 AwesomeButton으로 변경
 */

class SurveyScreen extends React.Component {
  constructor(props) {
    super(props)

    surveyList.reset()
    
    this.state = {
      currentQuestion: 0,
      questionList: surveyList.questions,
      submitFlag: false,
    }
  }

  submitSurvey = () => {
    this.setState({ submitFlag: !this.state.submitFlag })
  }

  showNextQuestion = () => {
    if(this.state.currentQuestion >= this.state.questionList.length -1 ) {
      return;
    }
    this.setState({ currentQuestion: this.state.currentQuestion + 1 })
  }

  showPrevQuestion = () => {
    if(this.state.currentQuestion <= 0) {
      return;
    }
    this.setState({ currentQuestion: this.state.currentQuestion - 1 })
  }

  render () {
    return (
      <View style={styles.container}>
        <SurveySubmitModal submitFlag={this.state.submitFlag} navigation={this.props.navigation}/>
        <View style={{ height: 200, justifyContent: 'space-evenly', marginBottom: 50 }}>
          <Text style={[styles.quesText, { fontSize: 40 }]}>Question{this.state.currentQuestion + 1}.</Text>
          <Text
            style={[styles.quesText]}>{this.state.questionList[this.state.currentQuestion].question}</Text>
        </View>
        <Rating currentQuestion={this.state.currentQuestion}/>
        <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-evenly' }}>
          <AwesomeButton
            style={styles.button}
            width={100}
            height={60}
            onPress={this.showPrevQuestion}
            disabled={this.state.currentQuestion == 0}
            backgroundColor={'#8a61ed'}
          >
            Prev
          </AwesomeButton>
          <AwesomeButton
            style={styles.button}
            width={100}
            height={60}
            onPress=
              {this.state.currentQuestion != this.state.questionList.length - 1 ?
                this.showNextQuestion : this.submitSurvey}
            backgroundColor={'#8a61ed'}
          >
            {this.state.currentQuestion != this.state.questionList.length - 1 ?
              'Next' : 'Submit'}
          </AwesomeButton>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 40,
    margin: 20,
    marginRight: 30,
    marginLeft: 30
  },
  quesText: {
    textAlign: 'center',
    fontSize: 25,
    marginBottom: 15,
    margin: 10,
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'center'
  },
})

export default SurveyScreen