import Ionicons from "@expo/vector-icons/Ionicons";
import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import BottomDrawer from "react-native-bottom-drawer-view";

import DirectionAPI from "../components/directionAPI";
import Waypoint from "./Waypoint";

const TAB_BAR_HEIGHT = 100;

class DirectionInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waypoints: null,
    };
    this.directionApi = new DirectionAPI();
    console.log(props.origin, props.destination);
  }

  async findDirection(origin, destination) {
    const directionResult = await this.directionApi.getDirection(
      origin,
      destination
    );
    this.setState({ waypoints: this.directionApi.parse(directionResult) });
    console.log(this.directionApi.parse(directionResult));
  }

  render() {
    this.findDirection();
    return (
      <BottomDrawer
        containerHeight={500}
        borderRadius={50}
        downDisplay={485}
        startUp={false}
        offset={TAB_BAR_HEIGHT}
      >
        {
          <View style={styles.container}>
            <Ionicons name={"reorder-three"} size={30} />
            <ScrollView>
              <Waypoint />
            </ScrollView>
          </View>
        }
      </BottomDrawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

export default DirectionInfo;
