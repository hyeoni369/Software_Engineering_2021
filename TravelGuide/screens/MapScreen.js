import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DirectionScreen from "./DirectionScreen";
import PlaceSearchScreen from "./PlaceSearchScreen";

const Stack = createStackNavigator();

class MapScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Stack.Navigator headerMode={"none"}>
        <Stack.Screen name="Direction" component={DirectionScreen} />
        <Stack.Screen name="PlaceSearch" component={PlaceSearchScreen} />
      </Stack.Navigator>
    );
  }
}

export default MapScreen;
