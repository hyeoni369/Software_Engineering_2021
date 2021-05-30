import React, { Component } from 'react'
import { Modal, StyleSheet, Text, View, Image } from 'react-native'

class SurveySubmitModal extends Component {
  state = {
    modalVisible: false
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible })
  }

  componentDidUpdate(preprops) {
    if(preprops.modalFlag !== this.props.modalFlag){
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
              <View style ={styles.cardStyle}>
                <Image style={styles.image} source={{uri:this.props.item.image ,width : 240 , height: 150}} />
                <View style = {styles.texts}>
                <Text style={styles.textName}>{this.props.item.name}</Text>
                <Text style={styles.textTag}>{this.props.item.tag}</Text>
                <Text style={styles.textRating}>{this.props.item.rating} / 5.0</Text>
                <Text style={styles.textDes}>{this.props.item.description}</Text>
                </View>
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
    marginTop: 22,
  },
  modalView: {
    height: '60%',
    margin: 15,
    backgroundColor: '#5f3fa3',
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
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
  cardStyle:{
    backgroundColor: 'white',
    width:250,
    height:190,
    flex:1,
    borderRadius:10,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  texts:{
    alignItems: 'center',
    marginTop: 150,
  },
  textName:{
    marginTop: 200,
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold'
  },
  textTag:{
    fontSize: 16,
    marginTop: 5,
  },
  textRating:{
    fontSize: 15,
    marginTop: 5,
  },
  textDes:{
    lineHeight: 22,
    textAlign: 'center',
    fontSize: 15,
    marginTop: 5,
  },
  image:{
    borderRadius: 7,
    top:4,
    position:'absolute',
  },
});

export default SurveySubmitModal