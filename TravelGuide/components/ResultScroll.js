import React, { Component } from 'react';
import { 
    ScrollView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import RecommendPlace from './RecommendPlace';
import { placeList } from '../assets/PlaceData';
import { surveyResultStorage } from '../assets/SurveyResultStorage';

class ResultScroll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recommend: surveyResultStorage.recommend
    }
  }

  componentDidUpdate(preprops) {
    if (preprops.route != this.props.route) {
      this.scrollView.scrollTo({
        y:0
      })
    }
  }

  render() {
    return (
      <View style = {styles.container}>
        <ScrollView ref={ref=> (this.scrollView=ref)}contentContainerStyle={styles.scrollView}>
          {this.state.recommend.map((data, index) => {
            return (
              <View key={index}>
                <View style = {styles.alltext}>
                  <Text style = {styles.text}> {data[0].toUpperCase() + data.slice(1)} </Text>
                  <Text style = {styles.viewMore}>더보기  </Text>
                </View>
                <RecommendPlace RecommendData = {placeList[data]}/>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView:{
    padding: 5,
  },
  alltext:{
    paddingTop: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text:{
    margin:8,
    fontSize:20,
    fontWeight:'bold',
  },
  viewMore:{
    color: '#996699',
  },
});

export default ResultScroll;