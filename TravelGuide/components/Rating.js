import React from 'react'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel }  from 'react-native-simple-radio-button';
import { surveyList } from '../assets/SurveyList'

//radioButton 정보 배열
radio_props = [
  {label: '  매우 아니다  ', value: -2 },
  {label: '  아니다   ', value: -1 },
  {label: '  보통  ', value: 0 },
  {label: '   그렇다  ', value: 1 },
  {label: '  매우 그렇다  ', value: 2 },
]

class Rating extends React.Component {
  state = {
    value: 0
  }

  //버튼 눌렸을때 value 바꿔주고 questionList[currentQuestion].answer 바꿔줌
  onPress = (value) => {
    this.setState({ value: value })
    surveyList.questions[this.props.currentQuestion].answer = value;
  }

  render () {
    return (
      <RadioForm
        formHorizontal={true}
        animation={true}
        buttonColor={'#8a61ed'}
        style={{
          alignItems: 'center',
          flexDirection: 'center'
        }}
      >
        {
          radio_props.map((obj, i) => (
            <RadioButton labelHorizontal={false} key={i}>
              <RadioButtonInput 
                obj={obj}
                key={i}
                isSelected={surveyList.questions[this.props.currentQuestion].answer + 2 == i}
                lableHorizontal={true}
                buttonOuterColor={'#8a61ed'}
                buttonInnerColor={'#8a61ed'}
                buttonWrapStyle={{marginBottom: 10}}
                buttonSize={i === 0 || i === 4 ? 30 : (i === 1 || i === 3) ? 20 : 10}
                onPress={this.onPress}
              />
              <RadioButtonLabel 
                obj={obj}
                onPress={this.onPress}
              />

            </RadioButton>
          ))
        }  
      </RadioForm>
    )
  }
}

export default Rating;
