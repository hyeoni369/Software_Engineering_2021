import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native';
import { 
  FlatList,
  View,
  Image,
  Text,
  StyleSheet,
} from 'react-native'

import PlaceDetailModal from './PlaceDetailModal'


class FlatListItem extends Component {
  state = {
    modalFlag: true
  }

  render() {
    return(
      <View style={styles.cardStyle}>
        <PlaceDetailModal style={styles.container} item={this.props.item} modalFlag={this.state.modalFlag} />
        <TouchableOpacity onPress={() => this.setState({ modalFlag: !this.state.modalFlag })}>
          <Image style = {styles.image} source={{uri:this.props.item.image ,width : 200 , height: 130}} /> 
        </TouchableOpacity>
        <Text style = {styles.text} numberOfLines={1} ellipsizeMode="tail" >{this.props.item.name}</Text>
      </View>
    );
  }
}


class RecommendPlace extends Component {
  constructor(props){
    super(props)
  }

  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', }}>
        <FlatList
          style={styles.flatStyle}
          data={this.props.RecommendData}
          horizontal={true}
          renderItem={({ item, index }) => <FlatListItem item={item} index={index}/>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardStyle:{
    backgroundColor: 'white',
    width:200,
    height:170,
    flex:1,
    margin:10,
    borderRadius:10,
    justifyContent: 'center', 
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,    
    elevation: 6,
  },
  flatStyle:{
    padding:3,
  },
  text:{
    marginLeft:8,
    fontSize:18,
    fontWeight: 'bold',
    padding: 8,
  },
  image:{
    top:0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecommendPlace;