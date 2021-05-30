import React, { Component } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'

import { surveyResultStorage } from '../assets/SurveyResultStorage'
import { surveyList } from '../assets/SurveyList'

class SurveySubmitModal extends Component {
  state = {
    modalVisible: false
  }

  submitSurvey = () => {
    this.setModalVisible(!this.state.modalVisible) 
    surveyResultStorage.saveSurveyResult(surveyList)
    this.props.navigation.navigate('Result', surveyResultStorage)
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  componentDidUpdate(preprops) {
    if(preprops.submitFlag != this.props.submitFlag){
      this.setModalVisible(!this.state.modalVisible)
    }
  }

  render () {
    const { modalVisible } = this.state
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>설문을 제출하시겠습니까?</Text>
              <Text style={styles.modalText}>이전 설문이 있으면 결과가 삭제됩니다.</Text>
              <View style={styles.buttonRow}>
                <Button 
                  mode="contained" 
                  style={styles.button}
                  onPress={this.submitSurvey} >
                  Yes
                </Button>
                <Button mode="outlined" onPress={() => this.setModalVisible(!modalVisible)} style={styles.button}>
                  No
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  centeredView: {
    bottom: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22
  },
  modalView: {
    height: '34%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    margin: 20
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginTop: 10
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 25,
    textAlign: 'center',
    fontSize: 16
  },
  fab: {
    bottom: 1,
    right: 10,
    backgroundColor: '#5f3fa3',
    position: 'absolute',
  },
})

export default SurveySubmitModal
