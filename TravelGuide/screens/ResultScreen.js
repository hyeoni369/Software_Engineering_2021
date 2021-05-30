import React, { Component } from 'react';
import { 
    StyleSheet,
    View,
} from 'react-native';

import ResultScroll from '../components/ResultScroll';
import SurveyStartModal from '../components/SurveyStartModal';


class ResultScreen extends Component {
    render() {
        return (
            <View style={styles.scrollView}>
                <ResultScroll route={this.props.route} />
                <SurveyStartModal navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollView:{
        backgroundColor: 'white',
    },
});

export default ResultScreen;