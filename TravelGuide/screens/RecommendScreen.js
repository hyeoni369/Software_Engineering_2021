import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet } from "react-native";

import SurveyScreen from "./SurveyScreen";
import ResultScreen from "./ResultScreen";

function ResultScreenNavi({ navigation, route }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ResultScreen navigation={navigation} route={route} />
    </SafeAreaView>
  );
}

function SurveyScreenNavi({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <SurveyScreen navigation={navigation} />
    </SafeAreaView>
  );
}

const SurveyStack = createStackNavigator();

class RecommendScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;

    return (
      <SurveyStack.Navigator style={styles.text}>
        <SurveyStack.Screen
          name="Result"
          component={ResultScreenNavi}
          options={{
            title: "여행지 추천",
            headerTintColor: "#5f3fa3",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          navigation={navigation}
        />
        <SurveyStack.Screen
          name="Survey"
          component={SurveyScreenNavi}
          options={{
            title: "Survey",
            headerTintColor: "#5f3fa3",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          navigation={navigation}
        />
      </SurveyStack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RecommendScreen;
